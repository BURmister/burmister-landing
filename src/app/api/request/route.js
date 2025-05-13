// Handles POST requests to /api

import { privateFetch } from '@hooks/fetch';
import { NextResponse } from 'next/server';
import { z as zod } from 'zod';

const Schema = zod.object({
   Name: zod.string().min(1).max(64),
   Contact: zod.string().min(1).max(42),
   Comment: zod.string().max(512).optional(),
});

export async function POST(request) {
   // Проверка поступившего запроса на содержание токена
   const authHeader = [...request.headers]?.find((item) => item[0].toLowerCase() === 'authorization') || '';
   const token = authHeader[1].replace('Bearer ', '');
   if (token !== process.env.SERVER_TOKEN) return NextResponse.json({ error: true, message: 'Forbidden' }, { status: 403 });

   // проверка тела запроса
   const body = await request.json();
   if (!body?.data) return NextResponse.json({ error: true, message: 'NOT FOUND REQUEST DATA' }, { status: 400 });

   // валидация запроса
   const validation = Schema.safeParse(body.data);
   if (!validation.success) return NextResponse.json({ error: true, message: validation.error.format() }, { status: 400 });

   // отправялем запрос в CMS
   const response = await privateFetch('zayavkis', { method: 'POST', body });

   // Проверяем ответ
   if (!response?.data)
      return NextResponse.json({ error: true, message: response?.error?.message, log: response }, { status: response?.error?.status });
   return NextResponse.json({ data: response.data }, { status: 200 });
}

/* Проверка капчи
const https = require('https'),
    querystring = require('querystring');

const SMARTCAPTCHA_SERVER_KEY = "<ключ_сервера>";


function check_captcha(token, callback) {
    const postData = querystring.stringify({
        secret: SMARTCAPTCHA_SERVER_KEY,
        token: token,
        ip: '<IP-адрес_пользователя>', // Способ получения IP-адреса пользователя зависит от вашего фреймворка и прокси.
    });

    const options = {
        hostname: 'smartcaptcha.yandexcloud.net',
        port: 443,
        path: '/validate',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData),
        },
    };

    const req = https.request(options, (res) => {
        let content = '';

        res.on('data', (chunk) => {
            content += chunk;
        });

        res.on('end', () => {
            if (res.statusCode !== 200) {
                console.error(`Allow access due to an error: code=${res.statusCode}; message=${content}`);
                callback(true);
                return;
            }

            try {
                const parsedContent = JSON.parse(content);
                callback(parsedContent.status === 'ok');
            } catch (err) {
                console.error('Error parsing response: ', err);
                callback(true);
            }
        });
    });

    req.on('error', (error) => {
        console.error(error);
        callback(true);
    });

    // Write the POST data to the request body
    req.write(postData);
    req.end();
}


let token = "<токен>";
check_captcha(token, (passed) => {
    if (passed) {
        console.log("Passed");
    } else {
        console.log("Robot");
    }
});
*/

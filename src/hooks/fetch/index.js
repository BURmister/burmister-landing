'use server';

const api = process.env.CMS_URL + process.env.CMS_API_PREFIX + '/';

export const superFetch = async (postfix, params = { method: 'GET' }) => {
   try {
      if (params.body) params.body = JSON.stringify(params.body);

      const response = await fetch(api + postfix, {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.CMS_TOKEN}`,
         },
         ...params,
      });

      if (!response.ok) return response.json();
      const data = await response.json();
      return data;
   } catch (error) {
      console.error('Fetch error:', error);
   }
};

export const privateFetch = async (postfix, params = { method: 'GET' }) => {
   try {
      if (params.body) params.body = JSON.stringify(params.body);

      const response = await fetch(api + postfix, {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.CMS_WRITE_TOKEN}`,
         },
         ...params,
      });

      if (!response.ok) return response.json();
      const data = await response.json();
      return data;
   } catch (error) {
      console.error('Fetch error:', error);
   }
};

export const localFetch = async (postfix, params = { method: 'GET' }) => {
   try {
      if (params.body) params.body = JSON.stringify(params.body);

      // const response = await fetch(`http://localhost:${process.env.PORT}/api/` + postfix, {
      const response = await fetch(`https://burmister.vercel.app/api/` + postfix, {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.SERVER_TOKEN}`,
         },
         ...params,
      });

      if (!response.ok) return response.json();
      const data = await response.json();
      return data;
   } catch (error) {
      console.error('Fetch error:', error);
   }
};

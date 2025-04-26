'use server';

const api = process.env.CMS_URL + process.env.CMS_API_PREFIX + '/';
// const localApi = process.env.LOCAL_API_URL || 'http://localhost:3000/api';

export const superFetch = async (postfix, params = { method: 'GET' }) => {
   try {
      const response = await fetch(api + postfix, {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.CMS_TOKEN}`,
         },
         ...params,
      });

      if (!response.ok) return response;
      const data = await response.json();
      return data;
   } catch (error) {
      console.error('Fetch error:', error);
   }
};

// netlify/functions/getNews.js
const fetch = require('node-fetch');
exports.handler = async () => {
  const API_KEY = process.env.NEWSAPI_KEY;
  const res     = await fetch(
    `https://newsapi.org/v2/top-headlines?category=business&country=br&pageSize=6&apiKey=${API_KEY}`
  );
  const { articles } = await res.json();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articles),
  };
};
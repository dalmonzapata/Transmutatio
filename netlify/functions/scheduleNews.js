// netlify/functions/scheduleNews.js
const fetch = require('node-fetch');
exports.handler = async () => {
  // Mesma lógica do getNews.js
  // Você pode armazenar resultados em KV ou chamar rebuild via Netlify API
  return { statusCode: 200, body: 'OK' };
};
<<<<<<< HEAD
// Busca notícias via NewsAPI.org (2nd split-serverless recommended)
const newsContainer = document.querySelector('.news-list');
const API_KEY = '<SUA_NEWSAPI_KEY>'; // coloque sua chave aqui

fetch(`https://newsapi.org/v2/top-headlines?category=business&country=br&apiKey=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    newsContainer.innerHTML = data.articles.slice(0,6).map(a => `
      <article class="news-item">
        <h3><a href="${a.url}" target="_blank">${a.title}</a></h3>
        <p>${a.description || ''}</p>
        <time datetime="${a.publishedAt.slice(0,10)}">
          ${new Date(a.publishedAt).toLocaleDateString('pt-BR')}
        </time>
      </article>
    `).join('');
  })
  .catch(err => {
    newsContainer.innerHTML = '<p>Não foi possível carregar as notícias.</p>';
    console.error(err);
=======
// Busca notícias via NewsAPI.org (2nd split-serverless recommended)
const newsContainer = document.querySelector('.news-list');
const API_KEY = '<SUA_NEWSAPI_KEY>'; // coloque sua chave aqui

fetch('/.netlify/functions/getNews')
  .then(res => res.json())
  .then(data => {
    newsContainer.innerHTML = data.articles.slice(0,6).map(a => `
      <article class="news-item">
        <h3><a href="${a.url}" target="_blank">${a.title}</a></h3>
        <p>${a.description || ''}</p>
        <time datetime="${a.publishedAt.slice(0,10)}">
          ${new Date(a.publishedAt).toLocaleDateString('pt-BR')}
        </time>
      </article>
    `).join('');
  })
  .catch(err => {
    newsContainer.innerHTML = '<p>Não foi possível carregar as notícias.</p>';
    console.error(err);
>>>>>>> 782b017 (Integração automática de notícias)
  });
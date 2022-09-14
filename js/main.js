const apiKey = '9f80405023cc4294815b80945779a4b0';
const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-14&sortBy=publishedAt&apiKey=${apiKey}`;
const main = document.querySelector('main');

window.addEventListener('load', e =>{
   postNews();
   "use strict"; //restrito a funcionar em navegadores comES6
   if("serviceWorker" in navigator){
      navigator.serviceWorker.register("./sw.js");
   }
});

async function postNews(){
    const res = await fetch(url);
    const data = await res.json();
    main.innerHTML = data.articles.map(createArticle).join('\n');
}

function createArticle(article) {
    return  `
    <div class="article">
      <a href="${article.url}" target="_blank">
         <img src="${article.urlToImage}" class="image" alt="${article.content}" />
         <h2>${article.title}</h2>
         <p>${article.description}</p>
       </a>
    </div>
    `
}
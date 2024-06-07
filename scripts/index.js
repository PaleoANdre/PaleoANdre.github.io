const moreArticles = [
    {
        title: "SEXUAL DIMORPHISM OF PLACERIAS REVEALED",
        content: "New study reveals how tusks of the dycinodont Placerias revealed what gender it was.",
        imgSrc: "images/placerias.jpeg",
        imgAlt: "Placerias"
    }
];

let articlesLoaded = 0;

function loadMoreNews() {
    const articlesContainer = document.getElementById('additional-articles');
    const articlesToLoad = additionalArticles.slice(articlesLoaded, articlesLoaded + 2);

    articlesToLoad.forEach(article => {
        const articleElement = document.createElement('article');
        
        const title = document.createElement('h3');
        title.innerHTML = article.title;
        articleElement.appendChild(title);
        
        const content = document.createElement('p');
        content.innerHTML = article.content;
        articleElement.appendChild(content);
        
        const img = document.createElement('img');
        img.src = article.imgSrc;
        img.alt = article.imgAlt;
        img.classList.add('news-image');
        articleElement.appendChild(img);
        
        articlesContainer.appendChild(articleElement);
    });

    articlesLoaded += articlesToLoad.length;

    // Hide button if all articles are loaded
    if (articlesLoaded >= additionalArticles.length) {
        document.querySelector('.more-news-button').style.display = 'none';
    }
}
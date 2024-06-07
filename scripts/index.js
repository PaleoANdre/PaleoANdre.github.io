const additionalArticles = [
    {
        title: "SEXUAL DIMORPHISM OF PLACERIAS REVEALED",
        content: "New study reveals how tusks of the dycinodont Placerias revealed what gender it was.",
        imgSrc: "images/placerias.jpg",
        imgAlt: "Placerias"
    },
    {
        title: "NEW SPECIES OF ABELISAURID COEXISTED WITH CARNOTAURUS",
        content: "A new abelisaurid was found in Argentina named Koleken inkayali, this dinosaur was a smaller relative to the more popular Carnotaurus, but unlike Carnotaurus, Koleken doesn't have any horns, and had one of the shortest arms of all dinosaurs. Koleken was named after Chief Inakayal of the Tehuelche Indigneous people of Patagonia, a region known for having rock layers from the Cretaceous period. ",
        imgSrc: "images/koleken.jpg",
        imgAlt: "Koleken"
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
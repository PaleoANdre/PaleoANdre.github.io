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
    },
    {
        title: "NEW SPECIES OF PTEROSAUR NAMED AFTER ALIEN FROM AVATAR",
        content: "A new species of pterosaur has been found in southern Brazil, dating from the early Cretaceous period from 120 to 100 million years ago and it was named after 'Toruk', the giant pterosaur-like alien from James Cameron's Avatar. The pterosaur named 'Torukjara bandeirae' belonged to the tapejardis, a group of pterosaurs known for their extravagant crests and toothless beaks.",
        imgSrc: "images/torukjara.jpg",
        imgAlt: "Torukjara"
    },
    {
        title: "SMALLEST HOMINID OF ALL TIME",
        content: "The tiny hominid was named 'Buronius manfredschmidi', found on Germany, and lived around 11.6 million years ago, in the Miocene Epoch. The fossil consists of 2 teeth and the left kneecap, whcihc compared to other Great Apes, researchers estimated Buronius weighed only 10 kg or 22 lbs. Buronius teeth proved that it's diet was based off softer objects.",
        imgSrc: "images/Buronius.png",
        imgAlt: "Buronius"
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
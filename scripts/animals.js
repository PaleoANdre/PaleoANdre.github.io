document.addEventListener('DOMContentLoaded', function() {
    const dinos = [
        {
            name: 'Nothosaurus',
            description: 'This semiaquatic reptile probably lived similarly to seals nowadays -fishing at sea and resting on land. Its body and tail were long and flexible, and the long toes on each foot were probably webbed for swimming.',
            image: 'images/nothosaurus.jpeg'
        },
        {
            name: 'Tyrannosaurus',
            description: 'Measuring over 12m long and weighing over 10 tons. Tyrannosaurus was one of the most fearsome carnivorous dinosaurs from the Mesozoic.',
            image: 'images/trex2.jpg'
        },
        {
            name: 'Thalassocnus',
            description: 'This semiaquatic mammal probably lived similarly to seals nowadays -fishing at sea and resting on land. Its body and tail were long and flexible, and the long toes on each foot were probably webbed for swimming.',
            image: 'images/Thalassocnus.jpg'
        },
        {
            name: 'Triceratops',
            description: 'One of the largest and most common dinosaurs of its ecosystem, the Hell Creek Formation, meaning this dinosaur flourished during the Late Cretaceous. Triceratops weighed as much as 10 tons, and its skull alone was more than 2m long, with some measuring over 2.5m.',
            image: 'images/trike.jpg'
        },
        {
            name: 'Razanandrogobe',
            description: 'A distinctive crocodylomorph that lived on the Middle Jurassic Madagascar. This terrifying carnviore preyed upon dinosaurs. Even if it looked similar to a crocodile, Razanandrongobe was actually a distant relative of modern day crocodiels. Its name means "Ancestor Large Lizard".',
            image: 'images/razanandrongobe.jpg'
        }
    ];

    const dinoListContainer = document.getElementById('dino-list-container');

    dinos.forEach(dino => {
        const dinoCard = document.createElement('div');
        dinoCard.className = 'dino-card';

        const img = document.createElement('img');
        img.src = dino.image;
        img.alt = `${dino.name} image`;

        const dinoInfo = document.createElement('div');
        dinoInfo.className = 'dino-info';

        const h3 = document.createElement('h3');
        h3.textContent = dino.name;

        const p = document.createElement('p');
        p.textContent = dino.description;

        dinoInfo.appendChild(h3);
        dinoInfo.appendChild(p);

        dinoCard.appendChild(img);
        dinoCard.appendChild(dinoInfo);

        dinoListContainer.appendChild(dinoCard);
    });
});
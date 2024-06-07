document.addEventListener('DOMContentLoaded', function() {
    const dinos = [
        {
            name: 'Nothosaurus',
            description: 'This semiaquatic reptile probably lived similarly to seals nowadays -fishing at sea and resting on land. Its body and tail were long and flexible, and the long toes on each foot were probably webbed for swimming.',
            image: 'images/nothosaurus.jpeg'
        },
        {
            name: 'Tyrannosaurus',
            description: 'One of the most feared carnivores of the Cretaceous period.',
            image: 'images/trex2.jpg'
        },
        {
            name: 'Thalassocnus',
            description: 'This semiaquatic mammal probably lived similarly to seals nowadays -fishing at sea and resting on land. Its body and tail were long and flexible, and the long toes on each foot were probably webbed for swimming.',
            image: 'images/Thalassocnus.jpg'
        },
        {
            name: 'Triceratops',
            description: 'A herbivorous dinosaur known for its three horns and large bony frill.',
            image: 'images/triceratops.jpg'
        }
        // Add more dinos as needed
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
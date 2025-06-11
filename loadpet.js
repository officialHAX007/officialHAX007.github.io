// File: loadpet.js

const pets = [
    {"name": "Buddy", "type": "Dog", "age": 3, "img": "dog01.jpg"},
    {"name": "Max", "type": "Dog", "age": 4, "img": "dog02.jpg"},
    {"name": "Whiskers", "type": "Cat", "age": 2, "img": "cat01.jpg"},
    {"name": "Mittens", "type": "Cat", "age": 2, "img": "cat02.jpg"},
    {"name": "Daisy", "type": "Dog", "age": 1, "img": "dog03.jpg"},
    {"name": "Shadow", "type": "Cat", "age": 3, "img": "cat03.jpg"},
    {"name": "Pip", "type": "Bird", "age": 1, "img": "bird01.jpg"},
    {"name": "Mango", "type": "Bird", "age": 2, "img": "bird02.jpg"},
    {"name": "Pebble", "type": "Capybara", "age": 3, "img": "capybara01.jpg"},
    {"name": "River", "type": "Capybara", "age": 2, "img": "capybara02.jpg"},
    {"name": "Rocky", "type": "Hamster", "age": 0.5, "img": "https://placehold.co/180x180/ADD8E6/333333?text=Hamster"},
    {"name": "Bubbles", "type": "Fish", "age": 0.8, "img": "https://placehold.co/180x180/90EE90/333333?text=Fish"},
];

function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');

    if (petList) {
        petList.innerHTML = ''; // Clear existing content

        pets.forEach(pet => {
            const petItem = document.createElement('div');
            petItem.className = 'pet'; // Apply 'pet' class for styling

            // Populate the innerHTML with pet details: image, name, type, and age.
            petItem.innerHTML = `
                <img src="${pet.img}" alt="${pet.name}" onerror="this.onerror=null;this.src='https://placehold.co/180x180/cccccc/333333?text=Pet+Image';">
                <h3>${pet.name}</h3>
                <p>Type: ${pet.type}</p>
                <p>Age: ${pet.age} years</p>
                <button onclick="adoptPet()">Adopt Now</button>
            `;
            petList.appendChild(petItem);
        });
        console.log('Pets loaded successfully.');
    } else {
        console.error("Error: Element with ID 'pet-list' not found. Pets cannot be loaded on this page.");
    }
}

document.addEventListener('DOMContentLoaded', loadPets);
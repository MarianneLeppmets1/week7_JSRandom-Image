const images = ['pic_1', 'pic_2', 'pic_3'];
const mainImage = document.querySelector('img');
const mainButton = document.querySelector('.btn');
const yearSpan = document.querySelector('#year');

let timeNow = new Date();
let year = timeNow.getFullYear();

yearSpan.textContent = year;



mainButton.addEventListener('click', () => {

    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];

    mainImage.src = 'images/' + randomImage + ".jpeg";

});
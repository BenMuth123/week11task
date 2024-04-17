const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ['img/pexels-pixabay-259554.jpg','img/pexels-pixabay-37833.jpg','img/pexels-pixabay-47547.jpg','img/pexels-pixabay-53581.jpg'];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];
}
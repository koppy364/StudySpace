const images = [
  "bg01.jpg",
  "bg02.jpg",
  "bg03.jpg"
]

const chosenImage = images[Math.floor((Math.random() * images.length))];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
console.log(`img:${bgImage.src},${Math.floor((Math.random() * images.length))}`);

document.body.appendChild(bgImage);
const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

async function getImage () {
    let res = await fetch("https://picsum.photos/v2/list?limit=100");
    let images = await res.json();
    console.log(images);
}

getImage();
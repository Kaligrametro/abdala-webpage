import fs from 'fs';
fs.readdir('./fotos', (err, files) => {});
console.log(files);

for(let i = 1; i < 37; i++) {
  createImageLayout(i);
}

const fs = require('fs');

/*
for (let i = 1; true; i++)
{
  const images = require(`./fotos/img${i}.jpg`);
  console.log(images);

}*/



function createImageLayout(number){
    let galeriaDeFotos = document.getElementsByClassName("galeriaFotos")[0];

    let a = document.createElement("a");
    a.href = `fotos/img${number}.jpg`;
    a.style.backgroundImage = `url(fotos/img${number}.jpg)`;
    a.classList.add(`layout-image`);
    a.classList.add(`layout-image-${number}`);

    let ion_icon = document.createElement("ion-icon");
    ion_icon.name = "expand-outline";

    a.appendChild(ion_icon);
    galeriaDeFotos.appendChild(a);
}
for(let i = 1; i < 37; i++) {
  createImageLayout(i);
}

function createImageLayout(number){
    let galeriaDeFotos = document.getElementsByClassName("galeriaFotos")[0];
    let a = document.createElement("a");
    a.href = "fotos-tiny/img" + number + ".jpg";
    a.style.backgroundImage = "url(fotos-tiny/img" + number + ".jpg)";
    a.classList.add("layout-image");
    a.classList.add("layout-image-" + number);

    let ion_icon = document.createElement("ion-icon");
    ion_icon.name = "expand-outline";

    a.appendChild(ion_icon);
    galeriaDeFotos.appendChild(a);
}
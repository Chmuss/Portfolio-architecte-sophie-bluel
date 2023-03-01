export async function recherchetravaux() {
    try {
    const reponse = await fetch("http://localhost:5678/api/works");
    return reponse.json();
    
      
    } 
    catch (error) {
        return error;
    }  
}
function filtreobjet() {
    console.log("fonction bien lancée");
}
const allwork = document.getElementById("tous");
allwork.addEventListener("click", function() {
    filtreobjet()
})
const section = document.getElementById("portfolio");
const galerie = document.querySelector(".gallery");
console.log(galerie);
const travaux = await recherchetravaux();
for (let i=0; i<travaux.length; i++) {
const figure = document.createElement("figure");
const image = document.createElement("img");
image.scr = travaux[i].imageUrl;
image.setAttribute('src', image.scr);
figure.appendChild(image);
galerie.appendChild(figure);
const title = document.createElement("figcaption");
title.innerHTML = travaux[i].title;
figure.appendChild(title);
galerie.appendChild(figure);
};





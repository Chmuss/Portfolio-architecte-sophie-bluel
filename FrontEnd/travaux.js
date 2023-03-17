export async function recherchetravaux() {
    try {
    const reponse = await fetch("http://localhost:5678/api/works");
    return reponse.json();
    
      
    } 
    catch (error) {
        return error;
    }  
}

function effacerdom() {
    const effacer = document.querySelector(".gallery");
    effacer.replaceChildren();
}

function filtretout() {
    effacerdom()
    
    const section = document.getElementById("portfolio");
    const galerie = document.querySelector(".gallery");
    
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
}

function filtreobjets() {
    effacerdom();

    const section = document.getElementById("portfolio");
    const galerie = document.querySelector(".gallery");
     
    for (let i=0; i<travaux.length; i++) {
    let categ = travaux[i].categoryId;   
      
    if (categ == 1) {
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
    }
    };
}

function filtreappartements() {
    effacerdom();

    const section = document.getElementById("portfolio");
    const galerie = document.querySelector(".gallery");
     
    for (let i=0; i<travaux.length; i++) {
    let categ = travaux[i].categoryId;   
      
    if (categ == 2) {
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
    }
    };
}

function filtrehotelsretaurants() {
    effacerdom();
    
    const section = document.getElementById("portfolio");
    const galerie = document.querySelector(".gallery");
     
    for (let i=0; i<travaux.length; i++) {
    let categ = travaux[i].categoryId;   
     
    if (categ == 3) {
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
    }
    };
}
const toutletravail = document.getElementById("tous");
toutletravail.addEventListener("click", function() {
    filtretout()
})
const toutlesobjets = document.getElementById("objets");
toutlesobjets.addEventListener("click", function() {
    filtreobjets()
})
const toutlesappartements = document.getElementById("appartements");
toutlesappartements.addEventListener("click", function() {
    filtreappartements()
})
const toutleshotelsretaurants = document.getElementById("hotelsretaurants");
toutleshotelsretaurants.addEventListener("click", function() {
    filtrehotelsretaurants()
})


let affichebandeau = document.getElementById("bandeau");
let affichemodifier1 = document.getElementById("modifier1");
let affichemodifier2 = document.getElementById("modifier2");

if (localStorage.getItem("token") !== null) {
    
    
    valeurlogin.textContent = "logout";
    visible();

}  else {    
    valeurlogin.textContent = "login";
    nonvisible();
    
}

function nonvisible() {
    affichebandeau.style.visibility = "hidden";
    affichemodifier1.style.visibility = "hidden";
    affichemodifier2.style.visibility = "hidden";
    
    
}
function visible() {
    affichebandeau.style.visibility = "visible";
    affichemodifier1.style.visibility = "visible";
    affichemodifier2.style.visibility = "visible";
    
}

const travaux = await recherchetravaux();
filtretout();
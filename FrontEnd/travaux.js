/* recherche des travaux dans l'API*/
export async function recherchetravaux() {
    try {
        const reponse = await fetch("http://localhost:5678/api/works");
        return reponse.json();
    } 
    catch (error) {
        return error;
    }  
}




/* Les variable et constantes*/
let affichebandeau = document.getElementById("bandeau");
let affichemodifier1 = document.getElementById("modifier1");
let affichemodifier2 = document.getElementById("modifier2");
const travaux = await recherchetravaux();
let resultcategorie ;
let ouverturemodal = null;
let ouverturemodal2 = null;




/* a l'ouverture de la page , lanement de la function filtretout*/
filtretout();




/* les fonctions*/
function effacerdom() {
    const effacer = document.querySelector(".gallery");
    effacer.replaceChildren();
    const effacer2 = document.querySelector(".gallery2");
    effacer2.replaceChildren();
}

function filtretout() {
    effacerdom()
    const section = document.getElementById("portfolio");
    const galerie = document.querySelector(".gallery");
    const section2 = document.getElementById("portfolio");
    const galerie2 = document.querySelector(".gallery2");
    for (let i=0; i<travaux.length; i++) {
        affichagedom(i);
        affichagegallerie(i);
    };
}

function affichagedom(i) {
    const galerie = document.querySelector(".gallery");
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

function affichagegallerie(i) {
    const galerie2 = document.querySelector(".gallery2");
    const figure2 = document.createElement("figure2");
    const image2 = document.createElement("img");
    image2.scr = travaux[i].imageUrl;
    image2.setAttribute('src', image2.scr);
    figure2.appendChild(image2);
    galerie2.appendChild(figure2);
    const title2 = document.createElement("figcaption");
    title2.innerHTML = "éditer";
    figure2.appendChild(title2);
    galerie2.appendChild(figure2);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn-styled';
    button.onclick = function(e) {
        e.preventDefault();
        if (confirm("Êtes-vous sûr de vouloir supprimer?")){
        deletework(travaux[i].id);
        }
    }
    const container = document.createElement("figcaption");
    container.appendChild(button);
    figure2.appendChild(container);
}

async function deletework(id){
    let autori = "bearer "+localStorage.getItem("token");
        const supp = await fetch("http://localhost:5678/api/works/"+(id), {
            method: "DELETE",
            headers: {
                'Accept': '*/*', 
                'Authorization': autori
            },
        })
        if (!res.ok) {
            throw new Error('erreur pour effacer la ressource');
        }
}

function filtreobjets() {
    effacerdom();
    const section = document.getElementById("portfolio");
    const galerie = document.querySelector(".gallery");
    const section2 = document.getElementById("portfolio");
    const galerie2 = document.querySelector(".gallery2");
    for (let i=0; i<travaux.length; i++) {
        let categ = travaux[i].categoryId;   
        if (categ == 1) {
            affichagedom(i);
        }
        let categ2 = travaux[i].categoryId;   
        if (categ2 == 1) {
            affichagegallerie(i);
        }
    };
}

function filtreappartements() {
    effacerdom();
    const section = document.getElementById("portfolio");
    const galerie = document.querySelector(".gallery");
    const section2 = document.getElementById("portfolio");
    const galerie2 = document.querySelector(".gallery2");
    for (let i=0; i<travaux.length; i++) {
        let categ = travaux[i].categoryId;
        if (categ == 2) {
            affichagedom(i);
        }
        let categ2 = travaux[i].categoryId;   
        if (categ2 == 2) {
            affichagegallerie(i);
        }
    };
}

function filtrehotelsretaurants() {
    effacerdom();
    const section = document.getElementById("portfolio");
    const galerie = document.querySelector(".gallery");
    const section2 = document.getElementById("portfolio");
    const galerie2 = document.querySelector(".gallery2");
    for (let i=0; i<travaux.length; i++) {
        let categ = travaux[i].categoryId;   
        if (categ == 3) {
            affichagedom(i);
        }
        let categ2 = travaux[i].categoryId;   
        if (categ2 == 3) {
            affichagegallerie(i);
        }
    };
}

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

const openModal = function (e) {
    e.preventDefault();
    const target = document.querySelector(".modal");
    target.style.display = null;
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');
    ouverturemodal = target;
    ouverturemodal.addEventListener('click',closemodal);
    ouverturemodal.querySelector('.js-modal-close').addEventListener('click', closemodal);
    ouverturemodal.querySelector('.modalwrapper').addEventListener('click', stopPropagation)
}

const closemodal = function (e) {
    if (ouverturemodal === null) return;
    e.preventDefault();
    ouverturemodal.style.display = "none";
    ouverturemodal.setAttribute('aria-modal', 'true');
    ouverturemodal.removeAttribute('aria-modal');
    ouverturemodal.removeEventListener('click', closemodal);
    ouverturemodal.querySelector('.js-modal-close').removeEventListener('click', closemodal);
    ouverturemodal.querySelector('.modalwrapper').removeEventListener('click', stopPropagation)
    ouverturemodal= null
}

const openModal2 = function (e) {
    e.preventDefault();
    ouverturemodal.style.display = "none";
    ouverturemodal.setAttribute('aria-modal', 'true');
    ouverturemodal.removeAttribute('aria-modal');
    ouverturemodal.removeEventListener('click', closemodal);
    ouverturemodal.querySelector('.js-modal-close').removeEventListener('click', closemodal);
    ouverturemodal.querySelector('.modalwrapper').removeEventListener('click', stopPropagation)
    ouverturemodal= null
    const target2 = document.querySelector(".modal2");
    target2.style.display = null;
    target2.removeAttribute('aria-hidden');
    target2.setAttribute('aria-modal', 'true');
    ouverturemodal2 = target2;
    ouverturemodal2.addEventListener('click',closemodal2);
    ouverturemodal2.querySelector('.js-modal-close2').addEventListener('click', closemodal2);
    ouverturemodal2.querySelector('.modalwrapper2').addEventListener('click', stopPropagation)
}

const closemodal2 = function (e) {
    if (ouverturemodal2 === null) return;
    e.preventDefault();
    ouverturemodal2.style.display = "none";
    ouverturemodal2.setAttribute('aria-modal', 'true');
    ouverturemodal2.removeAttribute('aria-modal');
    ouverturemodal2.removeEventListener('click', closemodal2);
    ouverturemodal2.querySelector('.js-modal-close2').removeEventListener('click', closemodal2);
    ouverturemodal2.querySelector('.modalwrapper2').removeEventListener('click', stopPropagation)
    ouverturemodal2= null
    const affichageimage=document.getElementById('demandeimage');
    affichageimage.style.display = "";
    const affichageimage2=document.getElementById('imageselectionee');
    affichageimage2.style.display = "none";
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

function imageminiature() {
    const affichageimage=document.getElementById('demandeimage');
    affichageimage.style.display = "none";
    const affichageimage2=document.getElementById('imageselectionee');
    const urlaffichageimage2 = document.querySelector('.imageinseree').files[0].name;
    const urlaffichageimage3 = ("assets/images/" + urlaffichageimage2);
    document.getElementById("visuimage").src=urlaffichageimage3;
    affichageimage2.style.display = "";
}

const outputDiv= document.getElementById("imageselectionee")
document.getElementById("image-inseree").addEventListener("input", function(e) {
    const reader = new FileReader()
    reader.onload = function(){
        outputDiv.innerHTML = `
        <img src=${reader.result} id="visuimage" class="visuimage" alt="Image téléchargée.">
        `
    }
    outputDiv.style.display= "block"
    reader.readAsDataURL(e.target.files[0]);
});

async function saisieok() {
    if (document.getElementById("image-inseree").value ==='') {
        alert("Veuillez saisir une image");
        return
    }
    if (document.getElementById("titre").value === "") {
        alert("Veuillez saisir un titre");
        return
    }
    const resulturlimage2=document.getElementById('image-inseree').files[0];
    const resulttitre=document.getElementById("titre").value;
    const resultcategorie2=document.getElementById("categorie").value;
    if (resultcategorie2 === "Objets") {
        resultcategorie = 1;
    }
    if (resultcategorie2 === "Appartements") {
        resultcategorie = 2;
    }
    if (resultcategorie2 === "Hotels & restaurants") {
        resultcategorie = 3;
    }
    const data= createFormData(resulturlimage2,resulttitre,resultcategorie)
    let token = localStorage.getItem("token");
    const envoiphoto = await fetch("http://localhost:5678/api/works", {
            method: "POST",
            headers: {
                'Accept': 'application/json', 
                'Authorization': 'Bearer ' + token,  
         
            },
            body: data
            
        })
    if (envoiphoto.status === 201) {
        alert('Le projet est enregistré');
    }
}

export function createFormData(fileInput, titleInput, categoryInput) {
    const uploadFormData = new FormData();
    uploadFormData.append('image', fileInput);
    uploadFormData.append('title', titleInput)
    uploadFormData.append('category', categoryInput)
    return uploadFormData
}




/* les evenements au click de la souris */
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
document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click',openModal)
})
document.querySelectorAll('.js-modal2').forEach(a => {
    a.addEventListener('click',openModal2)
})
document.querySelectorAll('.jevalide').forEach(a => {
    a.addEventListener('click',saisieok)
})
document.querySelectorAll('.imageinseree').forEach(a => {
    a.addEventListener("change",imageminiature)
})
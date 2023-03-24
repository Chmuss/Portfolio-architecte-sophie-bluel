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
    const effacer2 = document.querySelector(".gallery2");
    effacer2.replaceChildren();
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

    const section2 = document.getElementById("portfolio");
    const galerie2 = document.querySelector(".gallery2");
    
    for (let i=0; i<travaux.length; i++) {
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
    button.onclick = async function() {
        let autori = "bearer "+localStorage.getItem("token");
        console.log(autori);
        const supp = await fetch("http://localhost:5678/api/works/"+(travaux[i].id), {
            method: "DELETE",
            headers: {
                'Accept': '*/*', 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3OTU2NDg2NiwiZXhwIjoxNjc5NjUxMjY2fQ.uJdLI1KyF-criWgL96eNj4lyH6mnzwGcmiSl4rBBZwM'
            },
            body: {
                
            }
        })
    };
     const container = document.createElement("figcaption");
     container.appendChild(button);
     figure2.appendChild(container);



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


    const section2 = document.getElementById("portfolio");
    const galerie2 = document.querySelector(".gallery2");
     
    for (let i=0; i<travaux.length; i++) {
    let categ2 = travaux[i].categoryId;   
      
    if (categ2 == 1) {
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
        button.onclick = function() {
        console.log(i);
        };
        const container = document.createElement("figcaption");
        container.appendChild(button);
        figure2.appendChild(container);
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



    const section2 = document.getElementById("portfolio");
    const galerie2 = document.querySelector(".gallery2");
     
    for (let i=0; i<travaux.length; i++) {
    let categ2 = travaux[i].categoryId;   
      
    if (categ2 == 2) {
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
        button.onclick = function() {
        console.log(i);
        };
        const container = document.createElement("figcaption");
        container.appendChild(button);
        figure2.appendChild(container);
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


    const section2 = document.getElementById("portfolio");
    const galerie2 = document.querySelector(".gallery2");
     
    for (let i=0; i<travaux.length; i++) {
    let categ2 = travaux[i].categoryId;   
     
    if (categ2 == 3) {
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
        button.onclick = function() {
        console.log(i);
        };
        const container = document.createElement("figcaption");
        container.appendChild(button);
        figure2.appendChild(container);
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

let ouverturemodal = null;
let ouverturemodal2 = null;

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
    
}

const stopPropagation = function (e) {
    e.stopPropagation()
}
document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click',openModal)
})
document.querySelectorAll('.js-modal2').forEach(a => {
    a.addEventListener('click',openModal2)
})
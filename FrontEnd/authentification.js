async function recherchelogin() {
        const requeteOptions = {
        method: 'POST',
        
    };
    const response = await fetch('http://localhost:5678/api/users/login', requeteOptions);
    const data = await response.json();
    console.log (data);
}

const lancementverif = document.getElementById("clicbouton");
lancementverif.addEventListener("click", function() {
    recherchelogin()
})

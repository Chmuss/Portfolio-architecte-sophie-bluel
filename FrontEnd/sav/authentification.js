async function recherchelogin() {
    const recupmail = document.getElementById("saisieemail").value;
    const recupmdp = document.getElementById("saisiemotdepasse").value;
    const reponse = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: recupmail,
                password: recupmdp
            })
        })
    const data = await reponse.json();
    console.log(data);
    if (reponse.status == 200) {
        
        localStorage.setItem("token", data.token);
        document.location.href="index.html";
        
    } else {
        alert("E-mail ou mot de passe invalide");
        
    }
};
localStorage.removeItem("token");
const lancementverif = document.getElementById("clicbouton");
lancementverif.addEventListener("click", function(event) {
    event.preventDefault();
    recherchelogin()
})

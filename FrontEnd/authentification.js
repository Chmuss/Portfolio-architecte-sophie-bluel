async function recherchelogin() {
    const recupmail = document.getElementById("saisieemail").value;
    console.log(recupmail);
    const recupmdp = document.getElementById("saisiemotdepasse").value;
    console.log(recupmdp);
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
    console.log(reponse);
}
const lancementverif = document.getElementById("clicbouton");
lancementverif.addEventListener("click", function(event) {
    event.preventDefault();
    recherchelogin()
})

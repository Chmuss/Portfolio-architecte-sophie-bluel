async function recherchelogin() {
    const recupmail = document.getElementById("saisieemail").value;
    console.log(recupmail);
    const recupmdp = document.getElementById("saisiemotdepasse").value;
    console.log(recupmdp);
    const reponse = await fetch("http://localhost:5678/api/users/login");
    console.log(reponse);
}
const lancementverif = document.getElementById("clicbouton");
lancementverif.addEventListener("click", function() {
    recherchelogin()
})

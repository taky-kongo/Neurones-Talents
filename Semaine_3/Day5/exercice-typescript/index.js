var firstName = prompt('Entrer votre nom:');
var message = "Bonjour " + firstName + ", que voudrez vous ?";
alert(message);
alert("1. Café\n2. Thé\n3. Eau\n4. Jus de fruit");
var choice = prompt("Entrez votre choix (1-4):");
if (choice === "1") {
    alert("Vous avez choisi un café.");
}
else if (choice === "2") {
    alert("Vous avez choisi un thé.");
}
else if (choice === "3") {
    alert("Vous avez choisi de l'eau.");
    prompt;
}
else if (choice === "4") {
    alert("Vous avez choisi un jus de fruit.");
}
else {
    alert("Choix invalide. Veuillez entrer un nombre entre 1 et 4.");
}

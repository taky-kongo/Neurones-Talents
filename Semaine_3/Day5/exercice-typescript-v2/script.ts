
const button = document.getElementById("submitButton");


function getName() {
    let firstName = document.getElementById("firstName")?.textContent || "";
    console.log(`Name retrieved: ${firstName}`);
}
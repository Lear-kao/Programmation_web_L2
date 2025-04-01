var ancienX, ancienY, elementActuel;
var sourisEnfoncee = false;

let bouton = document.getElementById("bouton");

function mouseDown(event) {
    sourisEnfoncee = true;
    elementActuel = event.target.closest("div"); // Stocke l'élément en cours de déplacement
    ancienX = event.clientX;
    ancienY = event.clientY;

    // Stocke la position actuelle de l'élément
    elementActuel.style.position = "absolute"; // S'assure qu'il est positionnable
    elementActuel.departX = parseInt(getComputedStyle(elementActuel).left) || 0;
    elementActuel.departY = parseInt(getComputedStyle(elementActuel).top) || 0;

    console.log("Souris enfoncée à :", ancienX, ancienY);
}

document.querySelectorAll(".postit").forEach(element => {
    element.addEventListener("mousedown", mouseDown);
});

function mouseMove(event) {
    if (sourisEnfoncee && elementActuel) {
        var depX = event.clientX - ancienX;
        var depY = event.clientY - ancienY;
        
        elementActuel.style.left = (elementActuel.departX + depX) + "px";
        elementActuel.style.top = (elementActuel.departY + depY) + "px";
    }
}

function mouseUp() {
    sourisEnfoncee = false;
    elementActuel = null;
}

function addiv(event)
{
    var newdiv = document.createElement("div");
    newdiv.classList.add("postit");
    newdiv.textContent = prompt("nouveau postit : ");   
    newdiv.addEventListener("mousedown", mouseDown);
    document.getElementById("body").appendChild(newdiv);
}

document.addEventListener("mousemove", mouseMove);
document.addEventListener("mouseup", mouseUp);
bouton.addEventListener("click",addiv);
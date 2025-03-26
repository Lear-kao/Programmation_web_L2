var ancienX;
var ancienY;
var sourisEnfoncee = false;
var temp;

function mouseDown(event) {
    sourisEnfoncee = true;
    ancienX = event.clientX;
    ancienY = event.clientY;

    console.log("Souris enfoncée à :", ancienX, ancienY);
}

document.querySelectorAll(".postit").forEach(element => {
    element.addEventListener("mousedown", mouseDown);
});

function mouseMove(event) {
    if (sourisEnfoncee)
    {
        var depX = event.clientX - (ancienX)+"px";
        var depY = event.clientY - (ancienY)+"px";
        event.target.style.top = (300+depX)+"px";
        event.target.style.left = (300+depY)+"px";
        console.log("Position actuelle :", event.target.style.top, event.target.style.left);
    }
}

// Fonction déclenchée lors du relâchement de la souris
function mouseUp() {
    sourisEnfoncee = false;
}

document.addEventListener("mousemove", mouseMove);
document.addEventListener("mouseup", mouseUp);
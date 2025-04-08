// Sélection du canvas
var canvas = document.getElementById("canvas");

// Récupération du contexte 2D
var ctx = canvas.getContext("2d");

// Dessin d'un rectangle rouge

function rand_color() {
    let nr = Math.floor(Math.random() * 256); // Rouge entre 0 et 255
    let ng = Math.floor(Math.random() * 256); // Vert entre 0 et 255
    let nb = Math.floor(Math.random() * 256); // Bleu entre 0 et 255
    return `rgb(${nr},${ng},${nb})`;
}

for(let  i = 0; i < 50;i++)
{
    let randomx = Math.floor(Math.random()*300);
    let randomy= Math.floor(Math.random()*300);
    let randomL = Math.floor(Math.random()*100);
    let randoml = Math.floor(Math.random()*100);
    let randomcoul = Math.floor(Math.random()*6);
    ctx.fillStyle = rand_color(); 
    ctx.fillRect(randomx, randomy, randomL, randoml);
}

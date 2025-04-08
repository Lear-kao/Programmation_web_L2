const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const Cx = canvas.width / 2;
const Cy = canvas.height / 2;
const rayon = 150; // Rayon du cadran

function calcul_aiguille() {
    let maintenant = new Date();
    let heures = maintenant.getHours() % 12;
    let minutes = maintenant.getMinutes();
    let secondes = maintenant.getSeconds();

    // Angles en radians
    let angle_heures = ((heures + minutes / 60) * Math.PI) / 6 - Math.PI / 2;
    let angle_minutes = ((minutes + secondes / 60) * Math.PI) / 30 - Math.PI / 2;
    let angle_secondes = (secondes * Math.PI) / 30 - Math.PI / 2;

    // Dessiner les aiguilles
    dessine_aiguille(rayon * 0.5, angle_heures, 6); // Heures
    dessine_aiguille(rayon * 0.7, angle_minutes, 4); // Minutes
    dessine_aiguille(rayon * 0.9, angle_secondes, 2); // Secondes
}

function dessine_aiguille(longueur, angle, thick) {
    ctx.beginPath();
    ctx.lineWidth = thick;
    ctx.lineCap = "round";

    let x = Cx + Math.cos(angle) * longueur;
    let y = Cy + Math.sin(angle) * longueur;
    ctx.moveTo(Cx, Cy);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
}

function dessine_cadrant()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(150, 150, 125, 0, Math.PI * 2);
    ctx.lineWidth = 7;
    ctx.stroke();
    for(let i = 0; i < 12; i++)
    {
        let traitx = Cx +Math.cos((Math.PI*2)/12*i) * rayon*0.82;
        let traity = Cy +Math.sin((Math.PI*2)/12*i) * rayon*0.82;
        let traitxbis = Cx +Math.cos((Math.PI*2)/12*i) * rayon/2;
        let traitybis = Cy +Math.sin((Math.PI*2)/12*i) * rayon/2;
        ctx.lineWidth = 3;
        ctx.moveTo(traitx, traity);
        ctx.lineTo(traitxbis, traitybis);
        ctx.stroke();
        ctx.closePath();
    }
}

function update() {
    dessine_cadrant();
    calcul_aiguille();
    requestAnimationFrame(update);
}

update();
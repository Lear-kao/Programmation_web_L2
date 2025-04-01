let posx = 150,posy= 150;
let dx = 5,dy  = 5;
let velocity = 10;
let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function update()
{
    let  newposx = posx+dx;
    let  newposy = posy+dy;
    if( newposx + 5 > 500 ){
        dx = -5 * Math.random();
        newposx = posx+dx;
    }
    if( newposx-5 < 0 ){
        dx = -5 * Math.random();
        newposx = posx+dx;
    }
    if( newposy + 5 > 500 ){
        dy = -5 * Math.random();
        newposy = posy+dy;
    }
    if( newposy-5 < 0 ){
        dy = -5 * Math.random();
        newposy = posy+dy;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(newposx, newposy, 10, 0, Math.PI * 2);
    ctx.fill()
    posx = newposx;
    posy = newposy;
}

function init()
{
    posx= Math.floor(Math.random()*500);
    posy= Math.floor(Math.random()*500);
}

init();
setInterval(update,10);
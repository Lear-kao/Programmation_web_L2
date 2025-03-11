var lampe = document.getElementById("image");

function allumer()
{
    document.body.style.background = "white";
    document.body.style.color = "black";
    lampe.src = "ampoule-fil-allumee.png";
}

function eteindre()
{
    document.body.style.background = "black";
    document.body.style.color = "white";
    lampe.src = "ampoule-fil-eteinte.png";
}
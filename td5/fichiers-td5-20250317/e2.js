
//evenement
let image1 = document.getElementById("D0");
let image2 = document.getElementById("D1");
let image3 = document.getElementById("D2");
let image4 = document.getElementById("D3");
let image5 = document.getElementById("D4");
let image6 = document.getElementById("D5");

let retourner = document.getElementById("turn");
let echanger = document.getElementById("exch");

//selection
var imSelec = [];

//image
var  tab_im = 
[
    {nom : "piece0.png", data_pos : 0,data_orientation : 0},
    {nom : "piece1.png", data_pos : 1,data_orientation : 0},
    {nom : "piece2.png", data_pos : 2,data_orientation : 0},
    {nom : "piece3.png", data_pos : 3,data_orientation : 0},
    {nom : "piece4.png", data_pos : 4,data_orientation : 0},
    {nom : "piece5.png", data_pos : 5,data_orientation : 0}
];


var rot = [0,90,180,270];

function init()
{
    for( var i = 0; i < 6; i++)
    {
        let a = Math.floor(Math.random()*6);
        let b = Math.floor(Math.random()*6);
        let c = Math.floor(Math.random()*4);
        temp = tab_im[a].data_pos;
        tab_im[a].data_orientation = rot[c];
        tab_im[a].data_pos = tab_im[b].data_pos;
        tab_im[b].data_pos = temp;
    }
}

function afficher(){
    for(  var  i = 0; i < 6; i++)
    {
        let img = document.querySelector("#d"+i+" img");
        let temp = tab_im.find(t => t.data_pos == i);
        img.src = temp.nom;
        img.setAttribute("data-pos",temp.data_pos);
        img.setAttribute("data-orientation",temp.data_orientation);
        img.style.transform = "rotate("+temp.data_orientation+"deg)";
    }
    complete();
}


//event listener
image1.addEventListener("click", function () {
    updateListe(0);
});

image2.addEventListener("click", function () {
    updateListe(1);
});

image3.addEventListener("click", function () {
    updateListe(2);
});

image4.addEventListener("click", function () {
    updateListe(3);
});

image5.addEventListener("click", function () {
    updateListe(4);
});

image6.addEventListener("click", function () {
    updateListe(5);
});

retourner.addEventListener("click", function ()
{
    retournerFunc();
});

echanger.addEventListener("click", function ()
{
    echangerFunc();
});


function updateListe( n )
{
    if (imSelec.length == 2)
    {
        imSelec.pop();
        imSelec.pop();
    }
    imSelec.push(n);
    updateAff();
}


function updateAff()
{
    for(  var  i = 0; i < 6; i++)
    {
        let img = document.querySelector("#D"+i+" img");
        img.style.border = "0px solid blue";
    }
    for( var i = 0; i < imSelec.length; i++)
    {
        var img = document.querySelector("#d"+imSelec[i]+" img");
        img.style.border = "5px solid blue";
    }
}

function retournerFunc()
{
    let temp = tab_im.find(t => t.data_pos == imSelec[0]);
    temp.data_orientation += 90;
    console.log( tab_im.data_orientation);
    afficher();
}


function echangerFunc()
{
    let temp = tab_im.find(t => t.data_pos == imSelec[0]);
    let temp2 = tab_im.find(t => t.data_pos == imSelec[1]);
    var t = temp.data_pos;
    temp.data_pos = temp2.data_pos;
    temp2.data_pos = t;
    afficher();
}

function complete()
{
    var marquer = 0;
    for( var i = 0; i < 6; i++ )
    {
        if(tab_im[i].data_pos != i || tab_im[i].data_orientation%360 != 0) marquer+=1;
    }
    if (marquer == 0) alert("gagné!");    
}

init();
afficher();

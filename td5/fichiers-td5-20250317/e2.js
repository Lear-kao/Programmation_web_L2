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
    for(  let  i = 0; i < 6; i++)
    {
        let img = document.querySelector("#d"+i+" img");
        let temp = tab_im.find(t => t.data_pos == i);
        img.src = temp.nom;
        img.setAttribute("data-pos",temp.data_pos);
        img.setAttribute("data-orientation",temp.data_orientation);
        img.style.transform = "rotate("+temp.data_orientation+"deg)";
    }
}

init();
afficher();

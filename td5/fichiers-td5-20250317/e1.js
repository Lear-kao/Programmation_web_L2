document.addEventListener("DOMContentLoaded", function () {
    // Récupérer les conteneurs de menu
    let container1 = document.getElementById("container1");
    let sousMenu1 = document.getElementById("sous-menu1");
    
    let container2 = document.getElementById("container2");
    let sousMenu2 = document.getElementById("sous-menu2");

    let c1 = document.getElementById("select-blabla");
    let c2 = document.getElementById("select-blibli");
    let c3 = document.getElementById("select-bloblo");

    let c4 = document.getElementById("select-lapin");
    let c5 = document.getElementById("select-pomme");
    
    let temp;

    function hide_par(menu)
    {
        menu.style.display = "none";
    }
    function show_par(menu)
    {
        menu.style.display = "flex";
    }

    hide_par(blibli);
    hide_par(bloblo);
    hide_par(lapin);
    hide_par(pomme);
    temp = blabla;

    // Fonction pour afficher un sous-menu
    function afficherSousMenu(menu) {
        menu.style.display = "flex";
    }

    // Fonction pour cacher un sous-menu
    function cacherSousMenu(menu) {
        menu.style.display = "none";
    }

    // Ajouter les événements pour le premier menu
    container1.addEventListener("mouseenter", function () {
        afficherSousMenu(sousMenu1);
    });

    container1.addEventListener("mouseleave", function () {
        cacherSousMenu(sousMenu1);
    });

    // Ajouter les événements pour le deuxième menu
    container2.addEventListener("mouseenter", function () {
        afficherSousMenu(sousMenu2);
    });

    container2.addEventListener("mouseleave", function () {
        cacherSousMenu(sousMenu2);
    });

    c1.addEventListener("click", function () {
        hide_par(temp);
        temp = blabla;
        show_par(blabla);
    });

    c2.addEventListener("click", function () {
        hide_par(temp);
        temp = blibli;
        show_par(blibli);
    });

    c3.addEventListener("click", function () {
        hide_par(temp);
        temp = bloblo;
        show_par(bloblo);
    });

    c4.addEventListener("click", function () {
        hide_par(temp);
        temp = lapin;
        show_par(lapin);
    });

    c5.addEventListener("click", function () {
        hide_par(temp);
        temp = pomme;
        show_par(pomme);
    });
});


var film = 
{
    titre : "oui",
    annee : "0000",
    realisateur: "ok",
    set_titre : function(){this.titre = prompt("titre : ");},
    set_year : function(){this.realisateur = prompt("real : ");},
    set_real : function(){this.annee = prompt("annee : ");},
};

film.set_titre();
film.set_real();
film.set_year();

document.writeln("Le film est "+film.titre+" sorti en "+film.annee+" et  réalisé par "+film.realisateur);

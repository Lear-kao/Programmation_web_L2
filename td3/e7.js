function getBalisesProfondeur(node, profondeur) {
    if (profondeur === 0) return [node.tagName.toLowerCase()];
    let balises = [];
    for (let enfant of node.children) {
        balises = balises.concat(getBalisesProfondeur(enfant, profondeur - 1));
    }
    return balises;
}

function afficherBalisesProfondeur() {
    let profondeur = parseInt(document.getElementById("profondeur").value, 10);
    let balises = getBalisesProfondeur(document.documentElement, profondeur);
    document.getElementById("balises-profondeur").textContent = balises.join(", ");
}

function afficherBalisesParNiveau() {
    let niveaux = [];
    function explorer(node, profondeur) {
        if (!niveaux[profondeur]) niveaux[profondeur] = [];
        niveaux[profondeur].push(node.tagName.toLowerCase());
        for (let enfant of node.children) {
            explorer(enfant, profondeur + 1);
        }
    }
    explorer(document.documentElement, 0);
    document.getElementById("balises-par-niveau").textContent = niveaux.map((balises, i) => `Niveau ${i}: ` + balises.join(", ")).join("\n");
}

document.addEventListener("DOMContentLoaded", afficherBalisesParNiveau);

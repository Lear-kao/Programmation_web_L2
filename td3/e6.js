let tab_fruit = ["poire", "raisin", "orange", "framboise"];
        
// Affichage en énumération normale
function init(){
    document.getElementById("enumeration").textContent = tab_fruit.join(", ");
        
    // Affichage en énumération inversée
    document.getElementById("inverse").textContent = tab_fruit.slice().reverse().join(", ");
    // Affichage sous forme de liste non ordonnée
    let ul = document.getElementById("liste");
    
    tab_fruit.forEach(fruit => 
    {
        let li = document.createElement("li");
        li.textContent = fruit;
        ul.appendChild(li);
    }
    );
}

function b_1()
{
    tab_fruit.push(prompt("nouveau fruit : "));
    init();
}

function b_2()
{
    tab_fruit.pop();
    init();
}

function b_3()
{
    tab_fruit.shift();
    init();
}

function b_4()
{
    tab_fruit = tab_fruit.reverse();
    init();
}

init();
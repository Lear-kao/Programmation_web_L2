var tab = [5,4,6,8,5,2,7];

function moy( tab )
{
    var sum = 0;
    for(var i =0; i < tab.length; i++)
    {
        sum += tab[i];
    }
    return(sum/tab.length);
}

function e_t( tab,moy)
{
    var sum = 0;
    for(var i =0; i < tab.length; i++)
    {
        sum += (moy-tab[i]) * (moy-tab[i]);
    }
    sum = sum/tab.length;
    sum = Math.sqrt(sum);
    return(sum);
}

function c_tab()
{
    var a = Number(prompt(" n= "));
    var tab = [];
    for(var  i = 0; i < a; i++)
    {
        tab.push(Number(prompt(" entrer nombre :")));
    }
    alert(moy(tab));
    alert(e_t(tab,moy(tab)));
}

alert(moy(tab));
alert(e_t(tab,moy(tab)));
c_tab();
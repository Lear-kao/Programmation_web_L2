var a = prompt("votre variable a : ");
var b = prompt("votre variable b : ");
alert(a+b);

var c = Number(prompt( " c = " ));
var i = 0;
var j = 0;
while( i  <= c )
{
    j = 0;
    while( j < i )
        {
            document.writeln(i);
            j++;
        }
    document.writeln("<br>");
    i++;
}

var d = Math.floor(Math.random() * 100);
var e = false;
while(e == false)
    {
        var f = Number(prompt( "guess = "));
        if( f == d )
            {
                e = true;
                alert("gagné!");
            }
        else if( f > d )
        {
            alert("trop grand");
        }
        else
        {
            alert("trop petit !");
        }
    }

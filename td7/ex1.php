<?php
$n = $_GET["n"];
$txt = "<table>";
for( $i = 0; $i < $n ; $i +=1 )
{
    $txt .= "<tr>";
    for(  $j = 0; $j < $n; $j+=1)
    {
        $txt .= "<td>" . $i * $j . "</td>";
    }
    $txt .= "</tr>";
}

echo($txt);

function month($mois)
{
    $trs = array
    (
        "janvier" => "01",
        "février" => "02",
        "mars" => "03",
        "avril" => "04",
        "mai" => "05",
        "juin" => "06",
        "juillet" => "07",
        "aout" => "08",
        "septembre" => "09",
        "octobre" => "10",
        "novembre" => "11",
        "decembre" => "12"
    );
    return $trs[$mois];
}

$date = explode(" ","15 janvier 2012");
$res_date = "<p>".$date[0]."/".month($date[1])."/".$date[2]."</p>";
echo($res_date)

?>
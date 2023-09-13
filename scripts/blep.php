<?php

$start = microtime(1);
$x = $y = $r = -999.9;
$ctr = 0;

function huh($x, $y, $r) : string{
    if ($x <= 0 && $y>=0){
        if ($x*$x+$y*$y <= $r*$r) return "Hit!";
        else return "Miss!";
    }
    if ($x > 0 && $y>0){
        return "Miss!";
    }
    if ($x <= 0 && $y<=0){
        if ($x+$y >= -$r) return "Hit!";
        else return "Miss!";
    }
    if ($x >= 0 && $y<=0){
        if ($x <= $r and $y >= -$r) return "Hit!";
        else return "Miss!";
    }
    return "Miss!";
}

$skip = 0;
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $x = floatval($_GET['rbX']);
    $y = floatval($_GET['txtY']);
    $r = floatval($_GET['cbR']);

    if ($skip == 0){
        if ($x >= -3 and $x <= 5){
            if ($y >= -5 and $y <= 5){
                if ($r >= 1 and $r <= 3){
                    $date = date(DATE_RFC2822);
                    $delta = number_format(microtime(1) - $start, 3);
                    $info .= $x . '+' . $y . '+' . $r . '+' . huh($x,$y,$r) . '+' . $delta . '+' . $date;
                    echo $info;
                }
            }
        }
    }
}

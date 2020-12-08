<?php 
$arrayOfInput =file ("input.txt");
foreach ($arrayOfInput as $key => $nombre1){
    foreach ($arrayOfInput as $key2 => $nombre2){
        $result=(intval($nombre1) + intval($nombre2));
        if ($result === 2020){
            echo "<li>"."$nombre1" . " et " . "$nombre2 <br>";
            echo "</li>";
            echo "answer = ". intval($nombre1) * intval($nombre2);
            return;
        }
    }
} 
?>
<?php 
$arrayOfInput =file ("input.txt");
print_r ($arrayOfInput);
foreach ($arrayOfInput as $key => $value){
    echo $key . "      ";
    echo $value . "    <br>";
}
?>
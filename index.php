<?php
require_once "vendor/autoload.php";

// require 'app/Worker.php';
// use Worker;  

class Developer extends App\Worker {
    
}

$newdev = new Developer(); 
$newdev->name = 'nadin'; 
echo $newdev->name;
<?php

$database = file_get_contents("database.json");
$database = json_decode($database, true);

echo json_encode($database);

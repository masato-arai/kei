<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */


$dev = array(
    'server' => 'localhost',
    'user' => 'homestead',
    'password' => 'secret',
    'database' => 'kei_dev');

$staging = array(
    'server' => 'localhost',
    'user' => 'theneighbourhood',
    'password' => 'Th2WnnqCU4vbsRaC',
    'database' => 'kei_staging');

$production = array(
    'server' => 'localhost',
    'user' => 'theneighbourhood',
    'password' => 'Th2WnnqCU4vbsRaC',
    'database' => 'kei_production');


return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),
    '.app' => $dev,
    'localhost' => $dev,
    '192.168.10.10' => $dev,
    'kei-staging.sekkithub.com' => $staging,
    'kei-production.sekkithub.com' => $staging,
    'www.km.cx' => $production
);
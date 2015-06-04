<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
        'omitScriptNameInUrls' => true,
        'generateTransformsAfterPageLoad' => false,
        'allowAutoUpdates' => false,
        'defaultImageQuality' => 85
    ),

    'localhost' => array(
        'devMode' => true,
        'siteUrl' => 'http://localhost:3000',
        'environment' => 'dev'
    ),

    '.app' => array(
        'devMode' => true,
        'siteUrl' => 'http://kei.app',
        'environment' => 'dev'
    ),
    
    'kei-staging.sekkithub.com' => array(
        'devMode' => true,
        'cooldownDuration' => 0,
        'siteUrl' => 'http://kei-staging.sekkithub.com',
        'environment' => 'staging'
    ),

    'www.km.cx' => array(
        'cooldownDuration' => 0,
        'siteUrl' => 'http://www.km.cx',
        'environment' => 'production'
    ),
);
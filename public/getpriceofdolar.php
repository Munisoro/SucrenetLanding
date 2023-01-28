<?php

$host = 'www.bcv.org.ve';
$url = "https://{$host}/";
$accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8';
$accept_language = 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3';
$user_agent = $_SERVER['HTTP_USER_AGENT'];

$headers = [
    'Host' => $host,
    'Accept' => $accept,
    'Accept-Language' => $accept_language
];

$header = '';

foreach($headers as $key => $val) {
    $header .= "{$key}: {$val}\r\n";
}

$header = rtrim($header, "\r\n");

$opts = [
    'https' => [
        'method' => 'GET',
        'protocol_version' => 2.0,
        'user_agent' => $user_agent,
        'header' => $header
    ],
    'ssl' => [
        "verify_peer" => false,
        "verify_peer_name" => false,
    ]
];

$context = stream_context_create($opts);
$stream = fopen($url, 'r', false, $context);

header('Content-Type: text/plain');

echo stream_get_contents($stream);

fclose($stream);
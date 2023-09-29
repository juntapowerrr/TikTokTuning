<?php

function getCurrentEnv()
{
    $base_url = "https://ladytuning.com";
    return [
        "base_url" => $base_url,
        "fondy" => [
            "api_url" => "https://api.fondy.eu/api/checkout/url",
            "merchant_id" => "1396424",
            "merchant_password" => "test",
            "redirect_url" => "{$base_url}/fondy.php",
            "payment_lifetime" => 3600,
            "payment_preifx" => "TIKTOK",
            "payment_description" => "Оплата услуг",
        ],
        "tarifs" => [
            "lite" => 745000,
            "basic" => 1095000,
            "pro" => 1654000,
        ]
    ];
}

function getFondyPayload($tarif)
{
    $timestamp = strtotime("now");
    $fondy = getCurrentEnv()["fondy"];
    $tarifs = getCurrentEnv()["tarifs"];
    $tarifAmount = isset($tarifs[$tarif]) ? $tarifs[$tarif] :  $tarifs["pro"];

    return [
        "merchant_id" => $fondy["merchant_id"],
        "order_id" => "{$fondy["payment_preifx"]}_{$timestamp}",
        "order_desc" => $fondy["payment_description"],
        "amount" => $tarifAmount,
        "currency" => 'UAH',
        "lang" => 'uk',
        "delayed" => 'N',
        "preauth" => 'N',
        "lifetime" => $fondy["payment_lifetime"],
        "response_url" => $fondy["redirect_url"],
        //"server_callback_url" => $fondy["redirect_url"], // FIXME
    ];
}

function getSignature($params = array())
{
    $fondy = getCurrentEnv()["fondy"];
    $params['merchant_id'] = $fondy["merchant_id"];
    $params = array_filter($params, 'strlen');
    ksort($params);

    $params = array_values($params);
    array_unshift($params, $fondy["merchant_password"]);
    $params = join('|', $params);

    return (sha1($params));
}

function clean(array $data)
{
    if (array_key_exists('response_signature_string', $data)) {
        unset($data['response_signature_string']);
    }

    unset($data['signature']);
    return $data;
}

function check(array $response)
{
    if (!array_key_exists('signature', $response)) {
        return FALSE;
    }

    $signature = $response['signature'];
    $response  = clean($response);
    return $signature == getSignature($response);
}


function makeFondyRequest($postData)
{
    $fondy = getCurrentEnv()["fondy"];
    $ch = curl_init($fondy["api_url"]);

    $jsonData = json_encode(["request" => $postData]);

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($jsonData)
    ));

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'Curl error: ' . curl_error($ch);
    }

    curl_close($ch);

    if ($response) {
        return $response;
    } else {
        return null;
    }
}

function createPayment($tarif)
{
    $base_url = getCurrentEnv()['base_url'];
    $params = getFondyPayload($tarif);
    $signature = getSignature($params);

    $postData = array_merge($params, ["signature" => $signature]);

    $response = makeFondyRequest($postData);
    if ($response === null) {
        header('Location: ' . "$base_url?error=fondy");
        exit; // Ensure that the script stops here to avoid any unexpected behavior
    }

    $json = json_decode($response);
    if (!isset($json->response->checkout_url)) {
        header('Location: ' . "$base_url?error=fondy_decode");
        exit;
    }

    header('Location: ' . $json->response->checkout_url);
}

if (isset($_POST['tarif'])) {
    createPayment($_POST['tarif']);
    exit;
}

if (isset($_POST['signature'])) {
    $base_url = getCurrentEnv()['base_url'];
    $valid = check($_POST);

    if ($valid && $_POST['response_status'] === 'success' && $_POST['order_status'] === 'approved') {
        $order_id = $_POST['order_id'];
        header('Location: ' . "$base_url/success.html&order_id={$order_id}");
    } else {
        header('Location: ' . "$base_url/error.html");
    }
    exit;
}

$base_url = getCurrentEnv()['base_url'];
header('Location: ' . "$base_url/?payment=no_payment");

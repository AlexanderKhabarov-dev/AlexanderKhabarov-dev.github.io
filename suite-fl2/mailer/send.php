<?php
require 'phpmailer/class.phpmailer.php';

$date = date("d/m/Y");
$time = date("H:i:s");

$name = $_POST["name"];
$phone = $_POST["phone"];
$task = $_POST["task"]; //Форма заказа
$comment = $_POST["comment"];
$delivery = $_POST["delivery"];

$geo_country = $_POST["geo_country"];
$geo_city = $_POST["geo_city"];
$geo_region = $_POST["geo_region"];

$referrer = $_POST["link_referrer"];

$utm_source = $_POST["utm_source"]; //Рекламный ресурс
$utm_term = $_POST["utm_term"]; //Ключевое слово
$utm_medium = $_POST["utm_medium"]; //Вид рекламы
$utm_campaign = $_POST["utm_campaign"]; //Название кампании
$utm_content = $_POST["utm_content"]; //Название группы


$message =  "Заявка оставлена в $time $date \n" .
            "С формы: $task \n\n" .
            "Имя: $name \n" .
            "Телефон: $phone \n" .
            "Комментарий: $comment \n" .
            "На сайте был: раз \n" .
            "Пришел с сайта: $referrer \n" .
            "Пришел по ссылке: \n\n" .
            "Страна: $geo_country \n" .
            "Регион: $geo_region \n" .
            "Город: $geo_city \n\n" .
            "Метки \n" .
            "Рекламный ресурс: $utm_source\n" .
            "Ключевое слово: $utm_term\n" .
            "Вид рекламы: $utm_medium\n" .
            "Название кампании: $utm_campaign\n" .
            "Название группы: $utm_content";

$email = new PHPMailer();


$email->From = "robot@webpinto.com";
$email->FromName = "ROBOT_SITE";
$email->Subject = $task;
$email->Body = $message;

$email->AddAddress("admin@megarost.org");
$email->AddAddress("support@megarost.org");
$email->AddAddress("saleairplane@gmail.com");



$email->Send();


?>
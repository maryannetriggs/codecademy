<?php

/*
CURRENCY EXCHANGE PROGRAM

Create variables to hold the amount of each foreign currency we’ll be exchanging: 2103942 Riel, 19092 Kyat, 109 Krones, 9094 Lek

Use echo to print how much of each currency we started out with.


Look up the exchange rate for each of those currencies. Save a variable for each exchange rate.


For each currency, calculate the amount of USD it will be exchanged for and use echo to print this to the terminal.


The currency exchange business takes a flat $1 fee per conversion. Calculate our final amount of USD and use echo to print it to the terminal.
*/

$riel = 2103942;
$kyat = 19092;
$krones = 109;
$lek = 9094;
$transactions = 4;

echo "You started with: $riel Riel, $kyat Kyat, $krones Krones and $lek Lek.";

# Currency exchange rates correct as of 12FEB2020
# Numbers rounded because for neatness

$riel_to_USD = 0.00024;
$kyat_to_USD = 0.00069;
$krones_to_USD = 0.11;
$lek_to_USD = 0.0090;

$USD_from_riel = round($riel * $riel_to_USD);
$USD_from_kyat = round($kyat * $kyat_to_USD);
$USD_from_krones = round($krones * $krones_to_USD);
$USD_from_lek = round($lek * $lek_to_USD);

echo "\nWith all your currency converted, you have $$USD_from_riel worth of Riel, $$USD_from_kyat worth of Kyat, $$USD_from_krones worth of Krones and $$USD_from_lek worth of Lek.";

$total_USD = ($USD_from_riel + $USD_from_kyat 
+ $USD_from_krones + $USD_from_lek) - ($transactions * 1);

echo "\nAfter transaction fees you have a total of $" .round($total_USD);

<?php
  
$annualExpenses = [
    "vacations" => 1000,
    "carRepairs" => 1000,    
];

$monthlyExpenses = [
    "rent" => 1500,
    "utilities" => 200,
    "healthInsurance" => 200
];

$grossSalary = 48150;
$socialSecurity = $grossSalary * .062;

$incomeSegments = [[9700, .88], [29775, .78], [8675, .76]];

$netIncome = (($incomeSegments[0][0] * $incomeSegments[0][1]) + ($incomeSegments[1][0] * $incomeSegments[1][1]) + ($incomeSegments[2][0] * $incomeSegments[2][1]));

$netIncome -= $socialSecurity;
$annualIncome = $netIncome;

echo "Annual income before deducting annual expenses: $$annualIncome\n";

$monthlyIncome = $annualIncome / 12;
echo "Monthly income before deducting annual expenses: $$monthlyIncome\n";

$monthlyIncome -= $monthlyExpenses["rent"];
$monthlyIncome -= $monthlyExpenses["utilities"];
$monthlyIncome -= $monthlyExpenses["healthInsurance"];

echo "Monthly income after deducting annual expenses: $$monthlyIncome\n";

$weeklyIncome = $monthlyIncome / 4.33;
echo "Weekly income before deducting weekly expenses: $$weeklyIncome\n";

$weeklyExpenses = [
  "gas" => 25,
  "food" => 90,
  "entertainment" => 47
];

$weeklyIncome -= $weeklyExpenses["gas"];
$weeklyIncome -= $weeklyExpenses["food"];
$weeklyIncome -= $weeklyExpenses["entertainment"];

echo "Weekly income after deducting week expenses: $$weeklyIncome\n";

$annualSavings = $weeklyIncome * 52;
echo "Annual savings possible over the year: $" . round($annualSavings);

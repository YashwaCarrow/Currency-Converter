#! /usr/bin/env node

import inquirer from "inquirer"

console.log("Hello,Welcome to y4c5-currency-converter")

const currency: any = {
    USD: 1, // Base currency / US Dollar
    EUR: 0.93, //Euro.
    GBP: 0.80, //Pound.
    INR: 83.55, //Indian Rupee.
    PKR: 278.04, //Pakistani Rupee.
    KWD: 0.31,  //Kuwaiti Dinar.
    SAR: 3.75, //Saudi Riyal.
    AED: 3.67,  //United Arab Emirates Dirham.
    CAD: 1.37, //Canadian Dollar.
};

let user_answer = await inquirer.prompt([
    {
    name: "from",
    message: "Enter the currency you have",
    type: "list",
    choices:["PKR","EUR","GBP","INR","USD","KWD","SAR","AED","CAD"]
},
{
    name: "to",
    message: "Enter the currency for convertion",
    type: "list",
    choices:["USD","EUR","GBD","INR","PKR","KWD","SAR","AED","CAD"]
},
{
    name: "amount",
    message: "Enter the Amount you want to convert",
    type: "number",
}
]
)

let userfromCurrency = user_answer.from
let fromAmount = currency[user_answer.from] 
let toAmount = currency[user_answer.to] 
let amount = user_answer.amount
let baseAmmount = amount / fromAmount //USD base currency 
let convertedAmmount = baseAmmount * toAmount

console.log(convertedAmmount.toFixed(2));
console.log("Thanks for using y4c5-currency-converter App");
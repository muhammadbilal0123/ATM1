#!/usr/bin/env node
// shabang
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter your first number", type: "number", name: "firstNumber" },
  { message: "enter your second number", type: "number", name: "secondNumber" },
  {
    message: "select these operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);


if (answer.operator === "addition") {
    console.log( answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
    console.log( answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {
    console.log( answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select valid operator");
}
console.log("the end");

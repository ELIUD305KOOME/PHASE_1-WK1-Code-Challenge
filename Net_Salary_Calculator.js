// Prompt input , initialize benefits & calculates total salary
while (true) {
  let userInput = prompt("ENTER AMOUNT IN KES");
  if (userInput === null || userInput.trim() === "") {
    alert("Please enter a valid amount.");
    continue;
  }
basicSalary = Number(userInput)
if (isNaN(basicSalary) || basicSalary <= 0) {
  alert("Please enter a valid amount.");
  continue; }
  break;
}
let benefits = 10000;
let totalSalary = (basicSalary + benefits)

// Calculate PAYE deduction
let totalPAYE;
const monthlyTotalSalary = totalSalary / 12;
if (totalSalary <= 24000) {
    totalPAYE = monthlyTotalSalary * (0.1);
} else if (totalSalary <= 32333) {
    totalPAYE = monthlyTotalSalary * (0.25);
} else if (totalSalary <= 500000) {
    totalPAYE = monthlyTotalSalary * (0.3);
} else if (totalSalary <= 800000) {
    totalPAYE = monthlyTotalSalary * (0.325);
} else {
    totalPAYE = monthlyTotalSalary * (0.35);
}
// deductions 

//calculate NHIF deduction
let totalNHIF;

if (totalSalary < 5999) {
    totalNHIF = 150;
} else if (totalSalary < 7999) {
    totalNHIF = 300;
} else if (totalSalary < 11999) {
    totalNHIF = 400;
} else if (totalSalary < 14999) {
    totalNHIF = 500;
} else if (totalSalary < 19999) {
    totalNHIF = 600;
} else if (totalSalary < 24999) {
    totalNHIF = 750;
} else if (totalSalary < 29999) {
    totalNHIF = 850;
} else if (totalSalary < 34999) {
    totalNHIF = 900;
} else {
    totalNHIF = 950;
}

//calculate NSSF deduction
let totalNSSF;
const nssfRate = 0.06;
if (totalSalary > 36000) {
    totalNSSF = (36000 * nssfRate) * 2;
} else {
    totalNSSF = (totalSalary * nssfRate) * 2;
}

//calculate Housing levy deduction
let totalhouseLevy = (totalSalary * 0.015) * 2;

//calculate Net salary
let netSalary = totalSalary - (totalPAYE + totalNHIF + totalNSSF + totalhouseLevy);

//display results  pop-up alert
window.alert(`Your total salary is ${totalSalary} KES, and your net salary is ${netSalary} KES.`);

//display results  console.log
console.log("Total Salary   Total PAYE   Total NHIF   Total NSSF   Net Salary");
console.log(`${totalSalary} KES, ${totalPAYE} KES, ${totalNHIF} KES, ${totalNSSF} KES, ${netSalary} KES`);
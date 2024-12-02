//prompt for the basic salary 
const basicSalary = Number(prompt("Input your basic salary: "));

//prompt for the benefits 
const benefits = Number(prompt("Input your benefits: "));

function calculateNetSalary(basicSalary, benefits) {
    //calculation of the gross salary 
    const grossSalary = basicSalary + benefits;

    //Pay as You Earn calculations 
    let tax;
    //if statement for the calculation of tax based on the salary
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1; //same as 10% of the specified salary
    } else if (grossSalary <= 32333) {
        tax = grossSalary * 0.25; //same as 25% of the specified salary
    } else if (grossSalary <= 500000) {
        tax = grossSalary * 0.3; //30% of the rest of the salary 
    } else if (grossSalary <= 800000) {
        tax = grossSalary * 0.325;
    } else {
        tax = grossSalary * 0.35;
    }

    //NHIF calculations i.e deductions
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    //NSSF Deductions
    const nssf1 = Math.min(grossSalary, 7000) * 0.06; // this covers the first 7,000 which is 6%
    const nssf2 = Math.min(Math.max(grossSalary - 7000, 0), 36000) * 0.06; //this covers 36,000 
    const nssf = nssf1 + nssf2;

    //net salary
    const netSalary = grossSalary - tax - nhif - nssf;

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE: ${tax}`);
    console.log(`NHIF Deduction: ${nhif}`);
    console.log(`NSSF Deductions: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

calculateNetSalary(basicSalary, benefits);
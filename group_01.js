var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

employees.forEach(function(employee){
  console.log(bonusArrayBuilder(employee));
});

function bonusArrayBuilder(employee){
  var employeeName = employee[0];
  var employeeNumber = employee[1];
  var employeeSalary = parseInt(employee[2]);
  var employeePerformace = employee[3];

  var bonusPercentage = basePerformanceBonusCalulator(employeePerformace);
  bonusPercentage += employeeLongevityBonus(employeeNumber);
  bonusPercentage -= maxSalaryDeduction(employeeSalary);
  bonusPercentage = checkMaxAndMin(bonusPercentage);

  var bonus = employeeSalary * bonusPercentage;
  var totalCompensation = employeeSalary + bonus;
  var roundedBonus = Math.round(bonus);

  return [employeeName, bonusPercentage, totalCompensation, roundedBonus];
}

function basePerformanceBonusCalulator(employeePerformace) {
  var baseBonusPercentage = 0;
  switch (employeePerformace) {
    case 5:
      baseBonusPercentage = 0.1;
      break;
    case 4:
      baseBonusPercentage = 0.06;
      break;
    case 3:
      baseBonusPercentage = 0.04;
      break;
  }
  return baseBonusPercentage;
}

function employeeLongevityBonus(employeeNumber){
  var longevityBonus = 0;
  if(employeeNumber.length === 4){
    longevityBonus = 0.05;
  }
  return longevityBonus;
}

function maxSalaryDeduction(employeeSalary) {
  var deduction = 0;
  if(employeeSalary > 65000){
    deduction = 0.01;
  }
  return deduction;
}

function checkMaxAndMin(bonusPercentage){
  bonusPercentage = Math.min(bonusPercentage, .13);
  bonusPercentage = Math.max(bonusPercentage, 0);
  return bonusPercentage;
}

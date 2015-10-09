
/*
	rewrite this to use the ternary operator
	Can you find any bugs
*/

function ternaryOperator (salary) {
var salaryDescription = 'unknown';
if (salary >= 25000) {
 salaryDescription = 'High Salary';
}
else if (salary <= 25000) {
 salaryDescription = 'Medium Salary';
}

console.log(salaryDescription);
}

ternaryOperator(30000);
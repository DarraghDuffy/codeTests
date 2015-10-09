

/*
Find the Bug here, if you run this the Total Sum output indicates NaN why ?
Explain your answer
*/

function sumAll () {
  var totalSum = 0, i=0;
  for (i=0;i<=arguments.length;i++) {
    totalSum += arguments[i];
  }
  console.log('Total Sum '+totalSum);
}

sumAll(1,2,3);
sumAll(1,2,3,4,5,6);
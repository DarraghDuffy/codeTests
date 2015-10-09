/*
explain the values produced, and be able to explain
scoping of this.
*/
var x = 100;

myObject = {
  x : 222,
  getAValue : function () {
   var x = 333;
    console.log('get a value ' + this.x); // ???
    (function () {
      console.log(this.x); // ???
    })();
  }
}

 myObject.getAValue();
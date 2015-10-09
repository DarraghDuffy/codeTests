
/*
a bug exists here, can you find the bug.
*/

function Foo(name) {this.name = name;}
Foo.prototype.myName = function() {return this.name;};

function Bar(name,label) {
Foo.call(name);
this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myLabel = function () {return this.label;};

var a = new  Bar('a', 'obj a');


/*
new object a should have a.myName and a.myLabel
but does it?
*/
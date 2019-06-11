// Function Constructors

function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.printFullname = function(){
    console.log(this.firstname + ' ' + this.lastname);
}

var person1 = new Person('John', 'Doe');
var person2 = new Person('Jane', 'Doe');

console.log(person1.firstname); // John
person1.printFullname(); // John Doe
person2.printFullname(); // Jane Doe

console.log(person1.printFullname === person2.printFullname); // true
console.log(person1 instanceof Person, person2 instanceof Person); // true, true
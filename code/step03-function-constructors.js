// Function Constructors

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.printFullname = function () {
  console.log(this.firstname + ' ' + this.lastname);
}

person1 = new Person('John', 'Doe');
person2 = new Person('Jane', 'Doe');

person1.printFullname(); // John Doe
person2.printFullname(); // Jane Doe

console.log(person1.__proto__ === person2.__proto__); // true
console.log(person1.printFullName === person2.printFullName); // true

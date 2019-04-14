// Inheritance -> Introducing Object.create

var person = {
    firstname: 'x',
    lastname: 'y',
    printFullname: function () {
        console.log(this.firstname + ' ' + this.lastname);
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john.__proto__ === person); // true
console.log(john.firstname, john.lastname); // John Doe
console.log(john.__proto__.firstname, john.__proto__.lastname); // x y
john.printFullname(); // John Doe

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';
console.log(john.__proto__ === person); // true
console.log(jane.__proto__.firstname, jane.__proto__.lastname); //x y
jane.printFullname(); // Jane Doe

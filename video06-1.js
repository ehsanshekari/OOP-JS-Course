// Object.create()

var person1 = {
    firstname: 'John',
    lastname: 'Doe',
    printFullname: function () {
        console.log(this.firstname + ' ' + this.lastname);
    }
}

/*
var john = {};
john.__proto__ = person1;
console.log(john.lastname);
john.printFullname();
console.log(john.__proto__ === person1);
*/

var john = Object.create(person1);
console.log(john.lastname);
john.printFullname();
console.log(john.__proto__ === person1);
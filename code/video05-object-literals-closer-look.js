// Object Literals, Closer Look

var person1 = {
    firstname: 'John',
    lastname: 'Doe',
    printFullname: function () {
        console.log(this.firstname + ' ' + this.lastname);
    }
}

var person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
    printFullname: function () {
        console.log(this.firstname + ' ' + this.lastname);
    }
}

console.log(person1.printFullname === person2.printFullname);  // false
console.log(person1.__proto__ === person2.__proto__) // true

person3 = new Object();
person3.firstname = 'Someone';
person3.lastname = 'Else';
person3.printFullname = function () {
    console.log(this.firstname + ' ' + this.lastname);
}

console.log(person3.firstname); // 'Someone'

Object.prototype.x = 100;

console.log(person3.x, person2.x, person1.x); // 100, 100, 100







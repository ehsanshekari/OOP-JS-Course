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

console.log(person1.__proto__ === person2.__proto__); // true
console.log(person1.printFullname === person2.printFullname); //false

console.log(person1.__proto__ === Object.prototype); // true
Object.prototype.x = 10; 
console.log(person1.x, person2.x); // 10 10











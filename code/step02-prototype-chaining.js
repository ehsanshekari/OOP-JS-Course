// Prototype Chaining

var person1 = {
    firstname: 'John',
    lastname: 'Doe',
    printFullname: function () {
        console.log(this.firstname + ' ' + this.lastname);
    }
}

person1.__proto__.x = {};
person1.__proto__.x.__proto__.y = 100
console.log(person1.y);  // 100







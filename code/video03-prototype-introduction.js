// Prototype Introduction

var person1 = {
    firstname: 'John',
    lastname: 'Doe',
    printFullname: function(){
        console.log(this.firstname + ' ' + this.lastname);
    }
}

console.log(person1.firstname);
person1.__proto__.x = 10;
console.log(person1.x);


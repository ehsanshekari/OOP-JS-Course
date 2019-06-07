// Object Literals

var person1 = {
    firstname: 'John',
    lastname: 'Doe',
    printFullname: function(){
        console.log(this.firstname + ' ' + this.lastname);
    }
}

console.log(person1.firstname);
person1.printFullname();
person1.lastname = 'Another Doe';
person1.printFullname();

person1.age = 25;
console.log(person1.age);


var person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
    printFullname: function(){
        console.log(this.firstname + ' ' + this.lastname);
    }
}

person2.printFullname();

var field = 'firstname';
console.log(person2[field]);

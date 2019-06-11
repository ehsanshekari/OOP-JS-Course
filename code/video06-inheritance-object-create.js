var person1 = {
    firstname: 'John',
    lastname: 'Doe',
    printFullname: function(){
        console.log(this.firstname + ' ' + this.lastname);
    }
}

// var john = {};
// john.__proto__ = person1; 
// console.log(john.lastname);

var john = Object.create(person1);
console.log(john.lastname);
console.log(john.__proto__ === person1); //true
// Object Literals

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

person1.printFullname(); // John Doe
person2.printFullname(); // Jane Doe








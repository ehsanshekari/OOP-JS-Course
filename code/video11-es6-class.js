// Inheritance -> ES6 -> Class

class Animal{
    constructor(name){
        this.name = name;
    }

    walk(destination){
        console.log(this.name,'is walking to', destination);
    }
}

let animal1 = new Animal('Cat');
animal1.walk('city');

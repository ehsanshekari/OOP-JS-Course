// Classes -> ES6

class Animal{
    constructor(name){
        this.name = name;
    }

    walk(destination){
        console.log(this.name, 'is walking to', destination);
    }
}

elephant = new Animal('elephant');
elephant.walk('Tehran');



// Inheritance -> Introducing .apply .call

var foo = { x: 50 };
var bar = { x: 60 };

// A function that uses `this`
function func() {
    console.log(this.x);
}

func.call(bar); // 60
func.call(foo); // 50

// Inheritance -> Introducing .apply .call
function func1(y, z) {
    console.log(this.x, y, z);
}

var obj1 = { x: 10 };
var obj2 = { x: 100 };

func1.call(obj1, 500, 1000); // 10, 500, 1000
func1.call(obj2, 500, 1000); // 100, 500, 1000
func1.apply(obj1, [500, 1000]); // 10, 500, 1000
func1.apply(obj2, [500, 1000]); // 100, 500, 1000


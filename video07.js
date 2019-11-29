// call & apply

// var x = 10;

function func1(a , b) {
  console.log(this.x, a, b);
}

var obj1 = { x: 10 };
var obj2 = { x: 100 };

func1.call(obj1, 500, 1000);
func1.call(obj2, 500, 1000);

func1.apply(obj1, [500, 1000]);
func1.apply(obj2, [500 , 1000]);

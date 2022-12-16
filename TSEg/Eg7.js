var foo1 = function (x) { return 10 + x; };
console.log(foo1(100));
//outputs 110
var foo2 = function (x) {
    x = 20 + x;
    console.log(x);
};
foo2(100);
// outputs 120

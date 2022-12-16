var global_num = 12; //global variable 
var tempNumbers = /** @class */ (function () {
    function tempNumbers() {
        this.num_val = 13; //class variable 
    }
    tempNumbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    tempNumbers.sval = 10; //static field 
    return tempNumbers;
}());
console.log("Global num: " + global_num);
console.log(tempNumbers.sval); //static variable  
var obj = new tempNumbers();
console.log("Class num: " + obj.num_val);

var global_num = 12          //global variable 
class tempNumbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
  
  } 

} 
console.log("Global num: "+global_num)  
console.log(tempNumbers.sval)   //static variable  
var obj = new tempNumbers(); 
console.log("Class num: "+obj.num_val)

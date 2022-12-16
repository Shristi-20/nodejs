var foo1 = (x:number)=>10 + x 
console.log(foo1(100))  
    //outputs 110

var foo2 = (x:number)=> {    
   x = 20 + x 
   console.log(x)  
} 
foo2(100) 
// outputs 120

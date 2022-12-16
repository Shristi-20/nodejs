function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   if(y!=undefined)
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");
disp(1,1);

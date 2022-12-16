function sum(n1:number,n2:number):number; 
function sum(n1:string,s1:string):string; 
function sum(n1:number,n2:number,n3:number,n4:number):number; 

function sum(x:any, y:any, z?:any, p?:any):any { 
if(z==undefined)
	console.log(x+y);
else
	console.log(x+y+z+p);


} 


sum(1,1)
sum(1.1, 1.1)
sum("string"," eg")
sum(1,2,3,4);


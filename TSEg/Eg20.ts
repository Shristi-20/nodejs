interface ILoan { 
   interest:number 
} 
class PersonalLoan implements ILoan { 
   interest:number 
   rebate:number 
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
} 

var obj = new PersonalLoan(12,2) 
console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )

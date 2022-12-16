var PersonalLoan = /** @class */ (function () {
    function PersonalLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return PersonalLoan;
}());
var obj = new PersonalLoan(12, 2);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate);

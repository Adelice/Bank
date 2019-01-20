function bank(){
    this.balance=0;
    this.deposit=0;
    this.withdraw=0;
    this.accountName;
}
bank.prototype.newAccount=function(){
    if(this.accountName=""){
        alert("Account name must be filled")
    }
    else{
        return this.accountName +" "+this.balance;
    }
};
bank.prototype.depositMoney=function(amount){
    this.deposit = this.deposit+ amount;

    
};
bank.prototype.withdrawMoney=function(amount){
    this.withdraw = this.withdraw-amount
}
$(document).ready(function() {
 
 
    $("form#create").submit(function(event) {
     event.preventDefault();
  
     var inputtedName = $("input#name").val();
     var inputtedBalance = parseInt($("input#initial").val());
  
  
     $(".balance").text(newAccount.balance);
    });
    
    $("form#manage").submit(function(event) {
 
        event.preventDefault();
     
     
        var newBalance = parseInt($("input#deposit").val())
     
        $(".balance").text(newAccount.balance);
       });

    $("form#withdraw").submit(function(event) {
        event.preventDefault();
     
        var newBalance = parseInt($("input#withdraw").val());
     
     
        $(".balance").text(newAccount.balance);
     
       });
    });
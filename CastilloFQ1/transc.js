var comName;
var bal;
function myFunction(event) {
    var x = event.key;
        if (x == "F10") clearSum()
        else if (x == "F9") clearOutField()
}
function clearSum(){
    document.transcProc.CashBankBeg.value = "";
    document.transcProc.totalW.value = "";
    document.transcProc.amnt1.value = "";
    document.transcProc.totalDep.value = "";
    document.transcProc.amnt2.value = "";
    document.transcProc.cashBankCur.value = "";
}
function clearOutField(){
    document.transcProc.es.value = "";
    document.transcProc.cosName.value = "";
    document.transcProc.transc.value = "";
    document.transcProc.amount.value = "";
    document.transcProc.newBalance.value = "";
}
function summary(){
    document.transcProc.CashBankBeg.value =  document.transcProc.balance.value;
    document.transcProc.cashBankCur.value = document.transcProc.newBalance.value;
    var trans = document.transcProc.transc.value;
    switch(trans){
        case 'W': 
        document.transcProc.totalW.value = document.transcProc.newBalance.value; 
        document.transcProc.amnt1.value = document.transcProc.amount.value;
        document.transcProc.totalDep.value = "";
        document.transcProc.amnt2.value = "";
        break;
        
        case 'D':
        document.transcProc.totalDep.value = document.transcProc.newBalance.value; 
        document.transcProc.amnt2.value = document.transcProc.amount.value;
        document.transcProc.totalW.value = "";
        document.transcProc.amnt1.value = "";
         break;
    }

}

function load(){
    var acctN = document.transcProc.es.value;
    

    switch(acctN){
        case "A1": 
            comName = "SM Corporation";
            bal = 50000;
            break;
        case "A2": 
        comName = "Seven Corporation";
            bal = 65000;
            break;
        case "A3": 
        comName = "Manny Pacquiao";
            bal = 100000;
            break;
        case "A4": 
            comName = "Rodrigo Duterte";
            bal = 90000;
            break;
        default: alert("Wrong Input in Account Number");
    }
        document.transcProc.cosName.value = comName;
        document.transcProc.balance.value = bal;  
}

function transProc(){
   var bal = Number(document.transcProc.balance.value);
   var trans = document.transcProc.transc.value;
   var amnt =  Number(document.transcProc.amount.value);
   var newBal;

   switch(trans){
    case "W": newBal = withDraw(bal , amnt); break;
    case "D": newBal = dep(bal, amnt); break;
   }

   document.transcProc.newBalance.value = newBal;
}

function withDraw(bal , amnt){
    return bal - amnt
}
function dep(bal , amnt){
    return bal + amnt;
}
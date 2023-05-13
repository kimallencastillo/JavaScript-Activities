var comName;
var bal;
function myFunction(event) {
    var x = event.key;
        if (x == "F10") clearSum()
        else if (x == "F9") clearOutField()
}
function clearSum(){
    document.transcProc.currBeg.value = "";
    document.transcProc.numWith.value = "";
    document.transcProc.amtWith.value = "";
    document.transcProc.numDep.value = "";
    document.transcProc.amtDep.value = "";
    document.transcProc.currBal.value = "";
}
function clearOutField(){
    document.transcProc.es.value = "";
    document.transcProc.cosName.value = "";
    document.transcProc.transc.value = "";
    document.transcProc.balance.value = 0;
    document.transcProc.amount.value = 0;
    document.transcProc.newBalance.value =0;
}
function summary(){
    var currBeg = Number(document.transcProc.currBeg.value) 
    var currBal = Number(document.transcProc.currBal.value) 
    var trans = document.transcProc.transc.value
    var noDep = Number(document.transcProc.numDep.value)
    var noWith = Number(document.transcProc.numWith.value)
    var amtDep = Number(document.transcProc.amtDep.value)
    var amtWith = Number(document.transcProc.amtWith.value)
    var amnt = Number(document.transcProc.amount.value)
    if(trans == 'D' || trans == 'd' ){
            noDep++
            amtDep +=amnt
            currBal += amnt
    }
    else if(trans == 'W' || trans == 'w' ){
            noWith++
            amtWith += amnt
            currBal -= amnt
    }
    document.transcProc.numWith.value = noWith
    document.transcProc.amtWith.value = amtWith
    document.transcProc.currBal.value = currBal
    document.transcProc.numDep.value = noDep
    document.transcProc.amtDep.value = amtDep


    clearOutField()
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
   var newBal = bal;

   /*switch(trans){
    case "W": newBal = withDraw(bal , amnt); break;
    case "D": newBal = dep(bal, amnt); break;
   }*/
   
   /*if(trans == 'D' || trans == 'd'){
        newBal = withDraw(bal , amnt);
    }else if(trans == 'w'|| trans == 'W'){
        if(bal < amnt){
            alert("Insufficient balance");
            return
        }
        newBal = dep(bal, amnt);
    }else alert("Wrong transaction type inputted!!")*/

    if (trans == 'D')
            newBal -= amnt
		else {
			if (bal < amnt)  {
				alert("Insufficient balance")
				return
			}
			else {
				newBal -= amnt
			}
		}
   document.transcProc.newBalance.value = newBal;
}

function withDraw(bal , amnt){
    return bal - amnt
}
function dep(bal , amnt){
    return bal - amnt;
}
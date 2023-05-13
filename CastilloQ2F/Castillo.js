var code;
var des ;
var qt ;
var i;
/*var codeNArr = new Array();
var desArr = new Array()
var onHandArr = new Array();
var codeName = document.smCalc.codeN.value;
var desItem = document.smCalc.itemDesc.value;
var onHandQty = document.smCalc.onHand.value;
var ctr = codeName.length;

for(i = 0 ; i < ctr ; i++){
    debugger;
    codeNArr.push(codeName[i])
}*/
function updateInv(updQt){

}

function loadInfo(){

    var codeItem = document.updateInv.itemC.value;
    switch(codeItem){
        case '100': 
            des = "Samsung DVD";
            qt = 4;
            break;
        case '101': 
            des = "Samsung Washing Machine";
            qt = 5;
            break;
        case '102': 
            des = "Huawei Mobile Phone";
            qt = 5;
            break;
        case '103': 
            des = "HP Printer with Scanner";
            qt = 5;
            break;
        case '104': 
            des = "	Sanyo Electric Fan";
            qt = 5;
            break;
        default: alert("Invalid Code Item");    
    }

    document.updateInv.desOt.value = des;
    document.updateInv.qtyOt.value = qt;
    localStorage.setItem("codeItem", codeItem);
}
function calc(){
    var qty = Number(document.updateInv.qtyOt.value);
    var trans = document.updateInv.transType.value;
    var quanti = Number(document.updateInv.quan.value);
    var updQt;
    switch(trans){
        case 'R':  updQt = sold(qty, quanti)  ;break;
        case 'S':  updQt = recieve(qty, quanti)  ;break;
    }
    document.updateInv.updQty.value = updQt;
    localStorage.setItem("qty", updQt);
}
function sold(a, b){
    return a - b;
}

function recieve(a, b){
    return a + b;
}
function checkQty() {
    var qty = Number(document.updateInv.quan.value)
    if (qty <= 0 ) 
        alert("Quantity must be greater than 0")
    if (isNaN(qty))
        alert("Quantity entered is not a number")
    
}
//Q2F-inventory
function upd(){
    var code = localStorage.getItem("codeItem");
    var quan = localStorage.getItem("qty");

    switch(code){
      case '100': 
          document.smCalc.onHand0.value = quan;
          break;
      case '101': 
          document.smCalc.onHand1.value = quan;
          break;
      case '102': 
          document.smCalc.onHand2.value = quan;
          break;
      case '103': 
          document.smCalc.onHand3.value = quan;
          break;
      case '104': 
          document.smCalc.onHand4.value = quan;
          break;
    }

}
var ctr = 1, i;
var name;
var country;
var qA;
var gown;
var pop;
var swimst;



function loadInfo(){
    var IdNo = document.constForm.es.value;
    switch(IdNo){
        case "C1": 
            name = "Domingo E.";
            country = "Philippines";
            qA = 9;
            gown = 5;
            pop = 8;
            swimst = 6;
            break;
        case "C2": 
            name = "Vice G.";
            country = "China";
            qA = 8;
            gown = 6;
            pop = 10;
            swimst = 8;
            break;
        case "C3": 
            name = "Aquino K.";
            country = "South Korea";
            qA = 10;
            gown = 7;
            pop = 10;
            swimst = 7;
            break;
        case "C4": 
            name = "Delas Alas A.";
            country = "Malaysia";
            qA = 6;
            gown = 8;
            pop = 9;
            swimst = 8;
            break;
        default: alert ("The value in Contestant No. is C1, C2, C3, C4"); 
    }

    document.constForm.constName.value = name;
    document.constForm.country.value = country;
    document.constForm.srQnA.value = qA;
    document.constForm.srGown.value = gown;
    document.constForm.srPop.value = pop;
    document.constForm.srSuit.value = swimst;
  

}


function compute() {
    var name = document.constForm.constName.value;
    var qNA = Number(document.constForm.srQnA.value);
    var gown =  Number(document.constForm.srGown.value);
    var pop =  Number(document.constForm.srPop.value);
    var swimst =  Number(document.constForm.srSuit.value);
    var opt = document.constForm.mode.value;
    var overAll = 0;

    switch(opt){
        case 'A': overAll = aveCalc(swimst, gown, qNA, pop); 
                break;
        case 'P': overAll = perCalc(swimst, gown, qNA, pop);
                break; 
    }
    overAll = overAll.toFixed(2);

    if(qNA < 1 || qNA > 10)
    alert("The Score in Q & A are only 1 - 10");
    else if(gown < 1 || gown > 10)
    alert("The Score in Gown are only 1 - 10");
    else if(pop < 1 || pop > 10)
    alert("The Score in Popularity are only 1 - 10");
    else if(swimst < 1 || swimst > 10)
    alert("The Score in Swimsuit are only 1 - 10");
    else
    document.constForm.overSr.value = overAll;
   

function aveCalc(swim, gown, qA, pplty){
    return (swim + gown + qA + pplty) /4;
}
function perCalc(s,g,q,p){
    return (0.15 * s) + (0.2 * g) + (0.4 * q) + (0.25 * p);
}
}

function saveFile() {
    
    var optOverAll = Number(document.constForm.overSr.value);;
    var constName = document.constForm.constName.value;

    switch(ctr){
        case 1:
            document.getElementById("n1").value = constName;
            document.getElementById("s1").value = optOverAll;
            break;
        case 2: 
            document.getElementById("n2").value = constName;
            document.getElementById("s2").value = optOverAll;
            break;
        case 3: 
            document.getElementById("n3").value= constName;
            document.getElementById("s3").value = optOverAll;
            break;
        case 4: 
            document.getElementById("n4").value = constName;
            document.getElementById("s4").value = optOverAll;
            break;
    }
    ctr++;
    if(ctr == 5) ctr = 0;
}

function restore(){
    document.constForm.constName.value = name;
    document.constForm.country.value = country;
    document.constForm.srQnA.value = qA;
    document.constForm.srGown.value = gown;
    document.constForm.srPop.value = pop;
    document.constForm.srSuit.value = swimst;
}
function newConst(){
    document.constForm.constName.value = "";
    document.constForm.country.value = "";
    document.constForm.srQnA.value = "";
    document.constForm.srGown.value = "";
    document.constForm.srPop.value = "";
    document.constForm.srSuit.value = "";
    document.constForm.overSr.value = "";
}
function myFunction(event) {
    var x = event.key;
        if (x == "F10") restore()
        else if (x == "F8") saveFile()
        else if (x == "F9") newConst()
}
function disMsg(){
    var qNA = Number(document.constForm.srQnA.value);
    var gown =  Number(document.constForm.srGown.value);
    var pop =  Number(document.constForm.srPop.value);
    var swimst =  Number(document.constForm.srSuit.value);

    if(qNA < 1 || qNA > 10)
        alert("The Score in Q & A are only 1 - 10");
    else if(gown < 1 || gown > 10)
        alert("The Score in Gown are only 1 - 10");
    else if(pop < 1 || pop > 10)
        alert("The Score in Popularity are only 1 - 10");
    else if(swimst < 1 || swimst > 10)
        alert("The Score in Swimsuit are only 1 - 10");
    
}
function winner(){
    
    var v1 = document.constForm.name1.value;
    var v2 = document.constForm.name2.value;
    var v3 = document.constForm.name3.value;
    var v4 = document.constForm.name4.value;

    var s1 = document.getElementById("s1").value;
    
    var s2 = document.getElementById("s2").value;
    
    var s3 = document.getElementById("s3").value;
    
    var s4 = document.getElementById("s4").value;   

    var constName = [v1,v2,v3,v4];
    var constScore = [s1, s2, s3, s4];
    var largest = 0;
    var winnerName;
    for(var i = 0 ; i < constScore.length; i++){
        if(constScore[i] > largest){
            largest = constScore[i];
            winnerName = constName[i];
        }

            
    }
    document.getElementById('winner').innerHTML = "Winner is " + winnerName + "!!";
}

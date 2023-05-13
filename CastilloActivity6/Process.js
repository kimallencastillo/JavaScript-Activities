
function calcGr(){
    var pre = Number(document.Grade.pre.value);
    var mid = Number(document.Grade.mid.value);
    var final = Number(document.Grade.final.value);
    var stdNum = document.Grade.stdNum.value;
    var stdName = document.Grade.stdName.value;
    var opt = document.Grade.pt.value;
    var overall, rem ="";
    var btn = document.createElement("Button");
    btn.innerHTML = "Try again";
    btn.addEventListener('click', () =>{window.location.reload()})

    switch(opt){
        case "A" :  overall= ave(pre,mid,final); break;
        case "P" :  overall = per(pre,mid,final);break;
    }
    if(overall > 75) rem = "Passed";
    else rem ="Failed";
    
    
   

    document.write("<br><b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student Grades </b><br>")
    document.write('<br>');
    document.write('<br> Student No.:   ' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + stdNum);
    document.write('<br>');
    document.write("<br> Student Name:  " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + stdName);
    document.write('<br>');
    document.write("<br> Prelim Grade:  " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + pre);
    document.write('<br>');
    document.write("<br> Midterm Grade: " +  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mid);
    document.write('<br>');
    document.write("<br> Final Grade:   " + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + final);
    document.write('<br>');
    document.write("<br> Overall Grade: " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + overall);
    document.write('<br>');
    document.write("<br> Remarks:       " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + rem);
    document.write("<br><br>")
    document.write("<br><br>");
    
    document.body.appendChild(btn);
 
}

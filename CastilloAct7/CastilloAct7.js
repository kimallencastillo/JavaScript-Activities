
function validate(){
    var ch = document.forms["taxForm"]["stdNo"].value;
    var ch1 = document.forms["taxForm"]["stdName"].value;
    var chYr = document.taxForm.es.value;
  
    var q1 = Number(document.taxForm.q1.value);
    var q2 = Number(document.taxForm.q2.value);
    var q3 = Number(document.taxForm.q3.value);
    var a1 = Number(document.taxForm.act1.value)
    var a2 = Number(document.taxForm.act2.value);
    var a3 = Number(document.taxForm.act3.value);
    var proc = Number(document.taxForm.project.value);
    var recit = Number(document.taxForm.rec.value);
    var raw = Number(document.taxForm.rawsc.value);
    var max = Number(document.taxForm.maxsc.value);

    if(ch == ""){
        alert("Please fill up Student No.");
       
    }
    if(ch1 == ""){
        alert("Please fill up Student Name");
        
    }
    if(chYr == ""){
        alert("Please fill up Year")
    }

    if(q1 < 40 || q1 > 100) {
        alert("incorrect entry for Quiz 1");
        
    }
    if(q2 < 40 || q2 > 100) {
        alert("incorrect entry for Quiz 2");
       
    }
    if(q3 < 40 || q3 > 100) {
        alert("incorrect entry for Quiz 3");
        
    }

    if(a1 < 40 || a1 > 100) {
        alert("incorrect entry for Act 1");
        
    }
    if(a2 < 40 || a2 > 100) {
        alert("incorrect entry for Act 2");
        
    }
    if(a3 < 40 || a3 > 100) {
        alert("incorrect entry for Act 3");
    }
    if(proc < 40 || proc > 100) {
        alert("incorrect entry for Project");
    }
    if(recit < 40 || recit > 100) {
        alert("incorrect entry for Recitation");
    }
    if(raw < 40 || raw > 100) {
        alert("incorrect entry for Raw Score");
    }
    if(max < 40 || max > 100) {
        alert("incorrect entry for Max Score");
    }

}   
function compute(){
    //quiz
    var q1 = Number(document.taxForm.q1.value);
    var q2 = Number(document.taxForm.q2.value);
    var q3 = Number(document.taxForm.q3.value);
    //act
    var a1 = Number(document.taxForm.act1.value)
    var a2 = Number(document.taxForm.act2.value);
    var a3 = Number(document.taxForm.act3.value);

    var raw = Number(document.taxForm.rawsc.value);
    var max = Number(document.taxForm.maxsc.value);
    var proc = Number(document.taxForm.project.value);
    var recit = Number(document.taxForm.rec.value);
    var gr = Number(document.taxForm.grade.value);
    var remarks = "";
    var gradeOutput, actAve, quizAve, csOutput , peOutput;
    

    
    actAve = actCalc(a1,a2,a3);
    quizAve = quizCalc(q1,q2,q3);
    csOutput = csCalc(actAve,quizAve,recit,proc);
    peOutput = prelimCalc(raw,max);
    gradeOutput = preGrCalc(csOutput, peOutput);

    if(gradeOutput >= 75)
        remarks = "Passed";
        else remarks ="failed";

    document.taxForm.remark.value = remarks;
    document.taxForm.grade.value = gradeOutput;
    document.taxForm.grPE.value = peOutput;
    document.taxForm.grCS.value = csOutput;
    document.taxForm.avg1.value = quizAve;
    document.taxForm.avg2.value = actAve;
    

}
function remarkCh(grOut){
    var rem = "";
    if (grOut >= 75)
        return rem = "Passed";
    else return rem = "Failed";
}

function preGrCalc(cs,grExam){
    return (cs * 0.6) + (grExam * 0.4);

}
function prelimCalc(raw, max){
   return raw/max * 60 + 40;
}

function quizCalc(q1, q2, q3){
    return (q1 + q2 + q3)/3;
}
function actCalc(n1, n2, n3){
    return (n1+n2+n3)/3;  
}
function csCalc(act,quiz,rec,proj){
    return (0.25 * act) + (0.3 * quiz) + (0.25 * rec) + (0.2 * proj);  
}
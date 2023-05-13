function calc() { 
    var length =  document.taxForm.pt.length;  	  
    var ctr, pt= ''; 
     for ( ctr = 0; ctr < length; ctr++ ) {  	       
         if ( document.taxForm.pt[ctr].checked ) { 
             pt = document.taxForm.pt[ctr].value; 
        break;      
            } 
        } 	    
     var es = document.taxForm.es.value  	  
     var bp = Number(document.taxForm.bp.value); 	  
     var tax = 0 
     switch ( pt ) { 
         //case 'D' : tax = calcTaxD(es,bp); break;    	      
         case 'W' : tax = calcTaxW(es,bp); break;  	      
         //case 'S' : tax = //calcTaxS(es,bp); break;  	      
         //case 'M' : tax = calcTaxM(es,bp); break; 
     } 
     var tax = tax.toFixed(2); 
     document.write("<br>Basic Pay : " + bp );  	  
     document.write("<br>Exemption Status : " + es);  	  
     document.write("<br>Pay Type : " + pt);  	  
     document.write("<br>Tax Withheld : " + tax); 
} 

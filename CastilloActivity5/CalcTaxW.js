function calcTaxW(stat, basic) {       
    var incGrp = [ 1,    0, 192,   577, 1346, 2692, 4808,  9615, 
      1,  962, 1154, 1538, 2308, 3654, 5769, 10577, 
      1, 1442, 1635, 2019, 2788, 4135, 6250, 11058, 
      1.,1923, 2115, 2500, 3269, 4615, 6731, 11538, 
      1, 2404, 2596, 2981, 3750, 5096, 7212, 12019,            
      1, 2885, 3077, 3462, 4231, 5577, 7692, 12500];       
      var pctGrp  = [ 0,.05, .1, .15, .20, .25, .30, .32]; 
      var baseGrp = [ 0,0, 9.62, 48.08, 163.46, 432.69, 961.54,  2403.85];       
      var  income = 0, base= 0; 
      var  pct = 0;       
      var  tax = 0;       
      var idx; 
        if ( stat == "Z" ) idx = 0; 
        else if ( stat == "S"  || stat == "ME" )  idx = 8; 
        else if ( stat == "S1"  || stat == "ME1" ) idx = 16;     
        else if ( stat == "S2"  || stat == "ME2" ) idx = 24;     
        else if ( stat == "S3"  || stat == "ME3" ) idx = 32;     
        else if ( stat == "S4"  || stat == "ME4" ) idx = 40; 	    	    
        
        for ( col = 7; col >= 0; col --)  { 
             if ( basic >= incGrp[idx+col] ) { 
                income =  incGrp[idx+col]; 
                pct =  pctGrp[col]; 
                base =  baseGrp[col]; 
                break; 
            } 
        } 
        var wtax = ( basic - income ) * pct + base;  	         
        return wtax; 
}  

function BatDauTinh(){
	var a=document.getElementById('txtA').value;
	var b=document.getElementById('txtB').value;
	
	  var lea=a.length;
	 var leb =b.length; 
	 var dem=0;
	
	 for (i = 0; i <(lea-leb)+1; i+=1){
	 	if(((a.substring(i,i+1))==b.substring(0,1))){
	 		if((a.substring(i,i+leb))==b){
	 			dem+=1;
	 		}
	 	}	
   }
if(b==""){ dem=0;
	

}

		var obj=document.getElementById('kq');
		obj.innerHTML="Số lần xuất hiện của b trong a là: "+dem	;
	
};

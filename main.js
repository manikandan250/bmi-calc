var btn=document.getElementById("btn");
	btn.addEventListener("click",myFunction);
	
	function myFunction(){
		var height=parseInt(document.getElementById("height").value/100);
		var weight=parseInt(document.getElementById("weight").value);
		var total=weight/(height*height);
		document.getElementById("to").innerHTML="This weight is" + total;
		var result=document.getElementById("result");
		if(total<18){
			result.style.color="green"
			document.getElementById("result").innerHTML="UNDER WEIGHT";
		}
		else if(total>=18 && total<25){
			result.style.color="blue"
			document.getElementById("result").innerHTML="NORMAL WEIGHT";
		}
		else{
			result.style.color="red"
			document.getElementById("result").innerHTML="OVER WEIGHT";
		}
	}
function $ (id) {
	return typeof id==="string"?document.getElementById(id):id;
}
window.onload=function  () {
	var banner=$("banner");
	var pic=$("banner-ul").getElementsByTagName("li");
	var char=$("banner-ol").getElementsByTagName("li");
	var times=null;
	var index=0;
	
	times=setInterval(run,2000);
	function run () {
		index++;
		if (index>char.length-1) {
			index=0;
		}
		change(index)
	}
	function change (curindex) {
		console.log(index);
		for (var i=0;i<char.length;i++) {
			pic[i].style.display="none";
			char[i].className="";
		}
		pic[curindex].style.display="block";
		char[curindex].className="active";
		index=curindex;
	}
	
	banner.onmouseover=function  () {
		clearInterval(times)
	}
	banner.onmouseout=function  () {
		times=setInterval(run,2000)
	}
	
	char.onmouseover=function  () {
		clearInterval(times)
	}
	char.onmouseout=function  () {
		times=setInterval(run,2000)
	}
	
}



function box6 (idname,curcon,n) {
	for (b=1;b<=n;b++) {
		bner=document.getElementById(idname+b);
		ces=document.getElementById('bin'+idname+b);
		
		bner.className=b==curcon?"hover":"";
		ces.style.display=b==curcon?"block":"none";
	}
}
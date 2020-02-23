function box (idname,curcon,n) {
	for (var i=1; i<=n;i++) {
		ment=document.getElementById(idname+i);
		cur=document.getElementById("con"+idname+i);
		
		ment.className=i==curcon?"hover":"";
		cur.style.display=i==curcon?"block":"none";
	}
	
}

function box2 (idname,curcon,i) {
	for (var j=1;j<=i;j++) {
		menu=document.getElementById(idname+"-"+j);
		con=document.getElementById("son"+idname+"-"+j);
		
		menu.className=j==curcon?":hover":"";
		con.style.display=j==curcon?"block":"none";
	}
}

function box3(idname,curcon,n) {
	for (var c=1;c<=n;c++) {
		monu=document.getElementById(idname+c);
		cru=document.getElementById("xon"+idname+c);
		
		monu.className=c==curcon?":hover":"";
		cru.style.display=c==curcon?"block":"none";
	}
}

function box4(idname,curcon,n) {
	for (var c=1;c<=n;c++) {
		monu=document.getElementById(idname+c);
		cru=document.getElementById("a"+idname+c);
		
		monu.className=c==curcon?":hover":"";
		cru.style.display=c==curcon?"block":"none";
	}
}

function box5 (idname,curcon,i) {
	for (var l=1;l<=i;l++) {
		long=document.getElementById(idname+l);
		bin=document.getElementById('lon'+idname+l);
		
		long.className=l==curcon?"hover":"";
		bin.style.display=l==curcon?"block":"none";
	}
}
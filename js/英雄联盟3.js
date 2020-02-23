var  show=document.getElementById('show');
var  cilk=document.getElementById('cilk');
var  show1=document.getElementById('show1');
var  cilk1=document.getElementById('cilk1');
var  show2=document.getElementById('show2')
var  cilk2=document.getElementById('cilk2');
var  show3=document.getElementById('show3');
var  cilk3=document.getElementById('cilk3');
var  show4=document.getElementById('show4');
var  cilk4=document.getElementById('cilk4');
var  show5=document.getElementById('show5')
var  cilk5=document.getElementById('cilk5');
var  show6=document.getElementById('show6');
var  cilk6=document.getElementById('cilk6');


function ShowHidden(obj){
	if (obj.style.display=='block') {
		obj.style.display='none'
	}else{
		obj.style.display='block';
	}
}

show1.onclick=function(){
	Showhidden1(cilk1);
	return false;
}

show.onclick=function () {
	ShowHidden(cilk);
	return false;
}

function Showhidden1(obj){
	if (obj.style.display=='block') {
		obj.style.display='none';
	}else{
		obj.style.display='block';
	}
}

function Showhidden2 (obj) {
	if (obj.style.display=='block') {
		obj.style.display='none';
	}else{
		obj.style.display='block';
	}
}

show2.onclick=function  () {
	Showhidden1(cilk2);
	return false;
	
}

function Showhidden3 (obj) {
	if (obj.style.display=='block') {
		obj.style.display='none';
	}else{
		obj.style.display='block';
	}
}

show3.onclick=function  () {
	Showhidden3(cilk3);
	return false;
	
}

function Showhidden4 (obj) {
	if (obj.style.display=='block') {
		obj.style.display='none';
	}else{
		obj.style.display='block';
	}
}

show4.onclick=function  () {
	Showhidden4(cilk4);
	return false;
	
}

function Showhidden5 (obj) {
	if (obj.style.display=='block') {
		obj.style.display='none';
	}else{
		obj.style.display='block';
	}
}

show5.onclick=function  () {
	Showhidden5(cilk5);
	return false;
	
}

function ShowHidden6 (obj) {
	if (obj.style.display=='block') {
		obj.style.display='none';
	}else{
		obj.style.display='block';
	}
}

show6.onclick=function  () {
	ShowHidden6(cilk6);
	return false;
}






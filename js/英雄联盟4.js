var cot=0;//设置一个计数器，初始值为0；作用是用来监听点击切换的时候哪一个图片应该隐藏或者显示
function nex(){  
 if(cot<=2){    
  $('.zui-right-lu-1 img').eq(cot).animate({'margin-left':'-305px'},500);  
  console.log(nex())
  cot++;  
 }
}
function pre(){  
 if(cot>0){    
  cot--;    
  $('.zui-right-lu-1 img').eq(cot).animate({'margin-left':'0'},500);  
 }
}
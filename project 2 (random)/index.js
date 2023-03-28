let body=document.body;
let btn_random=document.getElementById('btn_random');
	btn_random.addEventListener('click',colorFon);

function colorFon(){
	let number=document.querySelector('.number');
	let hexColor="#"+Math.floor(Math.random()*16777215).toString(16);
	let hex="#"+Math.floor(Math.random()*16777215).toString(16);
	body.style.background=hexColor;
	number.innerHTML=hexColor;
	number.style.color=hex;
	this.style.background=hex;
	this.style.color=hexColor;
	this.style.fontSize='25px';

}
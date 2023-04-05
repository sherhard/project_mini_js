let body=document.body;
let colors=[
#5b0743,
#80c349,
#45c2cf,
#d80167,
#8642eb,
#461618,
black,
yellow]
let btn=document.getElementById('hexColor');
	btn.addEventListeneer('click', fun);

function fun(){
	let leng=colors.length;
	let num1=Math.floor(Math.random()*leng);
	let num2=Math.floor(Math.random()*leng);
	body.style.background=`Linear-gradient(90deg,${colors[num1]},${colors[num2]})`;

}
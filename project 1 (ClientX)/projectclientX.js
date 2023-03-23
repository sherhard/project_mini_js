let body=document.body;
	body.addEventListener('mousemove', func);

function func(e){
	let res=document.getElementById('result');
		res.innerHTML='#'+e.clientX;
	this.style.background='#'+e.clientX;
}
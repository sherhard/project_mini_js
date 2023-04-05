let signs=document.querySelectorAll('.sing');
 signs.forEach((item)=>{
 	item.addEventListener('click',(event)=>{
 		calc(event.target.textContent)
 	})
 })

function calc(e){
	let result;
	let num1=Number(document.querySelector('.num1').value);
	let num2=Number(document.querySelector('.num2').value);

		switch(e){
			case'+':
				result=num1+num2;
			break;

			case'-':
				result=num1-num2;
			break;

			case'*':
				result=num1*num2;
			break;

			case'/':
				result=num1 / num2;
			break;
		}
		document.querySelector('.result').innerHTML=result;


}

let body=document.querySelector('body');
		let btn=document.querySelector('.hexcolor');
			btn.addEventListener('click',funColor);

		function funColor(){
			let colors='#'+Math.floor(Math.random()*167722).toString(16);
			body.style.background=colors;
			
		}



let heart=document.querySelectorAll('#heart')
for(let i=0;i<heart.length;i++){
	heart[i].addEventListener('click',function(){
		if (heart[i].style.color=="red"){
			heart[i].style.color="black"
		}
		else{
			heart[i].style.color="red"
		}
	})
}
let price=document.querySelectorAll(".price");
let amout=document.querySelectorAll("span");
let btnplus=document.querySelectorAll("#btnplus");
let qte=document.querySelectorAll("#qty");
let btnmoins=document.querySelectorAll("#btnmoins");
let total=document.querySelector(".total");


for(let i=0;i<btnplus.length;i++){
    btnplus[i].addEventListener("click", function(){
    qte[i].value++
    amout[i].innerHTML=parseInt(amout[i].innerHTML)+parseInt(price[i].value)
    total.innerHTML=parseInt(total.innerHTML)+parseInt(price[i].value)
})
}

for(let i=0;i<btnmoins.length;i++){
    btnmoins[i].addEventListener("click", function(){
    qte[i].value--
    amout[i].innerHTML=amout[i].innerHTML-price[i].value
})
}

//delete part
let del=document.querySelectorAll("#trash")
for (let i=0;i<del.length;i++){
del[i].addEventListener("click", function(){
	let node_sup=document.querySelectorAll("tbody tr")
	let child=node_sup[i].lastChild
	while (child){
		node_sup[i].removeChild(child)
		child=node_sup[i].lastChild
	}
})
}




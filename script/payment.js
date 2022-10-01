let cartStored=JSON.parse(localStorage.getItem("cart-item")) || [];


let totalPrice=cartStored.reduce(function(acc,el){
  return acc+Number(el.price)
},0)

document.querySelector("#cong+div>p:nth-child(1)>span").innerText=totalPrice
document.querySelector("#cong+div>p:nth-child(2)>span").innerText="Free Shipping"
document.querySelector("#cong+div>p:nth-child(3)>span").innerText="Not applicable"
document.querySelector("#cong+div>p:nth-child(3)>span").style.color="red"
document.querySelector("#grand>h3>span").innerText=totalPrice
document.querySelector("#grand>h3>span").style.color="orange"
document.querySelector("#grand>p>span").style.color="orange"

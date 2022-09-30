let cartStored=JSON.parse(localStorage.getItem("cart-item")) || [];

console.log("hii",cartStored.length)

document.querySelector("#countcart").innerHTML=cartStored.length;
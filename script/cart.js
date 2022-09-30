let cartStored=JSON.parse(localStorage.getItem("cart-item")) || [];
console.log(cartStored.length)


console.log("hii",cartStored.length)

document.querySelector("#countcart").innerHTML=cartStored.length;


cartStored.forEach(function(el,index){
    let card=document.createElement("div")

    let productImg=document.createElement("img")
    productImg.src=el.image_url;

    let brand=document.createElement("h3")
    brand.innerText=el.brandName;

    let rating=document.createElement("h4")
    rating.innerText=el.rating;

    let price=document.createElement("p")
    price.innerText=el.price;

    let ship=document.createElement("p")
    ship.innerText=el.shipping

    let btn=document.createElement("button")
    btn.innerText="Remove";
    btn.addEventListener("click",function(event){
      event.target.parentNode.remove()
      removeFromCart(index)
    })

    card.append(productImg,brand,rating,price,ship,btn)
    document.querySelector("#cartcontainer").append(card)
  })

  function removeFromCart(index){
      cartStored.splice(index,1)
      localStorage.setItem("cart-item", JSON.stringify(cartStored))
  }
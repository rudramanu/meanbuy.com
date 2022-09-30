let Form=document.querySelector("#form")
let cartStored=JSON.parse(localStorage.getItem("cart-item")) || [];

console.log("hii",cartStored.length)

document.querySelector("#countcart").innerHTML=cartStored.length;
let totalPrice=cartStored.reduce(function(acc,el){
     return acc+Number(el.price)
   },0)
   
   document.querySelector("#signtot>span").innerText=cartStored.length;
   
   document.querySelector("#signtot+h3>span").innerText=totalPrice
   document.querySelector("#carttot>span").innerText=totalPrice

Form.addEventListener("submit", login)

function login(event){
    event.preventDefault();
    
    
    let loginEmail= Form.email.value
    let loginPassword= Form.password.value
    console.log(loginEmail,loginPassword)
    
    let signupPassword= JSON.parse(localStorage.getItem(loginEmail))

   if(signupPassword==null){
        alert("Please Sign up first")
   }
   else if(loginPassword!=JSON.parse(signupPassword)){
        alert("Please Enter Correct Password")
   }

   if(loginPassword==JSON.parse(signupPassword)){
        alert("Logged in successfully");
        window.location.href="welcomepage.html";
   }





    
    


}    
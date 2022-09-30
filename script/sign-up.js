
let Form=document.querySelector("#form")
let LSData=[];
let cartStored=JSON.parse(localStorage.getItem("cart-item")) || [];

console.log("hii",cartStored.length)

document.querySelector("#countcart").innerHTML=cartStored.length;

Form.addEventListener("submit", signup)


let totalPrice=cartStored.reduce(function(acc,el){
  return acc+Number(el.price)
},0)

document.querySelector("#signtot>span").innerText=cartStored.length;

document.querySelector("#signtot+h3>span").innerText=totalPrice
document.querySelector("#carttot>span").innerText=totalPrice







function signup(event){
    event.preventDefault();


    if(Form.email.value==="" || Form.password.value==="" || Form.confirm.value===""){
        alert("Please fill all the details")
        
    }
    else if(Form.password.value!=Form.confirm.value){
        alert("Please Enter Same Password")
    }
    
    else{
        let userObj={
            Email:Form.email.value,
            Password:Form.password.value,
        }
        alert("Signed up successfully");
        window.location.href="welcomepage.html";
        
        LSData.push(userObj.Password)
        localStorage.setItem(userObj.Email, JSON.stringify(LSData))
    }

}




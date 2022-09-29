
let form=document.querySelector("form")

form.addEventListener("submit", signup)

function signup(event){
    event.preventDefault();
    
    let userObj={
        Email:form.email.value,
        Password:form.password.value,
        ConfirmPassword:form.confirm.value
    }

    localStorage.setItem(newuser, JSON.stringify(user))
    
    


}
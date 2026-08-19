let password = document.querySelector("#password")
let confirm = document.querySelector("#confirmpassword")
let button = document.querySelector("button")

button.addEventListener("click", () => { 
    if (password.value == confirm.value) {
    alert("Hello world")
   
}})






password.addEventListener("blur", () => {
    if (password.value == confirm.value && password.value !== "") {
        password.style.borderColor = "green";
        confirm.style.borderColor = "green";
}
})

confirm.addEventListener("blur", () => {
    if (password.value == confirm.value && password.value !== "") {
    password.style.borderColor = "green";
    confirm.style.borderColor = "green";
}

    if (password.value.length <= 4) {
    alert("error")

} 


})




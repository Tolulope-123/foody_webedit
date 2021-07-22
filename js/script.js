
(() =>{
    const nav = document.querySelector(".nav"),
    menuBtn = document.querySelector(".toggle-collapse");

    menuBtn.addEventListener("click", () =>{
        nav.classList.toggle("collapse");
    })
})();

window.addEventListener("scroll", () =>{
    if(document.querySelector(".nav").classList.contains("collapse")){
        document.querySelector(".nav").classList.remove("collapse");
    }
})



// form

const userName = document.querySelector(".user-name");
const displayName = document.querySelector(".display-name");

const formGmail1 = document.querySelector(".gmail1");
const formGmail2 = document.querySelector(".gmail2");
formBtn1 = document.querySelector(".form-btn1");
formBtn2 = document.querySelector(".form-btn2");

formBtn1.addEventListener("click", () =>{
    if(localStorage.getItem("foody-user-email") == formGmail1.value){
        console.log("already signed in " + localStorage.getItem("foody-user-email"));
    }
    else{
        if(formGmail1.value !== ""){
            localStorage.setItem("foody-user-email", formGmail1.value);
            console.log("hello " + formGmail1.value);
        }
        else{
            console.log("please enter your mail");
        }
    }

    setName();
})
function setName(){
    if(userName.value !== ""){    
        localStorage.setItem("foody-userName", userName.value);
    }
    getName();
}
function getName(){
    displayName.innerHTML = "Welcome " + localStorage.getItem("foody-userName");
}
if(localStorage.getItem("foody-userName") !== null){
    displayName.innerHTML = "Welcome Back! " + localStorage.getItem("foody-userName");
}
formBtn2.addEventListener("click", () =>{
    if(localStorage.getItem("foody-user-email") == formGmail2.value){
        console.log("already signed in " + localStorage.getItem("foody-user-email"));
    }
    else{
        if(formGmail2.value !== ""){
            localStorage.setItem("foody-user-email", formGmail2.value);
            console.log("hello " + formGmail2.value);
        }
        else{
            console.log("please enter your mail");
        }
    }
})



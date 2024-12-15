const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formcontainer = document.querySelector("form_container"),
formcloseBtn = document.querySelector("form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("login"),
pwshowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => Home.classList.add("show")),
formOpenBtn.addEventListener("click", () => Home.classList.remove("show")),

pwshowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getpwInput = icon.parentElement.querySelector("input");
        if(getpwInput.type === "password"){
            getpwInput.type = "text"
            icon.classList.replace("uil-eye-slash", "uil-eye")
        }else{
            getpwInput.type = "password"
            icon.classList.replace("uil-eye", "uil-eye-slash")
        }
    })
})

signupBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formcontainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formcontainer.classList.remove("active");
});

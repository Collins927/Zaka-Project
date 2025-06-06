document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");
    const btnPopup = document.querySelector(".btnLogin-popup");
    const iconClose = document.querySelector(".icon-close");

    loginLink.addEventListener("click", ()=> {
        wrapper.classList.remove("active");
    });

    registerLink.addEventListener("click", ()=> {
        wrapper.classList.add("active");
    });

    btnPopup.addEventListener("click", ()=> {
        wrapper.classList.add("active-popup");
    });

    iconClose.addEventListener("click", ()=> {
        wrapper.classList.remove("active-popup");
    });
});

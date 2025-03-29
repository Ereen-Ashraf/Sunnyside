let toggle_menu = document.querySelector(".menu-toggle")
let close = document.querySelector(".close-btn")

toggle_menu.addEventListener("click", function(){
    document.querySelector(".dropdown-menu").classList.toggle("active")
});


close.addEventListener("click", function(){
    document.querySelector(".dropdown-menu").classList.toggle("active")
});


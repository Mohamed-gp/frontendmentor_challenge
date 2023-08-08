let menu = document.querySelector(".menu")
let nav = document.querySelector("nav")
let x = document.querySelector(".x")
menu.onclick = function(){
    nav.style.display = "block"
    document.body.style = "z-index: -1;background-color: rgb(0, 0, 0,.15);;"
}
x.onclick = function(){
    nav.style.display = "none"
}

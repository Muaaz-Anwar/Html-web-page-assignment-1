const popup_btn = document.querySelector(".btn-submit");
const wrap = document.querySelector(".wrap");
const cross = document.querySelector(".cross");
const cross_menu = document.querySelector(".cross-menu");
const menu = document.querySelector(".menu");
const block = document.querySelector(".pop-up");
const hamburger = document.querySelector(".hamburger");
popup_btn.onclick = () => {
    block.style.display = "block";
    wrap.style.display = "block";
}
cross.onclick = () => {
    block.style.display = "none";
    wrap.style.display = "none";
}
cross_menu.onclick = () => {
    menu.style.display = "none"
}
hamburger.onclick = () => {
    menu.style.display = "block"
}
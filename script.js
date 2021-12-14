
const popup = document.querySelector('.popup');
const closebtn = document.querySelector('.ppclosebtn');
const imgname = document.querySelector('.ppimgname');
const arrowleft = document.querySelector('.left-arrow');
const arrowright = document.querySelector('.right-arrow');
const mainimage = document.querySelector('.ppmainimg');
const images = [...document.querySelectorAll('.image')];

function changeMode(){
    var element = document.body;
    element.classList.toggle("dark-mode")

    if (document.getElementById("theme").getAttribute("src") == "pics/DarkThemeIcon.png") {
        document.getElementById("theme").src = "pics/sun.png";
    } else {
        document.getElementById("theme").src = "pics/DarkThemeIcon.png";
    }
}

function lhcPics(){
    window.alert("hemloooo");
    popup.classList.toggle('active');
    images.forEach((item, i) => {
        item.classList.toggle('blur');
    })
}
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const mainImage = document.querySelector(".mainImage");
const mainBtn = document.querySelectorAll(".mainBtn");
const showing_class = "showing";
forward.addEventListener('click', forwardBtn);
backward.addEventListener('click', backwardBtn);

let arrayImage = [];
arrayImage[0] = "images/1.jpg";
arrayImage[1] = "images/2.jpg";
arrayImage[2] = "images/3.jpg";
arrayImage[3] = "images/4.jpg";
arrayImage[4] = "images/5.jpg";
let index = 0;


function mainbuttonClick() {
    let btnId = event.srcElement.id;
    index = 1*btnId
    mainImage.src = arrayImage[1*btnId.substring(4)];
    let i = 0;
    for (let i = 0; i <= document.querySelectorAll(".mainBtn").length-1; i++) {
        document.querySelectorAll(".mainBtn")[i].classList.remove(showing_class);
    }
    document.getElementById(btnId).classList.toggle(showing_class);
}

function forwardBtn() {
    if (index < arrayImage.length-1) {
        index += 1;
        mainImage.src = arrayImage[index];
    }
    else {
        index = 0;
        mainImage.src = arrayImage[index];
    }
    let i = 0;
    for (let i = 0; i <= arrayImage.length-1; i++) {
        document.querySelectorAll(".mainBtn")[i].classList.remove(showing_class);
    }
    document.querySelectorAll(".mainBtn")[index].classList.toggle(showing_class);
}


function backwardBtn() {
    if (index <= 0) {
        index = arrayImage.length -1;
        mainImage.src = arrayImage[index];
    } else {
        index --;
        mainImage.src = arrayImage[index];
    }
    let i = 0;
    for (let i = 0; i <= arrayImage.length-1; i++) {
        document.getElementById(i).classList.remove(showing_class);
    }
    document.getElementById(index).classList.toggle(showing_class);
}


function init() {
    document.getElementById(index).classList.toggle(showing_class);

}

init();
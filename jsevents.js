/*eslint-env browser*/
function alerting() { // eslint-disable-line no-unused-vars
    alert("The page is loaded");
}

document.getElementById("title").addEventListener("mouseover", mouseOver);
document.getElementById("title").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("title").style.color = "red";
}

function mouseOut() {
    document.getElementById("title").style.color = "black";
}

function myFunction1(element, color) { // eslint-disable-line no-unused-vars
    element = document.getElementById(element);
    element.style.transition = "width 1s linear 0s, background 1s linear 0s";
    element.style.background = color;
    element.style.width = "200px";
}

function capitalize() { // eslint-disable-line no-unused-vars
    var cap = document.getElementById("keytouch");
    cap.value = cap.value.toUpperCase();
}

document.getElementById("myDIV").onscroll = function () {
    myFunction()
};

function myFunction() {
    document.getElementById("demo").innerHTML = "You have scrolled.";
}

const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
    card.classList.toggle('large');
});

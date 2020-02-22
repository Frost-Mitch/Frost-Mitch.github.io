/*eslint-env browser*/
 
var box1 = document.querySelector("#b1");
var hiddenBox = document.querySelector("#hiddenB");

var buttonOne = document.querySelector("#animateOne");
var revealButton = document.querySelector("#reveal");

   // This is the spinning box
buttonOne.onclick = function () {
    if (buttonOne.innerHTML === "Play") {
        this.innerHTML = "Stop";
        box1.innerHTML = "Press Stop!";
    // If box one isn't already activated, add the class
        if (!box1.classList.contains("activated")) {
            box1.classList.add("activated");
        }
        box1.classList.toggle("paused");
    } else {
        buttonOne.innerHTML = "Play";
        box1.innerHTML = "Spin me!";
        box1.classList.toggle("paused");
    }
};

   // This is the hidden box
revealButton.onclick = function () {
    if (this.innerHTML === "Reveal") {
        this.innerHTML = "Hide";
        hiddenBox.classList.remove("translateOut");
        hiddenBox.classList.remove("bounceOutAnimation");
        hiddenBox.classList.add("bounceInAnimation");
    } else {
        this.innerHTML = "Reveal";
        hiddenBox.classList.remove("bounceInAnimation");
        hiddenBox.classList.add("bounceOutAnimation");
        hiddenBox.classList.add("translateOut");
    }
};

// this is for the title reload
function text() {  // eslint-disable-line no-unused-vars
    var re = document.getElementById('text');
    re.style.animation = 'none';
    re.offsetHeight;
    re.style.animation = null;
}

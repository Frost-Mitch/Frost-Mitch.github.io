/*eslint-env browser*/

// when chooses wrong answer, changes display to block.
function wrongAnswer() {      // eslint-disable-line no-unused-vars
    document.getElementById("wrong").style.display='block';

// two second timeout.
    setTimeout(function () {
        document.getElementById('wrong').style.display='none';
    }, 2000);
    return false;
}

// when chooses right answer, changes display to block.
function rightAnswer(elem) {       // eslint-disable-line no-unused-vars
    document.getElementById("right").style.display='block';

// two second timeout.
    setTimeout(function () {
        document.getElementById('right').style.display='none';
    }, 2000);
    return false;    
}

//changes the style to "background" class.
function changeStyle() {      // eslint-disable-line no-unused-vars
    document.getElementById("title").classList.add("newH1");
}

//removes the previous style.
function changeBack() {       // eslint-disable-line no-unused-vars
    document.getElementById("title").classList.remove("newH1");
}

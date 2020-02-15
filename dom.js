/*eslint-env browser*/
function create() {  // eslint-disable-line no-unused-vars
    var createstuff = document.createElement("IMG");
    createstuff.setAttribute("src", "ChristAppears.jpg");
    createstuff.setAttribute("alt", "Christ appears to Nephites ");
    document.getElementById("container").appendChild(createstuff);
}

function destroy() {  // eslint-disable-line no-unused-vars
    var olddata = document.getElementById("container").lastChild;
    document.getElementById("container").removeChild(olddata);
}

function newPara() {  // eslint-disable-line no-unused-vars
    var createPara = document.createElement("P");
    createPara.innerHTML = "Verse 7 - Behold my Beloved Son, in whom I am well pleased, in whom I have glorified my name — hear ye him.";
    document.getElementById("content").appendChild(createPara);
}

function thirdPara() {  // eslint-disable-line no-unused-vars
    var third = document.createElement("P");
    third.innerHTML = "Verse 8 - And it came to pass, as they understood they cast their eyes up again towards heaven; and behold, they saw a Man descending out of heaven; and he was clothed in a white robe; and he came down and stood in the midst of them; and the eyes of the whole multitude were turned upon him, and they durst not open their mouths, even one to another, and wist not what it meant, for they thought it was an angel that had appeared unto them.";
    document.getElementById("content").appendChild(third);
}

function fourthPara() {  // eslint-disable-line no-unused-vars
    var fourth = document.createElement("P");
    fourth.innerHTML = "Verse 9 & 10 - And it came to pass that he stretched forth his hand and spake unto the people, saying: Behold, I am Jesus Christ, whom the prophets testified shall come into the world.";
    document.getElementById("content").appendChild(fourth);
}

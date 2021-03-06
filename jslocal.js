/*eslint-env browser*/
//get the data and store it in JSON
function getUserInput() { // eslint-disable-line no-unused-vars
    var first = document.getElementById("noun1").value;
    var second = document.getElementById("adjective1").value;
    var third = document.getElementById("adjective2").value;
    var fourth = document.getElementById("noun2").value;
    var fifth = document.getElementById("yourName").value;

    var phrase = {
        first: first,
        second: second,
        third: third,
        fourth: fourth,
        fifth: fifth
    };
    // create a phrase
    var stringArray = ["Bob was a ", ".  He had ", " arms and ", " legs.  One day, he saw a ", ".  He carried it home to his best friend, ", ".  The end."];

    var object = new PhraseObject(phrase, stringArray);
    // convert to JSON
    var jsonObject = JSON.stringify(object);

    saveObject(jsonObject);
    loadLocalStorage();
}

function PhraseObject(phrase, stringArray) {
    this.phrase = phrase;
    this.stringArray = stringArray;
}

//  stores to the local storage api
function saveObject(jsonObject) {
    if (typeof (Storage) !== "undefined") {
        localStorage.phraseObject = jsonObject;
    } else {
        window.alert("Your browser doesn't support local storage.");
    }
}

function loadLocalStorage() {
    localStorage.phraseObject;
    // Get the JSON object from local storage and parse it
    var object = JSON.parse(localStorage.phraseObject);
    var phrase = object.phrase;
    var sentence = object.stringArray;

    // Getting the div tag that will be changed
    var element = document.getElementById("savedData");

    // Add a title
    var title = document.createElement("h2");
    var node = document.createTextNode("Your funny story: ");
    title.appendChild(node);
    element.appendChild(title);

    // Add the sentence
    var paragraph = document.createElement("p");
    paragraph.setAttribute("class", "sentence");
    var text = sentence[0] + phrase.first + sentence[1] + phrase.second + sentence[2] + phrase.third + sentence[3] + phrase.fourth + sentence[4] + phrase.fifth + sentence[5];

    node = document.createTextNode(text);
    paragraph.appendChild(node);
    element.appendChild(paragraph);

    var button = document.createElement("button");
    button.setAttribute('type', 'button');
    button.setAttribute('onclick', 'deleteObject()');
    node = document.createTextNode("Delete");
    button.appendChild(node);

    element.appendChild(button);

    document.getElementById("form").style.display = "none";
}

// delete local storage
function deleteObject() { // eslint-disable-line no-unused-vars
    localStorage.removeItem("phraseObject");
    location.reload();
}

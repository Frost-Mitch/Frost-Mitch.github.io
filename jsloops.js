/*eslint-env browser*/
function loop() {   // eslint-disable-line no-unused-vars
    var n = document.getElementById("numLoop").value;
    var loopOutput = "";

    while (n > 0) {
        loopOutput += "<br>" + n;
        n--;
    }
    document.getElementById("loopOut").innerHTML = loopOutput;
}

// Conditional Statements
function con() {   // eslint-disable-line no-unused-vars
    var cond = document.getElementById("cond").value;
    var condOut = "";
    
    if (cond % 2 === 0) {
        condOut = "The Number is Even";
    }
        else {
            condOut = "The Number is Odd";
        }
    document.getElementById("condOut").innerHTML = condOut;
}

// Variables, Parameters, and Arrays
function variables() {   // eslint-disable-line no-unused-vars
    var number1 = document.getElementById("varNum1").value;
    var number2 = document.getElementById("varNum2").value;
    var number3 = document.getElementById("varNum3").value;
    
    var arr1 = [number1, number2, number3];
    arr1 = arr1.sort(function (a, b) { return b - a; });
    parameters(arr1);
}

function parameters(arr) {
    var text = "";
    var x;
    for (x = 0; x < arr.length; x++) {
        text += arr[x] + "<br>";
    }
    document.getElementById("parOut").innerHTML = text;
}

// Associative Arrays - name and favorite book
function assoArr() {   // eslint-disable-line no-unused-vars
        
    var name1 = document.getElementById("arrName1").value;
    var book1 = document.getElementById("arrBook1").value;
    var name2 = document.getElementById("arrName2").value;
    var book2 = document.getElementById("arrBook2").value;
    var name3 = document.getElementById("arrName3").value;
    var book3 = document.getElementById("arrBook3").value;
    var text = "";
    var obj = [];
    var x;
    obj[name1] = book1;
    obj[name2] = book2;
    obj[name3] = book3;
    
    for (x = 1; x <= 3; x++) {
        if (x === 1) {
            text += name1 + "'s favorite book is " + obj[name1] + ".<br>";
        }
            else if (x === 2) {
            text += name2 + "'s favorite book is " + obj[name2] + ".<br>";
        } 
            else if (x === 3) {
            text += name3 + "'s favorite book is " + obj[name3] + ".<br>";
        }
    }
    document.getElementById("arrOut").innerHTML = text;
}
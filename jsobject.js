/*eslint-env browser*/
function Car(color, brand, model, ctype, quantity, message) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.ctype = ctype;
    this.quantity = quantity;
    this.message = function () {
        message = document.querySelector('p');
        message.textContent = 'You added ' + quantity + ' ' + color + ', ' + brand + ' ' + model + ' ' + ctype + '.';
    }
    this.addToTable = function () {
        var table = document.querySelector('table');
        var row = document.createElement('tr');
        var col1 = document.createElement('td');
        var col2 = document.createElement('td');
        var col3 = document.createElement('td');
        var col4 = document.createElement('td');
        var col5 = document.createElement('td');
        var col6 = document.createElement('td');
        table.appendChild(row);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        col1.textContent = this.quantity;
        col1.setAttribute('id', 'quan');
        col2.textContent = this.color;
        col3.textContent = this.brand;
        col4.textContent = this.model;
        col5.textContent = this.ctype;
        col6.innerHTML = '<button type="button" onclick="remove()">Remove</button>';
    }
}

function createNewCarObject() {  // eslint-disable-line no-unused-vars
    var brand = document.getElementById('color').value;
    var model = document.getElementById('brand').value;
    var ctype = document.getElementById('model').value;
    var quantity = parseFloat(document.getElementById('quantity').value);
    var color = document.getElementById('ctype').value;

    if (brand == '' && model == '' && ctype == '' && isNaN(quantity) && color == '') {'p'}
    else {
        var car = new Car(brand, model, ctype, color, quantity);
        var message = document.createElement('p');
        message.textContent = '';
        document.querySelectorAll('section')[1].appendChild(message);
        car.message();
        car.addToTable(car);
        document.getElementById('brand').value = '';
        document.getElementById('model').value = '';
        document.getElementById('ctype').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('color').value = '';

    }
}

function remove() {  // eslint-disable-line no-unused-vars
    var button = document.getElementById('quan');
    var row = button.parentNode;
    row.parentNode.removeChild(row);
}

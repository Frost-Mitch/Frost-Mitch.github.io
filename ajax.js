/*eslint-env browser*/
var btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    var city = document.forms.list.city.value;
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.weatherbit.io/v2.0/current?city_id=' + city + '&key=716636b2f5704a17a4cbcf73c09dde64&units=I');

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            request.onload = function () {
                var data = JSON.parse(request.responseText);
                fillHTMLelement(data);
            };
        }
    };

    request.send();
});


function fillHTMLelement(info) {

    var city = info.data[0].city_name;
    var temperature = info.data[0].temp;
    var desc = info.data[0].weather.description;
    var wind = info.data[0].wind_spd;

    document.getElementById('info1').innerHTML = city;
    document.getElementById('info2').innerHTML = temperature + " F&deg;";
    document.getElementById('info3').innerHTML = desc;
    document.getElementById('info4').innerHTML = "Wind speed " + wind + " MPH";
}

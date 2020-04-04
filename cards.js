/*eslint-env browser*/
var memoryGame = function (targetId) // eslint-disable-line no-unused-vars
{
    var cards = [];
    var card_value = ["1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "1H", "2H", "3H", "4H", "5H", "6H", "7H", "8H"];

    var started = false;
    var matches_found = 0;
    var card1 = false,
        card2 = false;

    var hideCard = function (turn) { // turn card face down
        cards[turn].firstChild.src = "card back blue1.jpg";
        with(cards[turn].style) {
            transform = "scale(1.0) rotate(" + (Math.floor(Math.random() * 5) + 178) + "deg)";
        }
    };

    var moveToPack = function (pack) // move card to pack
    {
        hideCard(pack);
        cards[pack].matched = true;
        with(cards[pack].style) {
            zIndex = "1000";
            top = "100px";
            left = "-140px";
            transform = "rotate(0deg)";
            zIndex = "0";
        }
    };

    var moveToPlace = function (deal) // deal card
    {
        cards[deal].matched = false;
        with(cards[deal].style) {
            zIndex = "1000";
            top = cards[deal].fromtop + "px";
            left = cards[deal].fromleft + "px";
            transform = "rotate(" + (Math.floor(Math.random() * 5) + 178) + "deg)";
            zIndex = "0";
        }
    };

    var showCard = function (check) // turn card face up, check for match
    {
        if (check === card1) return;
        if (cards[check].matched) return;

        cards[check].firstChild.src = "images/cards/" + card_value[check] + ".png";
        with(cards[check].style) {
            // Firefox doesn't know which way to rotate
            if (matches = transform.match(/^rotate\((\d+)deg\)$/)) {
                if (matches[1] <= 180) {
                    transform = "scale(1.2) rotate(175deg)";
                } else {
                    transform = "scale(1.2) rotate(185deg)";
                }
            } else {
                transform = "scale(1.2) rotate(185deg)";
            }
        }

        if (card1 !== false) {
            card2 = check;
            if (parseInt(card_value[card1]) == parseInt(card_value[card2])) { // match found
                (function (card1, card2) {
                    setTimeout(function () {
                        moveToPack(card1);
                        moveToPack(card2);
                    }, 1000);
                })(card1, card2);
                if (++matches_found == 8) { // game over, reset
//                    moveCounter();
                    matches_found = 0;
                    started = false;
                    alert("You won!  Moves: " + moves);
                }
            } else { // no match
                (function (card1, card2) {
                    setTimeout(function () {
                        hideCard(card1);
                        hideCard(card2);
                    }, 800);
                })(card1, card2);
            }
            card1 = card2 = false;
            moves++;      
            document.getElementById("moves").innerHTML = moves;
            
        } else { // first card turned over
            card1 = check;
        }
    };

    var cardClick = function (click) {
        if (started) {
            showCard(click);
        } else {
            // shuffle and deal cards
            card_value.sort(function () {
                return Math.round(Math.random()) - 0.5;
            });
            for (i = 0; i < 16; i++) {
                (function (timeOut) {
                    setTimeout(function () {
                        moveToPlace(timeOut);
                    }, timeOut * 100);
                })(i);
            }
            started = true;
        }
    };

    // initialise

    var stage = document.getElementById(targetId);
    var felt = document.createElement("div");
    felt.id = "felt";
    stage.appendChild(felt);
    var moves = 0;

    // template for card
    var card = document.createElement("div");
    card.id = "card";
    card.innerHTML = "<img src=\"card back blue1.jpg\">";

    for (var i = 0; i < 16; i++) {
        var newCard = card.cloneNode(true);

        newCard.fromtop = 15 + 120 * Math.floor(i / 4);
        newCard.fromleft = 70 + 100 * (i % 4);
        (function (idx) {
            newCard.addEventListener("click", function () {
                cardClick(idx);
            }, false);
        })(i);

        felt.appendChild(newCard);
        cards.push(newCard);
    }
}
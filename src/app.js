/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  function randomEvent(list) {
    let numRandom = Math.floor(Math.random() * list.length);
    return list[numRandom];
  }

  let symbols = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
  ];

  let cardSymbolTop = randomEvent(symbols);
  let elementCardSymbolTop = document.querySelector("#cardSymbolTop");
  elementCardSymbolTop.innerHTML = cardSymbolTop;

  let numCard = randomEvent(numbers);
  let elementNumCard = document.querySelector("#cardNumber");
  elementNumCard.innerHTML = numCard;

  let elementCardSymbolBottom = document.querySelector("#cardSymbolBottom");
  elementCardSymbolBottom.innerHTML = cardSymbolTop;
  
  elementCardSymbolBottom.style.transform = "rotate(180deg)";

  if (cardSymbolTop === "♥" || cardSymbolTop === "♦") {
    let elements = document.querySelectorAll(".cardSymbol");
    elements.forEach(function (element) {
      element.style.color = "red";
    });
  }
};

//Home Page 4 Restaurant


import "./styles.css";
import { handleHomeQuote } from "./home-module.js";
import { handleMenuClick, greetingTwo } from "./menu-module.js";

console.log(greetingTwo);


const body = document.body;
const pageWrapper = document.createElement("div");
pageWrapper.classList.add("wrapper");
body.append(pageWrapper);

const header = document.createElement("header");
pageWrapper.append(header);

const restaurantTitle = document.createElement("h1");
restaurantTitle.classList.add("restaurant-title");
header.append(restaurantTitle);
restaurantTitle.textContent = "Jackson's";

const nav = document.createElement("nav");
header.append(nav);

const ul = document.createElement("ul");
nav.append(ul);

    for (let i = 0; i < 4; i++) {
       const li = document.createElement("li"); 
       const button = document.createElement("button");
       li.append(button);
       button.dataset.id = i;
       ul.append(li);
    }

const buttonIds = ["home", "menu", "about", "book-now"];
const buttons = document.querySelectorAll("button");
console.log(buttons);

    for (const button of buttons) {

        if (button.dataset.id === "0") {
            button.textContent = "HOME";
            button.id = buttonIds[0];
            button.classList.add("button");
        }

        if (button.dataset.id === "1") {
            button.textContent = "MENU";
            button.id = buttonIds[1];
            button.classList.add("button");

        }

        if (button.dataset.id === "2") {
            button.textContent = "ABOUT";
            button.id = buttonIds[2];
            button.classList.add("button");

        }

        if (button.dataset.id === "3") {
            button.textContent = "BOOK NOW";
            button.id = buttonIds[3];
            button.classList.add("button");

        }
    }

const quote = document.createElement("div");
quote.id = "quote";
quote.textContent = "Food and Family.";
pageWrapper.append(quote);

//End of HomePage....for making elements



const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");

const changeToHome = homeButton.addEventListener("click", () => {
    handleHomeQuote(event,pageWrapper);
});

const changeToMenu = menuButton.addEventListener("click", () => {
    handleMenuClick(event, pageWrapper);
});



function checkVariable(){
    const myVariable = "Sup";

    return myVariable;
}



console.log(checkVariable());


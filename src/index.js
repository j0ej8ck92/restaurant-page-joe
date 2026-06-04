//Home Page 4 Restaurant


import "./styles.css";
import { renderHomePage } from "./home-module.js";
import { greetingTwo } from "./module-2.js";

console.log(greetingTwo);


renderHomePage();



const homeButton = document.getElementById("home");

const resetHomePage = homeButton.addEventListener("click", () => {
    window.location.reload();
});



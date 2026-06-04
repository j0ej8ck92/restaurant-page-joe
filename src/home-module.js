
export function renderHomePage(){

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

    const buttonClasses = ["home", "menu", "about", "book-now"];
    const buttons = document.querySelectorAll("button");
    console.log(buttons);

    for (const button of buttons){

        if (button.dataset.id === "0") {
            button.textContent = "HOME";
            button.classList.add(buttonClasses[0]);
            button.id = buttonClasses[0];
        }

        if (button.dataset.id === "1") {
            button.textContent = "MENU";
            button.classList.add(buttonClasses[1]);
        }

        if (button.dataset.id === "2") {
            button.textContent = "ABOUT";
            button.classList.add(buttonClasses[2]);
        }

        if (button.dataset.id === "3") {
            button.textContent = "BOOK NOW";
            button.classList.add(buttonClasses[3]);
        }
    }

    const quote = document.createElement("div");
    quote.classList.add("quote");
    quote.textContent = "Food and Family.";
    pageWrapper.append(quote);
}
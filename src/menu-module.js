export const greetingTwo = "Hello Fartsniffer!";


export function handleMenuClick(event, wrapper){
    console.log(event.target);
    wrapper.lastElementChild.remove();
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";                  
    wrapper.append(menuContainer);
    // end of how to remove last div and add new div to give new display

    const appTitle = document.createElement("div");
    appTitle.textContent = "Apps";
    appTitle.classList.add("menu-headers");
    menuContainer.append(appTitle);

    const appOne = document.createElement("div");
    appOne.textContent = "Pulpo a La Parilla";
    appOne.classList.add("plates");
    appTitle.append(appOne);

    const appOneDescription = document.createElement("div");
    appOneDescription.textContent = "tamari vinaigrette, toasted hazelnuts, cilantro salad";
    appOneDescription.classList.add("plate-descriptions");
    appTitle.append(appOneDescription);

    const appTwo = document.createElement("div");
    appTwo.textContent = "Mussels FrA Diavolo";
    appTwo.classList.add("plates");
    appTitle.append(appTwo);

    const appTwoDescription = document.createElement("div");
    appTwoDescription.textContent = "san marzano tomatoes, olive oil, fresh basil, red pepper, garlic";
    appTwoDescription.classList.add("plate-descriptions");
    appTitle.append(appTwoDescription);

    const appThree = document.createElement("div");
    appThree.textContent = "Portuguese Piri-Piri Shrimp";
    appThree.classList.add("plates");
    appTitle.append(appThree);

    const appThreeDescription = document.createElement("div");
    appThreeDescription.textContent = "black tiger shrimp, garlic, flatbread, sorrel";
    appThreeDescription.classList.add("plate-descriptions");
    appTitle.append(appThreeDescription);

    //end of Apps

    const mainsTitle = document.createElement("div");
    mainsTitle.textContent = "Mains";
    mainsTitle.classList.add("menu-headers");
    menuContainer.append(mainsTitle);

    const mainOne = document.createElement("div");
    mainOne.textContent = "Porcini Mushroom Risotto";
    mainOne.classList.add("plates");
    mainsTitle.append(mainOne);

    const mainOneDescription = document.createElement("div");
    mainOneDescription.textContent = "bomba rice, parmesean, marscapone, porcini";
    mainOneDescription.classList.add("plate-descriptions");
    mainsTitle.append(mainOneDescription);

    const mainTwo = document.createElement("div");
    mainTwo.textContent = "Herb Crusted Rack Of Lamb";
    mainTwo.classList.add("plates");
    mainsTitle.append(mainTwo);

    const mainTwoDescription = document.createElement("div");
    mainTwoDescription.textContent = "sauce diable, sundried tomato pesto, citrus agrodolce, herb salad";
    mainTwoDescription.classList.add("plate-descriptions");
    mainsTitle.append(mainTwoDescription);

    const mainThree = document.createElement("div");
    mainThree.textContent = "14 OZ. Prime RibEye Steak";
    mainThree.classList.add("plates");
    mainsTitle.append(mainThree);

    const mainThreeDescription = document.createElement("div");
    mainThreeDescription.textContent = "pommes gratin, haricot verts, bordelaise";
    mainThreeDescription.classList.add("plate-descriptions");
    mainsTitle.append(mainThreeDescription);

    const mainFour = document.createElement("div");
    mainFour.textContent = "Local Black Cod";
    mainFour.classList.add("plates");
    mainsTitle.append(mainFour);

    const mainFourDescription = document.createElement("div");
    mainFourDescription.textContent = "pommes mousseline, braised kale, haricot verts,";
    mainFourDescription.classList.add("plate-descriptions");
    mainsTitle.append(mainFourDescription);

    const mainFourDescriptionB = document.createElement("div"); //second line of description
    mainFourDescriptionB.textContent = "green garlic grenobloise";
    mainFourDescriptionB.classList.add("plate-descriptions");
    mainsTitle.append(mainFourDescriptionB);

    const mainFive = document.createElement("div");
    mainFive.textContent = "Mary's Organic Chicken";
    mainFive.classList.add("plates");
    mainsTitle.append(mainFive);

    const mainFiveDescription = document.createElement("div");
    mainFiveDescription.textContent = "baby turnips, sugar snap peas, baby carrots, baby fennel,";
    mainFiveDescription.classList.add("plate-descriptions");
    mainsTitle.append(mainFiveDescription);

    const mainFiveDescriptionB = document.createElement("div"); //second line of description
    mainFiveDescriptionB.textContent = "fingerling potatoes, pearl onions, shallots, fine herbs sauce";
    mainFiveDescriptionB.classList.add("plate-descriptions");
    mainsTitle.append(mainFiveDescriptionB);

    //end of Mains

    const toShareTitle = document.createElement("div");
    toShareTitle.textContent = "To Share";
    toShareTitle.classList.add("menu-headers");
    menuContainer.append(toShareTitle);

    const toShareOne = document.createElement("div");
    toShareOne.textContent = "Cheese Of The Moment";
    toShareOne.classList.add("plates");
    toShareTitle.append(toShareOne);

    const toShareOneDescription = document.createElement("div");
    toShareOneDescription.textContent = "baguette with accoutrements";
    toShareOneDescription.classList.add("plate-descriptions");
    toShareTitle.append(toShareOneDescription);


    const toShareTwo = document.createElement("div");
    toShareTwo.textContent = "Housemade Flatbread";
    toShareTwo.classList.add("plates");
    toShareTitle.append(toShareTwo);

    const toShareTwoDescription = document.createElement("div");
    toShareTwoDescription.textContent = "house labneh, smoked tomatoes, herbs";
    toShareTwoDescription.classList.add("plate-descriptions");
    toShareTitle.append(toShareTwoDescription);


    const toShareThree = document.createElement("div");
    toShareThree.textContent = "Grilled Pork Iberico";
    toShareThree.classList.add("plates");
    toShareTitle.append(toShareThree);

    const toShareThreeDescription = document.createElement("div");
    toShareThreeDescription.textContent = "eggplant, date vinegar, za'atar, chives";
    toShareThreeDescription.classList.add("plate-descriptions");
    toShareTitle.append(toShareThreeDescription);

    const toShareFour = document.createElement("div");
    toShareFour.textContent = "Mezze Plate";
    toShareFour.classList.add("plates");
    toShareTitle.append(toShareFour);


    const toShareFourDescription = document.createElement("div");
    toShareFourDescription.textContent = "muhammara, baba ghanoush, hummus,";
    toShareFourDescription.classList.add("plate-descriptions");
    toShareTitle.append(toShareFourDescription);


    const toShareFourDescriptionB = document.createElement("div"); //second line of description
    toShareFourDescriptionB.textContent = "carrot salad, cauliflower salad, cucumber salad, deviled egg";
    toShareFourDescriptionB.classList.add("plate-descriptions");
    toShareTitle.append(toShareFourDescriptionB);

    //end of share items

    const dessertTitle = document.createElement("div");
    dessertTitle.textContent = "Afters";
    dessertTitle.classList.add("menu-headers");
    menuContainer.append(dessertTitle);

    const dessertOne = document.createElement("div");
    dessertOne.textContent = 'Toasted Brioche and Sherry"Creme Brulee"';
    dessertOne.classList.add("plates");
    dessertTitle.append(dessertOne);

    const dessertOneDescription = document.createElement("div");
    dessertOneDescription.textContent = "fried cornbread, chocolate ganache, shiitake";
    dessertOneDescription.classList.add("plate-descriptions");
    dessertTitle.append(dessertOneDescription);    

    const dessertTwo = document.createElement("div");
    dessertTwo.textContent = "White Chocolate and Bread Pudding";
    dessertTwo.classList.add("plates");
    dessertTitle.append(dessertTwo);

    const dessertTwoDescription = document.createElement("div");
    dessertTwoDescription.textContent = "bourbon caramel glaze";
    dessertTwoDescription.classList.add("plate-descriptions");
    dessertTitle.append(dessertTwoDescription);    




    


   
}

export const greetingTwo = "Hello Fartsniffer!";


export function handleMenuClick(event, wrapper){
    console.log(event.target);
    wrapper.lastElementChild.remove();
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";                  //ID for menu to display!
    wrapper.append(menuContainer);
    // end of how to remove last div and add new div to give new display

    const menuAppetizerTitle = document.createElement("div");
    menuAppetizerTitle.textContent = "Appetizers";
    menuAppetizerTitle.classList.add("appetizers");
    menuContainer.append(menuAppetizerTitle);
    
   
}

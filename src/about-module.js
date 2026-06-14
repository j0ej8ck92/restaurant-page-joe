export function handleAboutClick(event, wrapper){
    console.log(event.target);
    wrapper.lastElementChild.remove();
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";
    aboutContainer.textContent = "About this Restaurant";
    wrapper.append(aboutContainer);

} 
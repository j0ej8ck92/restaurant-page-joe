export function handleHomeQuote(event, wrapper){
    console.log(event.target);
    wrapper.lastElementChild.remove();
    const quote = document.createElement("div");
    quote.id = "quote"
    quote.textContent = "Food and Family.";
    wrapper.append(quote);

} 

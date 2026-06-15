export function handleHomeQuoteClick(wrapper){
    wrapper.lastElementChild.remove();
    const quote = document.createElement("div");
    quote.id = "quote"
    quote.textContent = "Food and Family.";
    wrapper.append(quote);
} 

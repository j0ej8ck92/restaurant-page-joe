export function handleBookNowClick(event, wrapper){
    console.log(event.target);
    wrapper.lastElementChild.remove();
    const bookNowContainer = document.createElement("div");
    bookNowContainer.id = "book-now-container";
    bookNowContainer.textContent = "We about to Put in a Form bruh";
    wrapper.append(bookNowContainer);

} 
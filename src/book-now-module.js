export function handleBookNowClick(wrapper){
    wrapper.lastElementChild.remove();
    const bookNowContainer = document.createElement("div");
    bookNowContainer.id = "book-now-container";
    wrapper.append(bookNowContainer);

    const dialog = document.createElement("dialog");
    dialog.id = "book-now-dialog";
    bookNowContainer.append(dialog);

    const dialogContentDiv = document.createElement("div");
    dialogContentDiv.classList.add("dialog-content");
    dialog.append(dialogContentDiv);

    const form = document.createElement("form");
    form.id = "form";
    dialogContentDiv.append(form);

    const formDivOne = document.createElement("div");
    formDivOne.classList.add("form-div");
    form.append(formDivOne);

    const labelOne = document.createElement("label");
    labelOne.htmlFor = "first-name";
    labelOne.textContent = "First Name:";
    formDivOne.append(labelOne);

    const inputOne = document.createElement("input");
    inputOne.type = "text";
    inputOne.name = "first-name";
    inputOne.id = "first-name";
    inputOne.required = true;
    formDivOne.append(inputOne);

    const formDivTwo = document.createElement("div");
    formDivTwo.classList.add("form-div");
    form.append(formDivTwo);

    const labelTwo = document.createElement("label");
    labelTwo.htmlFor = "last-name";
    labelTwo.textContent = "Last Name:";
    formDivTwo.append(labelTwo);

    const inputTwo = document.createElement("input");
    inputTwo.type = "text";
    inputTwo.name = "last-name";
    inputTwo.id = "last-name";
    inputTwo.required = true;
    formDivTwo.append(inputTwo);

    const formDivThree = document.createElement("div");
    formDivThree.classList.add("form-div");
    form.append(formDivThree);

    const labelThree = document.createElement("label");
    labelThree.htmlFor = "guest-count";
    labelThree.textContent = "Number of Guests:";
    formDivThree.append(labelThree);

    const inputThree = document.createElement("input");
    inputThree.type = "number";
    inputThree.name = "guest-count";
    inputThree.id = "guest-count";
    inputThree.min = "1";
    inputThree.required = true;
    formDivThree.append(inputThree);

    const formDivFour = document.createElement("div");
    formDivFour.classList.add("form-div");
    form.append(formDivFour);

    const labelFour = document.createElement("label");
    labelFour.htmlFor = "reservation-date";
    labelFour.textContent = "Date of Reservation:";
    formDivFour.append(labelFour);

    const inputFour = document.createElement("input");
    inputFour.type = "datetime-local";
    inputFour.name = "guest-count";
    inputFour.id = "guest-count";
    inputFour.value = "2026-06-14T17:00";
    inputFour.min = "2026-06-14T17:00";
    inputFour.max = "2026-06-30T21:30";
    inputFour.required = true;
    formDivFour.append(inputFour);

    const formDivFive = document.createElement("div");
    formDivFive.classList.add("form-div");
    form.append(formDivFive);

    const formReserveButton = document.createElement("button");
    formReserveButton.type = "submit";
    formReserveButton.id = "submit";
    formReserveButton.textContent = "Reserve";
    formDivFive.append(formReserveButton);

    const formDivSix = document.createElement("div");
    formDivSix.classList.add("form-div");
    form.append(formDivSix);

    const formCancelButton = document.createElement("button");
    formCancelButton.id = "cancel";
    formCancelButton.textContent = "Cancel";
    formDivSix.append(formCancelButton);

    dialog.showModal();

    formCancelButton.addEventListener("click", function() {
        dialog.close();
    })

    form.addEventListener("submit", (event) => {
        console.log(event);
        event.preventDefault();
        console.log(inputOne.value, inputTwo.value, inputThree.value, inputFour.value);
        dialog.close();
        form.reset();
    })
}
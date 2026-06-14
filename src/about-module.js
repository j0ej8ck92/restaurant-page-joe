export function handleAboutClick(event, wrapper){
    console.log(event.target);
    wrapper.lastElementChild.remove();
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";
    wrapper.append(aboutContainer);

    const aboutPara = document.createElement("div");
    aboutPara.classList.add("para");
    aboutPara.textContent = `"You know its been a long time since I thought about coming up with a restaurant page of my own.Have you ever thought about making one? What type of theme are you going to use? What type of color palette. I was 
                             thinking about using warm colors with a dark ambience to give it that city vibe. I mean, hell, we are in the city
                             of angels. I know this guy. I mean he's not just a guy. He's the guy. No let me rephrase that. He's a chef. He's the chef.
                             He goes by the name of Shoeless. You know, like Shoeless Joe Jackson? You're gonna sit here and tell me you don't know who
                             Shoeless Joe Jackson is? I guess I have to remember the era we are in. I hope this place can take us back to the good days. 
                             The days where you could go anywhere and get a good meal. Shoeless Joe Jackson wouldn't have a problem with that bet i'll tell
                             ya."`
    aboutContainer.append(aboutPara);

    const aboutPic = document.createElement("div");
    aboutPic.classList.add("about-pic");
    aboutContainer.append(aboutPic);

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-div");
    aboutContainer.append(contactDiv);

    const contactAddress = document.createElement("div");
    contactAddress.textContent = "5955 GAGE AVENUE"
    contactDiv.append(contactAddress);

    const contactAddressB = document.createElement("div");
    contactAddressB.textContent = "LOS ANGELES, CA, 90201"
    contactDiv.append(contactAddressB);

    const contactPhoneNumber = document.createElement("div");
    contactPhoneNumber.textContent = "(213) 460-4170"
    contactDiv.append(contactPhoneNumber);

    const contactEmail = document.createElement("div");
    contactEmail.classList.add("contact-color");
    contactEmail.textContent = "SH0EJ8CK92@GMAIL.COM"
    contactDiv.append(contactEmail);

    const contactMedia = document.createElement("div");
    contactMedia.classList.add("contact-color");
    contactMedia.textContent = "FOR MEDIA INQUIRIES"
    contactDiv.append(contactMedia);

    const contactAccessibility = document.createElement("div");
    contactAccessibility.classList.add("contact-color");
    contactAccessibility.textContent = "ACCESSIBILITY"
    contactDiv.append(contactAccessibility);
    



} 
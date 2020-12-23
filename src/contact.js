function contact() {
    const tabContent = document.getElementById("tab-content")
    tabContent.innerHTML ="";
   

    const title = document.createElement("h1");
    title.textContent = "Get in Touch"
    tabContent.appendChild(title);


    const text = document.createElement("h3");
    text.textContent = "We would love to hear from you. Give us a call or send us an email.";
    const phone = document.createElement("h3");
    phone.textContent = "Phone: 040 000 444";
    const email = document.createElement("h3");
    email.textContent = "email: restaurant@mail.com";

    tabContent.appendChild(text);
    tabContent.appendChild(email);
    tabContent.appendChild(phone);
}

export default contact;
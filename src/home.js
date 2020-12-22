import menu from "./menu";


function home() {
    const tabContent = document.getElementById("tab-content")
    tabContent.innerHTML ="";

    const title = document.createElement("h1");
    title.textContent = "Welcome to our Restaurant"
    tabContent.appendChild(title);


    const buttonContainer = document.createElement("div")
    buttonContainer.setAttribute("class", "button-container")
    

    const button = document.createElement("button");
    button.textContent="Menu";
    button.setAttribute("class", "menu-button")

    buttonContainer.appendChild(button);
    tabContent.appendChild(buttonContainer);

    button.addEventListener("click", () => {
        menu();
    })

}

export default home;
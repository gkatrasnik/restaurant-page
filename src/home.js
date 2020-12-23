import menu from "./menu";


function home() {
    const tabContent = document.getElementById("tab-content")
    tabContent.innerHTML ="";

    const title = document.createElement("h1");
    title.textContent = "Welcome to our Restaurant"
    title.setAttribute("class", "home-title");
    tabContent.appendChild(title);
    

    const button = document.createElement("button");
    button.textContent="Menu";
    button.setAttribute("class", "menu-button")

    tabContent.appendChild(button);

    button.addEventListener("click", () => {
        menu();
    })

}

export default home;
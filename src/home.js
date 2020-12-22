

function home() {
    const tabContent = document.getElementById("tab-content")
    tabContent.innerHTML ="";

    const title = document.createElement("h1");
    title.textContent = "Welcome to our Restaurant"
    tabContent.appendChild(title);
}

export default home;
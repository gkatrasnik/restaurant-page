import home from "./home";
import {navListArr} from "./index";

 const content = document.getElementById("content")
 

function pageload() {

    //Create navigation bar and ul/li items
    const navbar = document.createElement("div")
    navbar.setAttribute("class", "navbar")

    const navList = document.createElement("ul");
    navList.setAttribute("class", "nav-list");       
    
    navListArr.forEach((i) => {
        let navItem = document.createElement("li");
        navItem.innerHTML=i;
        navItem.setAttribute("id", i);
        navItem.setAttribute("class", "nav-item")
        navList.appendChild(navItem);
    });
    
    navbar.appendChild(navList);
    content.appendChild(navbar);
    

    //Create footer
    const footer = document.createElement("div");
    footer.setAttribute("class", "footer")
    footer.textContent = "Copyright Gašper Katrašnik. All rights reserved."
    content.appendChild(footer);


    //Create tabContent div
    const tabContent = document.createElement("div");
    tabContent.setAttribute("id", "tab-content")
    tabContent.textContent="Tab Content Div"
    content.appendChild(tabContent);
    
    home()
}
    

export default pageload ;
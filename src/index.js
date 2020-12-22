import pageload from "./page-load";
import menu from "./menu";
import about from "./about";
import contact from "./contact";
import home from "./home";

const navListArr = ["Home", "Menu", "About", "Contact"];

pageload();




//add event listeners to tabs 
const navListItem = document.querySelectorAll(".nav-item");
navListItem.forEach((item) => {
    item.addEventListener("click", e => {
        if (e.target.id == "Home") {
            home();
        }else if (e.target.id == "Menu") {
            menu();
        }else if (e.target.id == "About") {
            about();
        }else if (e.target.id == "Contact") {
            contact();
        }

        navListItem.forEach((item) => {
            item.classList.remove("active")
        })
        e.target.classList.add("active")
        
    })
})

//create each tab content in its own module


export {navListArr};

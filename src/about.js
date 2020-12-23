function about() {
    const tabContent = document.getElementById("tab-content")
    tabContent.innerHTML ="";


    const title = document.createElement("h1");
    title.textContent = "About our Restaurant"
    tabContent.appendChild(title);

    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum ipsum luctus metus tempus semper. Curabitur consequat metus nec dui egestas, ut molestie quam suscipit. Nullam sapien odio, interdum sed tortor eu, rutrum tincidunt dui. Curabitur vel tortor ante. Pellentesque non nulla vulputate, ornare eros ullamcorper, luctus enim. Suspendisse maximus lectus eu ligula finibus lobortis. Nam feugiat nisi id porta posuere. Proin ac ligula convallis, dictum enim at, laoreet diam";
    para.setAttribute("class", "food-text")
    tabContent.appendChild(para);
}

export default about;
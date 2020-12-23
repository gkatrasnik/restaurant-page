function menu() {
    const tabContent = document.getElementById("tab-content")
    tabContent.innerHTML ="";
    
    const title = document.createElement("h1");
    title.textContent = "Menu"
    tabContent.appendChild(title);


    var imgArray = new Array();
    imgArray[0] = new Image();
    imgArray[0].src = 'steak.jpeg';
    imgArray[0].alt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris odio, hendrerit at ultrices ac"
    imgArray[0].price = "14";
    imgArray[1] = new Image();
    imgArray[1].src = 'pizza.jpeg';
    imgArray[1].alt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris odio, hendrerit at ultrices ac"
    imgArray[1].price = "12";
    imgArray[2] = new Image();
    imgArray[2].src = 'pancakes.jpeg';
    imgArray[2].alt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris odio, hendrerit at ultrices ac"
    imgArray[2].price = "10";


    
    function createImg(picture) {
        let foodDiv = document.createElement("div");
        let img = document.createElement("img");
        let text = document.createElement("p");
        let price = document.createElement("p");
        img.src = picture.src;
        img.alt = picture.alt;
        img.setAttribute("class", "food-img")
        text.textContent = picture.alt;
        text.setAttribute("class", "food-text")
        price.textContent = "Price: " + picture.price;

        foodDiv.setAttribute("class", "food-div")
               
        foodDiv.appendChild(img);
        foodDiv.appendChild(text);
        foodDiv.appendChild(price); 
        tabContent.appendChild(foodDiv);
    }

    imgArray.forEach((i)=> {
       createImg(i);
    })
}

export default menu;
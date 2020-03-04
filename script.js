let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];
let curIndex = 0;
let leftArrow = document.querySelector("#leftA");
let rightArrow = document.querySelector("#rightA");
let imageDisplay = document.querySelector(".product-photo");

leftArrow.addEventListener('click', function(){
    curIndex = (curIndex - 1);
    if(curIndex == -1){
        curIndex = images.length - 1;
    }
    imageDisplay.setAttribute("style", "background-image: url('product-image/" +images[curIndex]+"');");
});
rightArrow.addEventListener('click', function(){
    curIndex = (curIndex + 1) % images.length;
    imageDisplay.setAttribute("style", "background-image: url('product-image/" +images[curIndex]+"');");
});

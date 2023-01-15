// First Img
let imgContainer = document.body.firstElementChild.firstElementChild;
imgContainer.style.textAlign = "right";

// UL
let ul = imgContainer.nextElementSibling.firstElementChild;
ul.style.listStyleType = "circle";

// Last Img
let newImg = imgContainer.cloneNode(true);
newImg.style.textAlign = "left";
document.body.appendChild(newImg);

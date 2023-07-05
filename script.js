

let image1 = document.getElementById("moon-1")
let image2 = document.getElementById("moon-2");
let button = document.getElementById("button");
let marquee = document.getElementById("marquee");

document.getElementById("button").addEventListener("click", myFunction());
function myFunction(){
    let  element = document.body;

    if(element.classList = element.classList.toggle("dark")) {
        element.classList.toggle("dark")
        button.textContent = "light";    
        id.style.color = "white"; 
        id.innerText = "Dark Theme";
        image2.style.display = "none";
        image1.style.display = "block";

    } else {
        element.classList.toggle("light")
        button.textContent = "dark"
        id.style.color = "black";
        id.innerText = "Light Theme";
        image2.style.display = "block";
        image1.style.display = "none";


    }
}
myFunction()

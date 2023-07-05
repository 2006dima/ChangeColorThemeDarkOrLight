

let getP = document.getElementById("id");
let button = document.getElementById("button");
document.getElementById("button").addEventListener("click", myFunction());
function myFunction(){
    let  element = document.body;

    if(element.classList = element.classList.toggle("dark")) {
        element.classList.toggle("dark")
        button.textContent = "light";    
        id.style.color = "white"; 
    } else {
        element.classList.toggle("light")
        button.textContent = "dark"
        id.style.color = "black";
    }
}
myFunction()

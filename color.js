console.log("Vy");

  
var But1 = document.querySelector("#button1");
var But2 = document.querySelector("#button2");
var But3 = document.querySelector("#button3");
var But4 = document.querySelector("#button4");
var But5 = document.querySelector("#button5");
var But6 = document.querySelector("#button6");
var Code = document.querySelector("#ColorCode")
var game0ver = false;

But1.style.backgroundColor = randomColors(); 
But2.style.backgroundColor = randomColors(); 
But3.style.backgroundColor = randomColors(); 
But4.style.backgroundColor = randomColors(); 
But5.style.backgroundColor = randomColors(); 
But6.style.backgroundColor = randomColors(); 

var pick = randomNumber(1,6);
if (pick == 1)     Code.textContent = But1.style.backgroundColor;
else if(pick == 2) Code.textContent = But2.style.backgroundColor; 
else if(pick == 3) Code.textContent = But3.style.backgroundColor; 
else if(pick == 4) Code.textContent = But4.style.backgroundColor; 
else if(pick == 5) Code.textContent = But5.style.backgroundColor; 
else if(pick == 6) Code.textContent = But6.style.backgroundColor; 




But1.addEventListener("click", function(){
    if(But1.style.backgroundColor == Code.textContent)
    console.log("win");
    else But1.style.backgroundColor = "rgb(19, 18, 18)";
}) ;


  // Function to generate random number  


function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  ;

  // Function to generate random color  

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
} ;









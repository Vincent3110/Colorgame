var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("span");
var messageDisplay = document.querySelector("#message");
var h1background = document.querySelector("h1");
var resetButton =  document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var easyMode;


// Easy mode, 3 squares.
easyBtn.addEventListener("click", function(){
    easyMode = true;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    // create 3 squares andd add random colors 
    colors =generateRandomColor(3);
    // Pick a color 
    pickedColor = pickColor();
    //change the code colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change background color of squares
    changeSquareColor();
    for(var i = 0; i < squares.length; i ++){
        console.log("length of for loops : " + squares.length);
        if (colors[i])
        squares[i].style.backgroundColor = colors[i];
        else 
        squares[i].style.display = "none";

    }
});

//hard mode, 6 squares.
hardBtn.addEventListener("click", function(){
    easyMode = false;
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
     // create 6 squares andd add random colors 
     colors =generateRandomColor(6);
     // Pick a color 
     pickedColor = pickColor();
     //change the code colorDisplay to match picked color
     colorDisplay.textContent = pickedColor;
     //change background color of squares
     changeSquareColor();
     for(var i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = colors[i];
        if(i>2) 
        squares[i].style.display = "block" ;

     }
});


resetButton.addEventListener("click", function resetGame(){
    //generate all new colors
    if(easyMode)
    colors = generateRandomColor(3);
    else 
    colors = generateRandomColor(6);

    messageDisplay.textContent = "" ;
    resetButton.textContent ="new color" ; 

    //pick new random colors from array
    pickedColor = pickColor();
    //change the code colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change background colors of squares
    changeSquareColor();

    //Change top background color 
    h1background.style.backgroundColor = "steelblue";

});


colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++){
//add initial color to squares
    squares[i].style.backgroundColor = colors[i];

//add click listener to squares

    squares[i].addEventListener("click", function(){

        var clickedColor = this.style.backgroundColor ;
//compare clicked color with picked color;
        //YOU WIN 
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "You win" ;
            changeColors();
            h1background.style.backgroundColor = pickedColor;
            resetButton.textContent = "New Game?";
        }
        // YOU LOSE
        else {
            this.style.backgroundColor = "#232323"  ;
            messageDisplay.textContent = "Try again" ;
        } ;
    });
}



   
    //change all squares color match with picked color;
function changeColors(){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
    //change all squares color match with picked color;
        squares[i].style.backgroundColor = pickedColor;
    }
};

    //Pick a color for guess 
function pickColor(){
  var random =  Math.floor((Math.random() * colors.length +1));
  return colors[random-1];
};


    //create "num" squares and add random color for each square
function generateRandomColor(num){
    //make an array
    var arr = [];
    //add num ranrom colors to an array
    for (var i = 0; i< num ; i++){
    //get random color and push in to arr
     arr[i] = randomColor();

    }
    return arr;
};
    //this function support generaterandomColor function
function randomColor(){
    var r =   Math.floor(Math.random() * 256) ;
    var g =   Math.floor(Math.random() * 256) ;
    var b =   Math.floor(Math.random() * 256) ;
    return "rgb(" + r + ", " + g +", " + b + ")";
} ;
    // change the colors of squares
function changeSquareColor(){
    for (var i = 0; i < squares.length; i++){
        //add initial color to squares
            squares[i].style.backgroundColor = colors[i];
       }
}
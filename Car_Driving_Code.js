
// This program will move a car with the arrow keys


noStroke();

var x = 20;
var y = 20;
var move = 30;

var drawCar = function() {

//body
fill(230, 30, 30);
rect(x, y, 36, 20);

//window
fill(41, 35, 35);
rect(x + 8, y + 2, 19, 16);

//wheels
rect(x + 3, y - 2, 6, 2);
rect(x + 25, y - 2, 6, 2);
rect(x + 3, y + 20, 6, 2);
rect(x + 25, y + 20, 6, 2);

};

draw = function() {
    background(49, 99, 31);
    
    drawCar();
    
    if (keyIsPressed && keyCode === UP) {
    x += 2;
    }
    
    if (keyIsPressed && keyCode === DOWN) {
    x += -2;
    }
    
    
    
};

fill(255, 255, 255);
text(x, 381, 20);
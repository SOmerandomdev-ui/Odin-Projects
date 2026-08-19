let num1 = "0";
let num2 = "0";
let number1 = "0";
let number2 = "0";
let Operator_Pressed = false; 
let time = 0;
let operator;
let pressed2 = false;
let var1;

let tiles = document.querySelectorAll(".tile, .CC, img, .Enter, .zero, .one, .op")

tiles.forEach(tile =>  {
    tile.addEventListener("mousedown", () => {
        tile.style.backgroundColor = "red"
    }) 

    tile.addEventListener("mouseup", () => {
        tile.style.backgroundColor = "rgb(255, 153, 0)";
    })
})

//code for clearing the data 
let clear = () => {
    time = 0;
    number1 = 0;
    number2 = 0;
    num1 = 0;
    num2 = 0
}

//functions for when the operation happens 
let sum = (num1,num2) =>  (num1+num2)
let difference = (num1,num2) =>  (num1-num2)
let product = (num1,num2) => (num1*num2)
let quotient = (num1,num2) => (num1/num2)

let operate = (num1, num2, operator) => {

    if (typeof operator != "string") {
        return 
    }
 
    switch(operator.trim()) {
        case "+": var1 = (sum(num1, num2)); break;
        case "-": var1 = (difference(num1, num2)); break;
        case "*": var1 = (product(num1, num2)); break;
        case "/": var1 = (quotient(num1, num2)); break;
}
    screen.textContent = var1;  
    return var1;
}

//Code for displaying the numbers on the screen 
let screen = document.querySelector(".Number")
let numbers = document.querySelectorAll(".tile")
let ops = document.querySelectorAll(".op")
let Clear = document.querySelector(".CC")
let Enter = document.querySelector(".Enter")


//The Code for assigning values to num1 and num2 and selecting the operator, when the operator is pressed it declares a variable true which is important for future calculations 
numbers.forEach(number => {
    number.addEventListener("click", () => {

    if (Operator_Pressed == false) {
    screen.textContent += number.textContent.trim();
    screen.style.color = "white"
    number1 += number.textContent;
    num1 = parseInt(number1.replace(/\s/g, ""));
}
    else if (Operator_Pressed == true) {
    screen.textContent += number.textContent.trim();
    screen.style.color = "white";
    number2 += number.textContent;
    num2 = parseInt(number2.replace(/\s/g, ""));
    pressed2 = true;
    }

    }
)})

ops.forEach(op => {
    op.addEventListener("click", () => {
        Operator_Pressed = true;
        if (Operator_Pressed == true) {
            screen.textContent += op.textContent;
            screen.style.color = "white" 
        }
            
        
        
        if (Operator_Pressed && pressed2) {
            operate(num1, num2, operator)
            screen.textContent += op.textContent;
            screen.style.color = "white" 
            number2 = "0";
            num1 = var1;
        }

        operator = op.textContent

        
    })
})


//The code for when you press CC
Clear.addEventListener("click", () => {
    screen.textContent = "" 
    clear();
    Operator_Pressed = false;
    pressed2 = false;
})

//The code for when you press enter 
Enter.addEventListener("click", () => {
    operate(num1, num2, operator)
    number2 = "0";
    num1 = var1;
    pressed2 = false;
    }) 













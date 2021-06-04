//create three arrays

let firstNum = [];
let secondNum = [];
let operator = [];

//get first input
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');

//connect screen display
let display = document.querySelector('.screen')

//connect delete button
let deletebtn = document.querySelector('.delete');

//connect equals
let equals = document.querySelector('.equals');

//connect clear button
let clearbtn = document.querySelector('.clear');

getInput(firstNum);
function getInput(input) {

//create eventlisteners
one.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "1";
    input.push("1");
}
two.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "2";
    input.push("2");
}
three.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "3";
    input.push("3");
}
four.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "4";
    input.push("4");
}
five.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "5";
    input.push("5");
}
six.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "6";
    input.push("6");
}
seven.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "7";
    input.push("7");
}
eight.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "8";
    input.push("8");
}
nine.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "9";
    input.push("9");
}
zero.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "0";
    input.push("0");   
}
};

//wish list

// delete eventlistener
deletebtn.onclick = (e) => {
    deleteInput();
}

//create the clear button
clearbtn.onclick = (e) => {
    clearInput();
}
//delete function
function deleteInput() {
    let newDisplay = display.innerHTML.slice(0, -1);
    display.innerHTML = newDisplay;
    if (operator == '') {
        firstNum.pop();
    }
    if (operator != "") {
        secondNum.pop();
    };
};  
//clear function
function clearInput() {
    display.innerHTML = "";
    firstNum = [];
    secondNum = [];
    operator = [];
    getInput(firstNum);
    };

//create object for operators
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let add = document.querySelector('.add');
let minus = document.querySelector('.minus');



multiply.onclick = (e) => {
//clear the display
display.innerHTML = display.innerHTML = "";

//add to operator array
operator.push('multiply');

//get second number
getInput(secondNum);

equals.onclick = function() {
    display.innerHTML = "";
    let secondNumJoin = secondNum.join('');
    let firstNumJoin = firstNum.join('');
    let answer = parseInt(firstNumJoin) * parseInt(secondNumJoin);
    display.innerHTML = answer;
    console.log(secondNum);
    console.log(firstNum);
};
};

divide.onclick = (e) => {
    //clear the display
    display.innerHTML = display.innerHTML = "";
    
    //add to operator array
    operator.push('divide');
    
    //get second number
    getInput(secondNum);
    
    equals.onclick = function() {
        display.innerHTML = "";
        let secondNumJoin = secondNum.join('');
        let firstNumJoin = firstNum.join('');
        let answer = parseInt(firstNumJoin) / parseInt(secondNumJoin);
        display.innerHTML = answer;
    };
    };

add.onclick = (e) => {
    //clear the display
    display.innerHTML = display.innerHTML = "";
        
    //add to operator array
    operator.push('add');
        
    //get second number
    getInput(secondNum);
        
    equals.onclick = function() {
        display.innerHTML = "";
        let secondNumJoin = secondNum.join('');
        let firstNumJoin = firstNum.join('');
        let answer = parseInt(firstNumJoin) + parseInt(secondNumJoin);
        display.innerHTML = answer;
    };
};

minus.onclick = (e) => {
    //clear the display
    display.innerHTML = display.innerHTML = "";
        
    //add to operator array
    operator.push('minus');
        
    //get second number
    getInput(secondNum);
        
    equals.onclick = function() {
        display.innerHTML = "";
        let secondNumJoin = secondNum.join('');
        let firstNumJoin = firstNum.join('');
        let answer = parseInt(firstNumJoin) - parseInt(secondNumJoin);
        display.innerHTML = answer;
    };
};











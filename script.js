//create three arrays first input, operator, second input
/*let operatorArray = [];

let secondInput = [];

if (operatorArray == "") {
    computeFirstInput();
    console.log(firstInput);
} 

function computeFirstInput() {
let firstInput = [];
// create object for digits
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

//create object for operators
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let add = document.querySelector('.add');
let minus = document.querySelector('minus');

//connect screen display
let display = document.querySelector('.screen')

//create eventlisteners
one.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "1";
    firstInput.push("1");
}
two.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "2";
    firstInput.push("2");
}
three.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "3";
    firstInput.push("3");
}
four.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "4";
    firstInput.push("4");
}
five.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "5";
    firstInput.push("5");
}
six.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "6";
    firstInput.push("6");
}
seven.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "7";
    firstInput.push("7");
}
eight.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "8";
    firstInput.push("8");
}
nine.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "9";
    firstInput.push("9");
}
zero.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "0";
    firstInput.push("0");
}
multiply.onclick = (e) => {
    return firstInput
}

// delete eventlistener
//connect delete button
let deletebtn = document.querySelector('.delete');
deletebtn.onclick = (e) => {
    deleteInput();
}

let clearbtn = document.querySelector('.clear');
clearbtn.onclick = (e) => {
    clearInput();
}

//wish list
//delete function
function deleteInput() {
let newDisplay = display.innerHTML.slice(0, -1);
display.innerHTML = newDisplay;
firstInput.pop();
}

//clear function
function clearInput() {
display.innerHTML = "";
firstInput = "";
operatorArray = "";
secondInput = "";
}
};
*/
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

firstNum = [];

//create eventlisteners
one.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "1";
    firstNum.push("1");
}
two.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "2";
    firstNum.push("2");
}
three.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "3";
    firstNum.push("3");
}
four.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "4";
    firstNum.push("4");
}
five.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "5";
    firstNum.push("5");
}
six.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "6";
    firstNum.push("6");
}
seven.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "7";
    firstNum.push("7");
}
eight.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "8";
    firstNum.push("8");
}
nine.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "9";
    firstNum.push("9");
}
zero.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "0";
    firstNum.push("0");   
}

// delete eventlistener
//connect delete button
let deletebtn = document.querySelector('.delete');
deletebtn.onclick = (e) => {
    deleteInput();
}

let clearbtn = document.querySelector('.clear');
clearbtn.onclick = (e) => {
    clearInput();
}

//wish list
//delete function
function deleteInput() {
let newDisplay = display.innerHTML.slice(0, -1);
display.innerHTML = newDisplay;
}

//clear function
function clearInput() {
display.innerHTML = "";
firstInput = "";
operatorArray = "";
secondInput = "";
}

//create object for operators
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let add = document.querySelector('.add');
let minus = document.querySelector('minus');


multiply.onclick = (e) => {
secondNum = [];
function compute(firstNum, secondNum) {
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

//create eventlisteners
one.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "1";
    secondNum.push("1");
}
two.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "2";
    secondNum.push("2");
}
three.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "3";
    secondNum.push("3");
}
four.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "4";
    secondNum.push("4");
}
five.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "5";
    secondNum.push("5");
}
six.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "6";
    secondNum.push("6");
}
seven.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "7";
    secondNum.push("7");
}
eight.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "8";
    secondNum.push("8");
}
nine.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "9";
    secondNum.push("9");
}
zero.onclick = (e) => { 
    display.innerHTML = display.innerHTML += "0";
    secondNum.push("0");   
}
}
display.innerHTML = display.innerHTML = "";
compute(firstNum, secondNum);
let equals = document.querySelector('.equals');
equals.onclick = function() {
    display.innerHTML = "";
    let answer = parseInt(firstNum) * parseInt(secondNum);
    display.innerHTML = answer;
}
};

divide.onclick = (e) => {
    secondNumd = [];
    function compute(firstNum, secondNum) {
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
    
    //create eventlisteners
    one.onclick = (e) => { 
        display.innerHTML = display.innerHTML += "1";
        secondNumd.push("1");
    }
    two.onclick = (e) => { 
        display.innerHTML = display.innerHTML += "2";
        secondNumd.push("2");
    }
    three.onclick = (e) => { 
        display.innerHTML = display.innerHTML += "3";
        secondNumd.push("3");
    }
    four.onclick = (e) => { 
        display.innerHTML = display.innerHTML += "4";
        secondNumd.push("4");
    }
    five.onclick = (e) => { 
        display.innerHTML = display.innerHTML += "5";
        secondNumd.push("5");
    }
    six.onclick = (e) => { 
        display.innerHTML = display.innerHTML += "6";
        secondNumd.push("6");
    }
    seven.onclick = (e) => { 
        display.innerHTML = display.innerHTML += "7";
        secondNumd.push("7");
    }
    eight.onclick = (e) => { 
        display.innerHTML = display.innerHTML += "8";
        secondNumd.push("8");
    }
    nine.onclick = (e) => { 
        display.innerHTML = display.innerHTML += "9";
        secondNumd.push("9");
    }
    zero.onclick = (e) => { 
        display.innerHTML = display.innerHTML += "0";
        secondNumd.push("0");   
    }
    }
    display.innerHTML = display.innerHTML = "";
    compute(firstNum, secondNumd);
    let equals = document.querySelector('.equals');
    equals.onclick = function() {
        display.innerHTML = "";
        let answer = parseInt(firstNum) / parseInt(secondNumd);
        display.innerHTML = answer;
    }
    };












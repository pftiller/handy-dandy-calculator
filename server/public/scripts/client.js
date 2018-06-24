let displayNumber='';
let equationArray = [];
let objectToSend;
let answer = '';
console.log('JS');
$(document).ready(onLoad);

function onLoad() {
    console.log('JQ');
    //event listeners
    $('#numbers button').on('click', captureAndDisplay);
    $('#operators button').on('click', captureOperator);
    $('#equals').on('click', getAnswer);
    $('#new-problem').on('click', '#reset', newProblem);


}

// function captureAndDisplay() {
//     let lastElement = equationArray[equationArray.length - 1];
//     console.log(lastElement);
//     if(typeof lastElement === "undefined") {
//         displayNumber+=$(this).text();
//         console.log(displayNumber);
//         $('#display span').append(displayNumber).text();
//     }
//         else {
//             if(lastElement === "addition" || "subtraction" || "division" || "multiplication") {
//                 $('#display span').empty();
//                 displayNumber=$(this).text();
//                 console.log(displayNumber);
//                 $('#display span').append(displayNumber).text();
//             }
//         }
//     }
    
    function captureAndDisplay() {
        let lastElement = equationArray[equationArray.length - 1];
        console.log(lastElement);
        if(lastElement === "plus" || "minus" || "times" || "dividedby") {
            $('#display span').empty();
            console.log(displayNumber);
        }
           
        displayNumber=$(this).text();
        console.log(displayNumber);
        $('#display span').append(displayNumber).text();
        }
            
    
function captureOperator() {
    let integer = parseInt(displayNumber);
    console.log('here is integer', integer);
    equationArray.push((integer));
    equationArray.push(($(this).attr('id')));
}
function getAnswer() {
    let integer = parseInt(displayNumber);
    console.log('here is integer', integer);
    equationArray.push((integer));
    $('#display span').empty();
    $('#calculator button').attr("disabled", true);
   
          if(answer === '') {
            answer = equationArray[0];
          }
        let i = 1;
        while(i > 0 && i < equationArray.length) {
        if(equationArray[i] === 'plus') {
             answer+= equationArray[i + 1];
            console.log(answer);
            i++;
        }
        else if(equationArray[i] ===  'minus') {
            answer-= equationArray[i + 1];
            console.log(answer);
            i++;
        }
        else if(equationArray[i] === 'times') {
            answer*= equationArray[i + 1];
            console.log(answer);
            i++;
        }
        else if(equationArray[i] === 'dividedby')
            answer/= equationArray[i + 1];
            console.log(answer);
            i++;
        }
       
        console.log(answer);
    displayAnswer();
};

function looptheArray() {
    let string = ''
    for(let item in equationArray) {
      string += equationArray[item] + ' ';
    }
    return string;
}

function displayAnswer() { 
    $('#display span').append(answer);
    $('#equation-history').append(`<li> ${looptheArray()}  equals  ${answer}`);
    $('#new-problem').append('<button id="reset">New Problem</button>');
}

function newProblem() {
    $('#reset').remove();
    $('#display span').empty();
    equationArray = [];
    answer = '';
    $('#calculator button').attr("disabled", false);
}
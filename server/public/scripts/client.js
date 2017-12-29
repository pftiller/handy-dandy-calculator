class EquationElements {
    constructor(number1,operator,number2){
        this.number1 = number1;
        this.operator = operator;
        this.number2 = number2;
    }
}

let displayNumber='';
let equationArray = [];
let objectToSend;
console.log('JS');
$(document).ready(onLoad);

function onLoad() {
    console.log('JQ');
    //event listeners
    $('#numbers button').on('click', captureAndDisplay);
    $('#operators button').on('click', captureID);
    $('#equals').on('click', sendMathEquation);

}

function captureAndDisplay() {
    displayNumber+=$(this).text();
    $('#display span').append($(this).text())
}

function captureID() {
   equationArray.push(displayNumber);
   displayNumber = '';
   $('#display span').empty();
   equationArray.push(($(this).attr('id')));
}
function sendMathEquation() {
    equationArray.push(displayNumber);
        objectToSend = new EquationElements(equationArray[0], equationArray[1], equationArray[2]); 
        console.log(objectToSend);   
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: objectToSend,
        success: function(response) {
            console.log('SUCCESS', response);
            displayAnswer(response);
        },
        error: function(response) {
            console.log('ERROR', response);
        }
    });
    $('#display span').empty();
    $('#calculator button').attr("disabled", true);
};

// function getAnswer() {
//     $.ajax({
//         method: 'GET',
//         url: '/calculate',
//         success: function( response ){
//             console.log( 'back from server with:', response );
//             displayAnswer(response);
//         }
//     });
// }
function displayAnswer(answer) {
    console.log(answer);
}
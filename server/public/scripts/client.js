let displayNumber='';
let equationArray = [];
let objectToSend;
console.log('JS');
$(document).ready(onLoad);

function onLoad() {
    console.log('JQ');
    //event listeners
    $('#numbers button').on('click', captureAndDisplay);
    $('#operators button').on('click', captureOperator);
    $('#equals').on('click', sendMathEquation);

}

function captureAndDisplay() {
    let lastElement = equationArray[equationArray.length - 1];
    console.log(lastElement);
    if(typeof lastElement === "undefined") {
        displayNumber = '';
        displayNumber+=$(this).text();
        console.log(displayNumber);
        $('#display span').append(displayNumber).text();
    }
        else {
            if(lastElement === "addition") {
                $('#display span').empty();
                displayNumber=$(this).text();
                console.log(displayNumber);
                $('#display span').append(displayNumber).text();
            }
        }
    }
    

    // }


function captureOperator() {
    let integer = parseInt(displayNumber);
    console.log('here is integer', integer);
    equationArray.push((integer));
    equationArray.push(($(this).attr('id')));
}
function sendMathEquation() {
    equationArray.push(displayNumber);
        objectToSend += new EquationElements(equationArray[0], equationArray[1], equationArray[2]); 
        console.log(objectToSend);   
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: objectToSend,
        success: function(response) {
            console.log('SUCCESS', response);
        },
        error: function(response) {
            console.log('ERROR', response);
        }
    });
    $('#display span').empty();
    $('#calculator button').attr("disabled", true);
    getAnswer();
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
// function displayAnswer(response) { 
//     $('#display span').append(response[0].answer);
//     $('#equation-history').append
// }
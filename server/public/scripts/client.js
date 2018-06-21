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
    $('#display span').empty();
    displayNumber+=$(this).text();
    $('#display span').append($(this).text())
}

function captureID() {
   equationArray.push(displayNumber);
   displayNumber = '';
   equationArray.push(($(this).attr('id')));
   if(equationArray.length > 2) {
        getAnswer();
   }
}
function sendMathEquation() {
    equationArray.push(displayNumber);
    for(let item of equationArray) {
        objectToSend += equationArray[item];
        console.log(objectToSend);   
    }
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
    // $('#calculator button').attr("disabled", true);
    getAnswer();
};

function getAnswer() {
    $.ajax({
        method: 'GET',
        url: '/calculate',
        success: function( response ){
            console.log( 'back from server with:', response );
            displayAnswer(response);
        }
    });
}
function displayAnswer(response) { 
    $('#display span').append(response);
    $('#equation-history').append
}
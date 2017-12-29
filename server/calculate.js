let allEquations = [];
let answer;

function calculateEquation(latestEquation) {
    if(latestEquation.operator == 'addition') {
        answer = parseInt(latestEquation.number1) + parseInt(latestEquation.number2);
    }
    else if(latestEquation.operator == 'subtraction') {
        answer = parseInt(latestEquation.number1) - parseInt(latestEquation.number2);
    }
    else if(latestEquation.operator == 'multiplication') {
        answer = parseInt(latestEquation.number1) * parseInt(latestEquation.number2);
    }
    else {
        answer = parseInt(latestEquation.number1) / parseInt(latestEquation.number2);
    }
   latestEquation.answer = answer;
   console.log(latestEquation);
   allEquations.push(latestEquation);
   console.log(allEquations);
}

function provideAnswer() {
    return latestEquation.answer;
}

module.exports = {
   calculateEquation: calculateEquation,
   //latestAnswer: provideAnswer
};
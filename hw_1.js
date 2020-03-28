function changeColor(){
    let first = 50;
    let second = 80;
    let third = 70;
    let randint = Math.random();
    console.log('background-color is rgba(' + first + ',' + second + ',' + third + ',' + randint + ')');
    $('body').css('background-color', `rgba(${first}, ${second}, ${third}, ${randint})`);
}
function accessAuthorization(){
    let age = prompt('Type your age');
    if (Number.isInteger(+age) && age >= 18){
    alert('Access Granted');
    }else if (Number.isInteger(+age) && age < 18){
    alert('Access Denied');
    }else if (typeof age === 'string' && !+age){
    alert('Incorrect input');
    } else {
    alert('Incompatible data format!');
    }
}
function schoolCase(){
    switch (+prompt('number')) {
    case 0:
    case 1:
    console.log('The day has just began');
    break;
    case 2:
    case 3:
    case 4:
    console.log('You can sleep for now');
    break;
    case 5:
    case 6:
    console.log('Mom, can i sleep little longer?');
    break;
    case 7:
    case 8:
    case 9:
    console.log('Get ready for school');
    break;
    case 10:
    case 11:
    case 12:
    case 13:
    console.log('Lessons in school');
    break;
    case 14:
    case 15:
    case 16:
    console.log('after school classes');
    break;
    case 17:
    case 18:
    console.log('Going home');
    break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    console.log('Hell Yeah!');
    break;
}}
function schoolIfElif(){
let incomingHour = prompt('number');
if (incomingHour == 0 || incomingHour == 1){
     console.log('The day has just began');
} else if (incomingHour == 2 || incomingHour == 3 || incomingHour == 4){
    console.log('You can sleep for now');
} else if (incomingHour == 5 || incomingHour == 6){
    console.log('Mom, can i sleep little longer?');
} else if (incomingHour == 7 || incomingHour == 8 || incomingHour == 9){
    console.log('Get ready for school');
} else if (incomingHour == 10 || incomingHour == 11 || incomingHour == 12 || incomingHour == 13){
    console.log('Lessons in school');
} else if (incomingHour == 14 || incomingHour == 15 || incomingHour == 16){
    console.log('after school classes');
} else if (incomingHour == 17 || incomingHour == 18 || incomingHour == 19){
    console.log('Going home');
} else if (incomingHour == 20 || incomingHour == 21 || incomingHour ==22 || incomingHour == 23){
    console.log('Hell Yeah!');
}
}



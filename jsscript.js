'use strict';
alert('Загадывание случайного числа от 1 до 100');

const Number = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}
const emptyString = function(str){
    if(str.trim().length === 0){
        return true;
    }
    else return false;
}
const getRandomInt = function(num){
    return Math.floor(Math.random() * num) + 1;
}


const getMessage = function(ans){
    let number = getRandomInt(100);
    console.log(number);
    let numberOfAttempts = 10; 
    const startGame = function(answer){
        while(!Number(+answer)){
            answer = prompt('Введи число! Введите число ещё раз');
            if(answer === null) break;
        }
        if(answer === null){
            alert('Игра окончена');
            return;
        }
        if(numberOfAttempts > 0){
            numberOfAttempts--;
            if(answer > number){
                let newAnswer = prompt('Загаданное число меньше, осталось попыток ' + numberOfAttempts +' Введите число ещё раз');
                if(newAnswer === null){
                    alert('Игра окончена');
                    return;
                }
                startGame(+newAnswer);
            }
            else if(answer < number){
                let newAnswer = prompt('Загаданное число больше, осталось попыток ' + numberOfAttempts +' Введите число ещё раз');
                if(newAnswer === null){
                    alert('Игра окончена');
                    return;
                }
                startGame(+newAnswer);
            }
            if(answer === number){
                alert('Поздравляю, Вы угадали!!! ' + answer);
                let question = confirm('Хотите сыграть ещё');
                if(question === true){
                    numberOfAttempts = 10;
                    let newAnswer = prompt('Введите число');
                    if(newAnswer === null){
                        alert('Игра окончена');
                        return;
                    }
                    getMessage(+newAnswer);
                }
                else{
                    alert('Игра окончена');
                }
            }
        }
        else{
            let question = confirm('Попытки закончились, хотите сыграть еще?');
            if (question === true){
                numberOfAttempts = 10;
                startGame(+ans);
            }
            else{
                alert('Игра окончена');
                console.log('Игра окончена');
            }
        }
    }
    startGame(ans);
}
let start = prompt('Введите число');
if(start){
    getMessage(+start);
}
else{
    alert('Игра окончена');
}
'use strict';
alert('Загадывание случайного числа от 1 до 100');

const Number = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getMessage = function(x){
    let y = 21;
    const func = function(){
        if(x !== 0){
            if(x > 100){
                console.log('Загаданное число меньше');
                x = +prompt('Загаданное число меньше. Введите число ещё раз');
                func();
            }
            else if(x < 1){
                console.log('Загаданное число больше');
                x = +prompt('Загаданное число больше. Введите число ещё раз');
                func();
            } else if(!Number(x)){
                console.log('Введи число!'+  ' x = ' + x + ' '+ typeof(x));
                x = +prompt('Введи число! Введите число ещё раз');
                func();
            } 

            else if(x !== y ){
                if(x > y){
                    x = +prompt('Неверно. Число меньше. Введите число ещё раз');
                }
                else{
                    x = +prompt('Неверно. Число больше. Введите число ещё раз');
                }
                //console.log('Неверно' +  ' x != ' + x + typeof(x));
                //x = +prompt('Неверно. Введите число ещё раз');
                func();
            }
            else if(x === y){
                alert('Поздравляю, Вы угадали!!! ' + x);
                console.log('Поздравляю, Вы угадали!!! ' + x);
            }
        }
        else {
            if(confirm('Хотите закончить игру?') === true){
                alert('Игра окончена');
                console.log('Игра окончена');
            }
            else{
                x = +prompt('Введите число');
                func();
            }
        }

    }
    func();
}
console.log(getMessage(+prompt('Введите число')));
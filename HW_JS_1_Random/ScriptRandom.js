var num = Math.round(Math.random() * 100);
// console.log("Number:", num);

var guessedNum = 0;

for (var count = 0; guessedNum !== num; count++) {
    guessedNum = prompt("Введите число от 0 до 100", '');
    if (guessedNum === null) {
        alert("Выход");
        throw new Error();
    } else if (guessedNum > num) {
        alert("Ваше число больше загаданного");
    } else if (guessedNum < num) {
        alert("Ваше число меньше загаданного");
    }
}
alert("Поздравляем! Вы угадали число за " + count + " попыток!");
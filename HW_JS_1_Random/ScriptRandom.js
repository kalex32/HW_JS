var num = Math.round(Math.random() * 100);
console.log("Number:", num);

var guessedNum = 0;

for (var count = 0; guessedNum != num; count++) {
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
if (count === 1) {
    alert("Поздравляем! Вы угадали число за " + count + " попытку!");
} else if (twoThreeFour([2, 3, 4], count) === 1) {
    alert("Поздравляем! Вы угадали число за " + count + " попытки!");
} else {
    alert("Поздравляем! Вы угадали число за " + count + " попыток!");
}

function twoThreeFour(arr, count) {
    for (var i = 0; i < arr.length; i++) {
        if (count === arr[i]) {
            return 1;
        }
    }
    return 0;
}
var num = Math.round(Math.random()*100);
console.log("Number:", num);

var guessedNum = prompt("Введите число от 0 до 100", '');
if (guessedNum == num){
    alert("Поздравляем!");
}

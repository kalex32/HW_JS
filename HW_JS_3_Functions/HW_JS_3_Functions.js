console.log(isPalindrome("длинношеее"));
console.log(isPalindrome("мадам"));
console.log(isPalindrome("портос"));
console.log(isPalindrome("адаппада"));

function isPalindrome(str) {
    let result = "";
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] === str[str.length - i - 1]) {
            result = "Это палиндром!";
        } else {
            result = "Это не палиндром!";
            return result;
        }
    }
    return result;
}

console.log(ucFirst("вася"));
console.log(ucFirst("пЕТРОВИЧ"));
console.log(ucFirst(""));

function ucFirst(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

function checkSpam(str) {
    let arr = ["viagra", "xxx"];
    for (let i = 0; i < arr.length; i++) {
        if (~str.toLowerCase().indexOf(arr[i])) {
            return true;
        }
    }
    return false;
}

console.log(extractCurrencyValue('$120'));

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log('webmaster', toAlphaBet('webmaster'));

function toAlphaBet(str) {
    let arrChar = str.split('');
    for (let i = 0; i < arrChar.length; i++) {
        for (let j = arrChar.length - 1; j > i; j--) {
            if (arrChar[i] > arrChar[j]) {
                let temp = arrChar[j];
                arrChar[j] = arrChar[i];
                arrChar[i] = temp;
            }
        }
    }
    return arrChar.join('');
}
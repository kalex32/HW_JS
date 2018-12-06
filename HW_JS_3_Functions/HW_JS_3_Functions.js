console.log(isPalindrom("длинношеее"));
console.log(isPalindrom("мадам"));
console.log(isPalindrom("портос"));
console.log(isPalindrom("адаппада"));

function isPalindrom(str) {
    var result = "";
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] === str[str.length - i - 1]) {
            result = "Это палиндром!";
        } else {
            result = "Это не палиндром!";
            return result;

        }
    }
    return result;
}

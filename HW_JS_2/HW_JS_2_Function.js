console.log(array_clone([1, 2, 4, 0]));
console.log(array_clone([1, 2, [4, 0]]));

function array_clone(arr) {
    arr.slice(0)
    return arr;
}

console.log(summ_kv(1, 2, 3, 4));

function summ_kv() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i] *= arguments[i];
    }
    return sum;
}

var arr = new Array(5);
for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100);
}
console.log(arr);
console.log(array_shuffle(arr));

function array_shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = (Math.floor(Math.random() * (i + 1)));
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log([7, 9, 0, -2], unique([7, 9, 0, -2]));
console.log([7, 7, 0, -2], unique([7, 7, 0, -2]));
console.log([7, 9, 9, -2], unique([7, 9, 9, -2]));
console.log([1, 1, 1, 1], unique([1, 1, 1, 1]));

function unique(arr) {
    var newArr = [];
    search:
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < newArr.length; j++) {
                if (newArr[j] == arr[i]) {
                    newArr.splice(j, 1);
                    continue search;
                }
            }
            newArr.push(arr[i]);
        }
    return newArr;
}
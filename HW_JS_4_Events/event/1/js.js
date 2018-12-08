"use strickt"
"use ecmascript 6"
// b.onclick = function () {
//     fun();
// };
//
// document.getElementById("inp").onfocus = function () {
//
// };


//
//var b = document.getElementById('but');
//var b = document.getElementsByTagName("button");

function fun() {

    alert("Я наша функция 1");
    //console.log(this);
    ///console.log(this.getAttribute('id'));
    //alert(this.getAttribute('id'));
    //alert(this.id);

}

function fun2() {

    alert("Я наша функция 2");
}

// b.onclick = fun;


//b.addEventListener('click', fun, false);

//b.addEventListener('click', fun2, false);


//b.removeEventListener('mouseover', fun)

function changeBG() {
    // 1 способ
   // var currentClass = this.classList[1];
   // var nextClass = this.nextElementSibling.classList[1];
   // this.classList.remove(currentClass);
   // this.classList.add(nextClass);
   // this.nextElementSibling.classList.remove(nextClass);
   // this.nextElementSibling.classList.add(currentClass);
   // 2 способ
   //  var color_1 =this.style.background;
   //  var color_2 =this.nextElementSibling.style.background;
   //  this.style.background = color_2;
   //  this.nextElementSibling.style.background = color_1;
   //  3 способ
    var color_1 =getComputedStyle(this).background;
    var color_2 = getComputedStyle(this.nextElementSibling).background;
    this.style.background = color_2;
    this.nextElementSibling.style.background = color_1;
}

var arrBut = document.getElementsByTagName('button');
for(var i = 0; i< arrBut.length; i++){
    arrBut[i].addEventListener('click', changeBG);
}





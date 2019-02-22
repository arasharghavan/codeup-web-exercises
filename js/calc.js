"use strict";

var b1 = document.getElementById("b1");

var inputs = document.getElementsByTagName("input");

var inputChange = function () {
    if (inputs[1].value === "+" ) {
    inputs[2].value += "1";}
    else {inputs[0].value += "1"}

};

b1.addEventListener('click', inputChange, false);

var b2 = document.getElementById("b2");


 inputChange = function () {
    inputs[0].value += "2";
};

b2.addEventListener('click', inputChange, false);

var plus = document.getElementById("plus");


inputChange = function () {
    inputs[1].value = "+";
};

plus.addEventListener('click', inputChange, false);



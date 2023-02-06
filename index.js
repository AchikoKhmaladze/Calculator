"use strict";

const button0 = document.querySelector(".button0");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");
const buttonPlus = document.querySelector(".buttonP");
const buttonMinus = document.querySelector(".buttonM");
const buttonMultiply = document.querySelector(".buttonMult");
const buttonDivide = document.querySelector(".buttonDiv");
const buttonEqual = document.querySelector(".buttonEqual");
const buttonC = document.querySelector(".buttonC");
const display = document.querySelector(".display");

button0.addEventListener("click", function () {
  display.value = display.value + "0";
});

button1.addEventListener("click", function () {
  display.value = display.value + "1";
});

button2.addEventListener("click", function () {
  display.value = display.value + "2";
});

button3.addEventListener("click", function () {
  display.value = display.value + "3";
});

button4.addEventListener("click", function () {
  display.value = display.value + "4";
});

button5.addEventListener("click", function () {
  display.value = display.value + "5";
});

button6.addEventListener("click", function () {
  display.value = display.value + "6";
});

button7.addEventListener("click", function () {
  display.value = display.value + "7";
});

button8.addEventListener("click", function () {
  display.value = display.value + "8";
});

button9.addEventListener("click", function () {
  display.value = display.value + "9";
});

buttonC.addEventListener("click", function () {
  display.value = "";
});

buttonPlus.addEventListener("click", function () {
  display.value = display.value + "+";
});

buttonMinus.addEventListener("click", function () {
  display.value = display.value + "-";
});

buttonEqual.addEventListener("click", function () {
  display.value = eval(display.value);
});

buttonMultiply.addEventListener("click", function () {
  display.value = display.value + "*";
});

buttonDivide.addEventListener("click", function () {
  display.value = display.value + "/";
});


document.addEventListener("keydown", (e) => {
  if (e.key === "0") {
    display.value = display.value + "0";
  } else if (e.key === "1") {
    display.value = display.value + "1";
  } else if (e.key === "2") {
    display.value = display.value + "2";
  } else if (e.key === "3") {
    display.value = display.value + "3";
  } else if (e.key === "4") {
    display.value = display.value + "4";
  } else if (e.key === "5") {
    display.value = display.value + "5";
  } else if (e.key === "6") {
    display.value = display.value + "6";
  } else if (e.key === "7") {
    display.value = display.value + "7";
  } else if (e.key === "8") {
    display.value = display.value + "8";
  } else if (e.key === "9") {
    display.value = display.value + "9";
  } else if (e.key === "*") {
    display.value = display.value + "*";
  } else if (e.key === "/") {
    display.value = display.value + "/";
  } else if (e.key === "+") {
    display.value = display.value + "+";
  } else if (e.key === "-") {
    display.value = display.value + "-";
  } else if (e.key === "Enter") {
    display.value = eval(display.value);
  } else if (e.key === "c") {
    display.value = "";
  }
});

"use strict";

const allBtns = document.querySelectorAll(".btn");
const percentage = document.querySelector(".percent");
const eraseEverything = document.querySelector(".c");
const del = document.querySelector(".delete");
const substract = document.querySelector(".substract");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const plusMinus = document.querySelector(".plusMinus");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const displayPanel = document.querySelector(".display");
const operateNums = document.querySelector(".operate");
const historyNums = document.querySelector(".history");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function display() {
	allBtns.forEach(btn => {
		btn.addEventListener("click", e => {
			operateNums.innerHTML = e.target.textContent;
		});
	});
}
display();
function addNums() {}
addNums();
function substractNums() {}
function divideNums() {}
function multiplyNums() {}
function equalNums() {}

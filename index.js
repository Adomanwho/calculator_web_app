import * as Calc from './calculation_functions/calculations.js';

const calcField = document.getElementById('calculation');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const divided = document.getElementById('divided');
const dot = document.getElementById('dot');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');



zero.addEventListener('click', ()=>{calcField.value += '0'});
one.addEventListener('click', ()=>{calcField.value += '1'});
two.addEventListener('click', ()=>{calcField.value += '2'});
three.addEventListener('click', ()=>{calcField.value += '3'});
four.addEventListener('click', ()=>{calcField.value += '4'});
five.addEventListener('click', ()=>{calcField.value += '5'});
six.addEventListener('click', ()=>{calcField.value += '6'});
seven.addEventListener('click', ()=>{calcField.value += '7'});
eight.addEventListener('click', ()=>{calcField.value += '8'});
nine.addEventListener('click', ()=>{calcField.value += '9'});

plus.addEventListener('click', ()=>{Calc.checkIfOperationIsViable(calcField.value) ? calcField.value += '+' : calcField.value += ''});
minus.addEventListener('click', ()=>{(Calc.checkIfMinusIsViable(calcField.value) ? calcField.value += '-' : calcField.value += '')});
times.addEventListener('click', ()=>{(Calc.checkIfOperationIsViable(calcField.value) ? calcField.value += '*' : calcField.value += '')});
divided.addEventListener('click', ()=>{(Calc.checkIfOperationIsViable(calcField.value) ? calcField.value += '/' : calcField.value += '')});
dot.addEventListener('click', ()=>{(Calc.checkIfOperationIsViable(calcField.value) ? calcField.value += '.' : calcField.value += '')});

clear.addEventListener('click', ()=>{calcField.value = ''});
equals.addEventListener('click', ()=>{calcField.value = Calc.calculate(calcField.value)})
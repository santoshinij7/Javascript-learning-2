/*
//ACTIVATING STRICT NODE
'use strict';

let hasDriverLicense = false;
const passTest =  true;
if(passTest) hasDriverLicense = true; 
if(hasDriverLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private  = 534;

function logger(){
    console.log('My name is Lucky');
}
//calling /running / invoking function
logger();
logger();
logger();
function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number ('23');
*/

//FUNCTION DECLARATIONS VS EXPRESSIONS:

function calcAge1(birthYear){
    return 2037 - birthYear;
}
calcAge1(1998);
console.log(birthyear);
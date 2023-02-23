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

//FUNCTION DECLARATIONS VS EXPRESSIONS:

function calcAge1(birthYear){
    return 2023 - birthYear;
}
const age1 = calcAge1(1998);
console.log(age1);

const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}
const age2 = calcAge2(1999);
console.log(age1,age2);

const calcAge2 = function(birthYear){
    return 2037- birthYear;
}
//ARROW FUNCTION
const calcAge3 = birthYear => 2037-birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'lucky'));
console.log(yearsUntilRetirement(1980, 'lucy'));

//FUNCTION CALLING AND OTHER FUNCTION
function cutFruitPieces(fruit){
    return fruit*4;
}
function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2,3));

//REVIEWING FUNCTIONS
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear,firstName){
    const age = calcAge(birthYear);
    const retirement = 65- age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} retires in ${retirement} years`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'lucky'));
console.log(yearsUntilRetirement(1950, 'lucy'));

//CODING CHALLENGE
//TEST - 1:
const calcAverage = (a,b,c) =>(a+b+c)/3;
console.log(calcAverage(3,4,5));

let ScoreDolphins = calcAverage(44,23,71);
let ScoreKobals = calcAverage(65,54,49);
console.log(ScoreDolphins,ScoreKobals);

const checkWinner = function(avgDolphins, avgKobals){
    if(avgDolphins>= 2 * avgKobals){
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKobals})`);
    } else if(avgKobals >= 2* avgDolphins){
        console.log(`kobals win 🏆 (${avgKobals} vs. ${avgDolphins})`);
    }else{
        console.log('No team wins...')
    }
}
checkWinner(ScoreDolphins, ScoreKobals);
checkWinner(576,111); 

//TEST 2:
ScoreDolphins = calcAverage(85,54,41);
ScoreKobals = calcAverage(23,34,27);
console.log(ScoreDolphins,ScoreKobals);
checkWinner(ScoreDolphins, ScoreKobals);
*/


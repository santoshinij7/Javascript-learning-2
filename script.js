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

//{{{{{INTRODUCTION TO ARRAYS}}}}}
const friend1 = 'Michael';
const friend2 = 'steven';
const friend3 = 'peter';
const friends = ['Michael','steven','peter'];
console.log(friends);
const years = new Array(1991,1984,2008,2020);

console.log(friends [0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jaya';
console.log(friends);
// friends = ['bob' , 'Alice']
const firstName = 'lucky';
const lucky = ['lucky', 'jena', 2023-1998,'student',friends];
console.log(lucky);
console.log(lucky.length);

//EXERCISE
const calcAge = function (birthYear){
    return 2023 - birthYear;
}
const years = [1990, 1967 ,2002 ,2010 ,2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);

const friends = ['Michael','steven','peter'];
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop();//last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();//first
console.log(friends);

friends.push(23);
console.log(friends.includes('steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
if(friends.includes('steven')){
    console.log('You have a friend called peter');
}
*/
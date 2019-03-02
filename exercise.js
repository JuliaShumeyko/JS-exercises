// JS exercises

const firstName = "Julia";
const lastName = "Shumeyko";
let maritalStatus = "single";
let country = "Finland";
let age = 30;
const personalInfo =
  "I am " +
  firstName +
  " " +
  lastName +
  ". " +
  "I am " +
  maritalStatus +
  " and I live in " +
  country +
  ". ";
let myAge = 30;
let yourAge = 31;
console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof maritalStatus);
console.log(typeof country);
console.log(typeof myAge);
console.log(typeof yourAge);
var company = "Integrify Academy";
console.log(company);
console.log(company.length);
console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.slice(0, 9));
console.log(company.includes("Academy"));
console.log(company.split(" ", 2));
let companies = "Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon";
console.log(companies);
let array = companies.split(",", 7);
console.log(`The list of companies: ${array}`);
console.log(company.replace("Integrify", "Microsoft"));
console.log(company.charAt(10));
console.log(company.charCodeAt(10));
console.log(company.indexOf("e"));
console.log(company.lastIndexOf("e"));
const companyWithSpaces = " Integrify Academy ";
console.log(companyWithSpaces.trim());
console.log(company.startsWith("I"));
console.log(company.endsWith("y"));
console.log(company.match("a"));
var firstWord = "Integrify ";
var secondWord = "Academy";
console.log(firstWord.concat(secondWord));
console.log(company.repeat(5));
console.log(company == "Integrify Academy");
console.log(myAge != 21);
console.log(yourAge >= 30);
console.log(company.length === 30);
console.log(company.indexOf("n") > 15);
console.log(company.charAt(1) == "t");
let operandOne = 4;
let operandTwo = 3;
console.log(operandOne * operandTwo);
console.log(operandTwo - operandOne);
console.log(operandOne % operandTwo);
console.log(++operandOne);
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
// var age = prompt('Enter your age.');
// var yourAge = prompt('Enter your age.')
if (age >= 18) {
  console.log(`You are old enough to drive.`);
} else {
  console.log(`You will be able to drive in ${18 - age} years.`);
}
if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} older than me.`);
} else if (yourAge == myAge) {
  console.log(`You are the same age as me.`);
} else {
  console.log(`You are ${myAge - yourAge} years younger than me.`);
}

let a = 4;
let b = 3;
a > b ? console.log(`a is greater than b`) : console.log(`a is smaller than b`);
var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
const companyOneUpper = itCompanies[0].toUpperCase();
console.log(companyOneUpper);
const companyTwoUpper = itCompanies[1].toUpperCase();
console.log(companyTwoUpper);
const companyThreeUpper = itCompanies[2].toUpperCase();
console.log(companyThreeUpper);
const companyFourUpper = itCompanies[3].toUpperCase();
console.log(companyFourUpper);
const companyFiveUpper = itCompanies[4].toUpperCase();
console.log(companyFiveUpper);
const companySixUpper = itCompanies[5].toUpperCase();
console.log(companySixUpper);
const companySevenUpper = itCompanies[6].toUpperCase();
console.log(companySevenUpper);
console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${
    itCompanies[3]
  }, ${itCompanies[4]}, ${itCompanies[5]} and ${
    itCompanies[6]
  } are big IT companies.`
);
console.log(itCompanies.sort());
console.log(itCompanies.reverse());

for (i = 0; i < 11; i++) {
  console.log(i);
}

var i = 0;
while (i < 11) {
  console.log(i);
  i++;
}

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 11);

for (i = 10; i >= 0; i--) {
  console.log(i);
}

var i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

var i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

for (var i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

/* if (itCompanies.includes('Facebook')) {
     console.log
 } */

// function checkCompany(company,itCompanies){

//     console.log(`Company not in the list.`)

var company = "Integrify";
var i = 0;
while (i < itCompanies.length && company !== itCompanies[i]) {
  i++;
}
if (company == itCompanies[i]) {
  console.log(`${company} is on the list.`);
} else {
  console.log(`${company} is not on the list.`);
}

var company = "Integrify";
var i = 0;
while (i < itCompanies.length && company !== itCompanies[i]) {
  i++;
}
if (company == itCompanies[i]) {
  console.log(`${company} is on the list.`);
} else {
  console.log(`${company} is not on the list.`);
}


(function filterCompanies() {
    var companiesWithManyOs = [];
    for (var i = 0; i < itCompanies.length; i++) {
        var companyChar = itCompanies[i].toLowerCase().split("");
        var count = 0;
        for (var j = 0; j < companyChar.length; j++) {
            if (companyChar[j] == "o") {
                count++;
            }
        }
        if (count >= 2) {
            companiesWithManyOs.push(itCompanies[i]);
        }
    }
    console.log(`${companiesWithManyOs} have two or more 'o'.`);
})(); // added parenthesis around the function for self-invoke

// Filtering companies with more than two o's (another way)

for (i=0; i < companies.length; i++) {
  if (companies[i].indexOf('o') != companies[i].lastIndexOf('o')) {
    console.log(companies[i]);
  }
  console.log('index of result', companies[i].indexOf('o'));
  console.log('last index of result', companies[i].lastIndexOf('o'));
}


// var firstName = 'Julia';
// var lastName = 'Shumeyko';
// function fullName() {
//   return firstName + ' ' + lastName;
// }
// console.log(fullName());

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('Julia', 'Shumeyko'));

function addNumbers(a,b) {
    return a + b;
}
console.log(addNumbers(12, 10));

function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(14, 10));

function perimeterOfRectangle(length, width) {
  return 2*(length + width);
}
console.log(perimeterOfRectangle(14, 10));

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log(volumeOfRectPrism(14, 10, 5));

function density(mass, volume) {
  return mass * volume;
}
console.log(density(10, 35));

function weight(mass, gravity) {
  return mass * gravity;
}
console.log(density(10, 9.81));

function bmi(weight, height) {
  return weight / height**2;
}
console.log(bmi(46, 1.69));

// slice out a part of the sentence

let sentence = 'You cannot end a sentence with because because because is a conjunction';
let firstPosition = sentence.indexOf('because');
let lastPosition = sentence.lastIndexOf('because') + 'because'.length;
console.log(sentence.substring(firstPosition, lastPosition));


// f(x) = ax + b

function solveLinEquation(a, b, y) {
  return (y-b)/a;
}
console.log(solveLinEquation(5, 6, 16));

// f(x) = ax2 + bx + c

function solveQuadEquation(a, b, c) {
  var discr = b**2 - 4 * a * c;
  if (discr < 0) {
    console.log('The equation has no solutions.')
  } else if (discr === 0) {
    var sol = -b / (2 * a);
    console.log(`The solution is ${sol}.`);
  } else {
    var solOne = (-b + Math.sqrt(discr)) / (2 * a);
    var solTwo = (-b - Math.sqrt(discr)) / (2 * a);
    console.log(`Two solutions are ${solOne} and ${solTwo}.`)
  }
}
solveQuadEquation(1, 3, -4);


function printArray(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray(['something', 'and something else', 'and this one too']);

function reverseArray(arr) {
  for (i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
reverseArray(['something', 'and something else', 'and this one too']);

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i].toUpperCase());
  }
}
capitalizeArray(['something', 'and something else', 'and this one too']);

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

arr = ['duck', 'goose', 'crow', 'raven'];
function addItem(item) {
  arr[arr.length] = item;
  console.log(arr);
}
addItem('turkey');

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item


function removeItem(index) {
  arr = ['duck', 'goose', 'crow', 'raven'];
for(var i = 0; i < arr.length-1; i++){ 
   if (i === index) {
    arr.splice(i, 1)
    console.log(arr); 
   }
}
}
removeItem(1);

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(number) {
  var sum = 0;
  for (var i = 0; i <= number; i++) {
    sum += i ;
  }
  console.log(sum);
}
sumOfNumbers(9);

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(number) {
  var sumOdd = 0;
  for (var i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      sumOdd += i;
    }
  }
  console.log(sumOdd);
}
sumOfOdds(9);

function sumOfEvens(number) {
  var sumEven = 0;
  for (var i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      sumEven += i;
    }
    console.log(sumEven);
  }
}
sumOfOdds(9);

// Declare a function name evensAndOdds. It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(number) {
  var sumOfEven = 0;
  var sumOfOdd = 0;
  for (var i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      sumOfEven += 1;
    } else {
      sumOfOdd += 1;
    }
  }
  console.log(`The number of odds is ${sumOfOdd}. \nThe number of evens is ${sumOfEven}.`);
}
evensAndOdds(100);

// Write a funcition which takes any number of arguments and returns the sum of the arguments

function sumOfArg(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  console.log(sum);
}
sumOfArg([1, 2, 3]);

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number.

// Math.floor(Math.random() * 10); - to generate a random number between 0 and 10

function randomHexaNumberGenerator() {
  var hexaNumber = '#';
  var possible = "abcdef0123456789";
  for (i = 0; i < 6; i++) {
    hexaNumber += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  console.log(hexaNumber);
}
randomHexaNumberGenerator();

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator() {
  var id = '';
  var possible = "abcdefjhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (i = 0; i < 7; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  console.log(id);
}
  userIdGenerator();

// Modify question number n. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser () {
  var numOfChar = prompt('How many characters would you like the ID to have?');       
  var numOfIds = prompt('How many IDs would you like me to generate?');
  var possible = "abcdefjhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var idList = [];
  while (numOfIds >= 0) {
  var id = '';
  for (i = 0; i < numOfChar; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));   
  }
  idList[idList.length] = id;
  numOfIds--;
}
  console.log(idList);
}
// userIdGeneratedByUser(); commented out to not call

// Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
  var colorOne = Math.floor(Math.random() * 256);
  var colorTwo = Math.floor(Math.random() * 256);
  var colorThree = Math.floor(Math.random() * 256);
  console.log(`rgb(${colorOne},${colorTwo},${colorThree})`);
}
rgbColorGenerator();

// Use the new Date() object to get month, date, year, hour and minute.

console.log(Date());

// Write a function name displayDateTime which display time in this format: 28/08/2018 04:08

function displayDateAndTime() {

  var date = new Date();
  
  console.log(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes());
}

displayDateAndTime();

// Call your function factorial, it takes a whole number as a parameter and it returns a factorial of the number

(function factorial(num) {
  var prod = 1;
  for (i = num; i > 0; i--) {
    prod = prod * i;    
  }
  console.log(prod);
})(170);

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(val) {
  val === undefined || val == null || val.length <= 0 ? console.log('empty') : console.log('not empty');
}
isEmpty();

// Call your function sum, it takes any number of arguments and it returns the sum.

function sumOfArg(...arg) {
  var sum = 0;
  for (var i = 0; i < arg.length; i++) {
      sum += arg[i];
  }
  console.log(sum);
}
sumOfArg(1, 2, 3, 4, 10);

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArg(arr) {
  var sum = 0;
  
  for (var i = 0; i < arr.length; i++) {
    typeof arr[i] === 'number' ? sum += arr[i] : console.log('At least one of the arguments passed is not a number');
  }
  console.log(sum);
}
sumOfArg([1, 2, 'five']);

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(arr) {

  var currentIndex = arr.length;
  var temporaryValue;
  var randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  console.log(arr);
}

shuffleArray(['goat', 'sheep', 'cow', 'donkey']);

// Write a function called average, it takes an array parameter and returns the average the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    typeof arr[i] === 'number' ? sum += arr[i] : console.log('At least one of the arguments passed is not a number');
  }
  console.log(sum / arr.length);
}
average([5, 1, 6, 16]);

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

function modifyArray(arr) {
  if (arr.length < 5) {
    console.log('Item not found');
  } else {
    arr[4] = arr[4].toUpperCase();
    console.log(arr);
  }
}
modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Orange']);

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncomes, totalExpenses, acountInfo,addIncome, addExpence and accountBalance methods. Incomes is a set of incomes and its description and the same for expenses.

// const personAccount = {
//   firstName: 'Julia',
//   lastName: 'Shumeyko',
//   incomes: [{description: mansion, amount: 1000000}, {description: investment, amount: 2000000}],
//   expenses: [{description: yachtMaintenance, amount: 1000000}, {description: champagne, amount: 12000}, {description: vodka, amount: 15000}, {description: caviar, amount: 5000}],
//   totalIncomes: function(){},
//   totalExpenses: function(){},
//   accountInfo: function(){},
//   addIncome: function(){},
//   addExpense: function(){},
//   accountBalance: function(){}
// }

// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let pattern = /[0-9+]/;
function calcIncome(text){
  text = text.split(' ');
  var income;
  var arr = [];
  for (i = 0; i < text.length; i++) {
    if (text[i].match(pattern)) {
      text[i] = Number(text[i]);
      arr.push(text[i]);
    }
    income = (arr[0] + arr[2])*12 + arr[1];
  }
  console.log(income);
}
calcIncome('He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.');


// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

var arr = ['spray', 10,'limit', 'elite', 'exuberant', 7, 'destruction', 'present'];
const result = arr.filter(item => typeof item === 'string');
console.log(result);

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array from slack).

const countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Anguilla','Antigua &amp; Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas'
  ,'Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia &amp; Herzegovina','Botswana','Brazil','British Virgin Islands'
  ,'Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Chad','Chile','China','Colombia','Congo','Cook Islands','Costa Rica'
  ,'Cote D Ivoire','Croatia','Cruise Ship','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea'
  ,'Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Polynesia','French West Indies','Gabon','Gambia','Georgia','Germany','Ghana'
  ,'Gibraltar','Greece','Greenland','Grenada','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India'
  ,'Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kuwait','Kyrgyz Republic','Laos','Latvia'
  ,'Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Mauritania'
  ,'Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Namibia','Nepal','Netherlands','Netherlands Antilles','New Caledonia'
  ,'New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal'
  ,'Puerto Rico','Qatar','Reunion','Romania','Russia','Rwanda','Saint Pierre &amp; Miquelon','Samoa','San Marino','Satellite','Saudi Arabia','Senegal','Serbia','Seychelles'
  ,'Sierra Leone','Singapore','Slovakia','Slovenia','South Africa','South Korea','Spain','Sri Lanka','St Kitts &amp; Nevis','St Lucia','St Vincent','St. Lucia','Sudan'
  ,'Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor L’Este','Togo','Tonga','Trinidad &amp; Tobago','Tunisia'
  ,'Turkey','Turkmenistan','Turks &amp; Caicos','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Minor Outlying Islands','Uruguay'
  ,'Uzbekistan','Venezuela','Vietnam','Virgin Islands (US)','Yemen','Zambia','Zimbabwe'];

  function categorizeCountries(arr) {
    let pattern = /ia$/;
    foundItems = arr.filter(item => item.match(pattern));
    console.log(foundItems);
  }
  categorizeCountries(countries);

  // Declare a getFirstTenCountries function and return an array of ten countries

  function getFirstTenCountries(arr) {
    console.log(arr.slice(0, 10));
  }
  getFirstTenCountries(countries);

  // Declare a getLastTenCountries function and return an array of ten countries

  function getLastTenCountries(arr) {
    console.log(arr.slice(-10));
  }
  getLastTenCountries(countries);

  // Find out with which letter are there many countries

  function categorizeCountries(arr) {
    a = arr.filter(item => item.match(/^A/));
    b = arr.filter(item => item.match(/^B/));
    c = arr.filter(item => item.match(/^C/));
    d = arr.filter(item => item.match(/^D/));
    e = arr.filter(item => item.match(/^E/));
    f = arr.filter(item => item.match(/^F/));
    g = arr.filter(item => item.match(/^G/));
    h = arr.filter(item => item.match(/^H/));
    i = arr.filter(item => item.match(/^I/));
    j = arr.filter(item => item.match(/^J/));
    k = arr.filter(item => item.match(/^K/));
    l = arr.filter(item => item.match(/^L/));
    m = arr.filter(item => item.match(/^M/));
    n = arr.filter(item => item.match(/^N/));
    o = arr.filter(item => item.match(/^O/));
    p = arr.filter(item => item.match(/^P/));
    q = arr.filter(item => item.match(/^Q/));
    r = arr.filter(item => item.match(/^R/));
    s = arr.filter(item => item.match(/^S/));
    t = arr.filter(item => item.match(/^T/));
    u = arr.filter(item => item.match(/^U/));
    v = arr.filter(item => item.match(/^V/));
    w = arr.filter(item => item.match(/^W/));
    x = arr.filter(item => item.match(/^X/));
    y = arr.filter(item => item.match(/^Y/));
    z = arr.filter(item => item.match(/^Z/));
    let sortArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
    var longest = 0;
    for (i = 0; i < sortArr.length; i++) {
      if (sortArr[i].length > longest) {
        longest = sortArr[i].length;
        longestItem = sortArr[i];
      }
    }
    console.log('The most countries begin with the letter ' + longestItem[0].charAt(0) + ' and the amount of countries is ' + longestItem.length);
  }
  categorizeCountries(countries);



// //  Guess The Number game
 
//   var highNum = prompt('What is the highest possible number?');
//   var num = Math.floor(Math.random() * highNum);
//   i = 0;
//   var amountOfGuesses = Math.floor(highNum * 0.1);
  
//   if (amountOfGuesses < 3) {
//     amountOfGuesses = 3;
  
//   while (i < amountOfGuesses) {
//     // var guessNum = document.getElementById('num').value;
//     if (guessNum == num) {
//       alert(`Congrats! You guessed right! You used ${i+1} tries.`);
//       break;
//     } else if (guessNum > num) {
//       alert('Sorry, that is not it. Try a smaller number.');
//     } else {
//       alert('Sorry, that is not it. Try a bigger number.');
//     }
//     i++;
//   }
//   alert('Game Over');
//   } else {
//     while (i < amountOfGuesses) {
//       var guess = prompt('What is your guess?');
//       if (guessNum == num) {
//         alert(`Congrats! You guessed right! You used ${i+1} tries.`);
//         break;
//       } else if (guessNum > num) {
//         alert('Sorry, that is not it. Try a smaller number.');
//       } else {
//         alert('Sorry, that is not it. Try a bigger number.');
//       }
//       i++;
//     }
//     alert('Game Over');
//   }


  // The hangman Game

  // var words = ['dinosaur', 'pony', 'morning', 'mermaid', 'warmth', 'courage', 'vodka', 'goose', 'avocado', 'infinity', 'seagull', 'bubble'];
  // var word = words[Math.floor(Math.random() * words.length)];
  // var answerArr = [];
  // for (i = 0; i < word.length; i++) {
  //   answerArr[i] = '_';
  // }
  // var remainingLetters = word.length;
  // while (remainingLetters > 0) {
  //   alert(answerArr.join(' '));
  //   var guess = prompt('Guess a letter or click Cancel if you are boring and want to stop playing this awesome game');
  //   if (guess === null) {
  //     break;
  //   } else if (guess.length !== 1) {
  //     alert('No cheating! You can only guess one letter at a time.');
  //   } else {
  //     for (j = 0; j < word.length; j++) {
  //       if (word[j] === guess) {
  //         answerArr[j] = guess;
  //         remainingLetters--;
  //       }
  //     }
  //   }


  // }
  // alert(answerArr.join(' '));
  // alert(`Well done! The answer was ${word}`);

  // Loop

  let hashArr = '';
  for (i = 0; i < 7; i++) {
    hashArr += '#';
    console.log(hashArr);
  }
  

  // Write a function called *isPrime, which checks if a number is prime number.

function isPrime(num) {

  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isPrime(7));


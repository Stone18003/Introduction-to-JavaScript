/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

   HINT: no function required
*/
const votingAge = 22; // sets votingAge to 22 
if (votingAge >= 18) { //  votingAge has to be greater than or equal to 18 to be true, or else it will be false
    console.log(true);
}

/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/
let variable1 = 1;
let variable2 = 2;
if (variable2 === 2) { // since variable2 does equal 2, the new value for variable1 will be logged
    variable1 = 3;
    console.log(variable1);
}


/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/
let stringValue = '1999';
let numValue = parseInt(stringValue, 10); // best practice is to always pass the radix, decimal system uses a radix of 10
if (numValue === 1999) {
    console.log(numValue)
} else {
    console.error('Did not get expected result');
}



/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 4));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(age) {
    return age * 7;
}

console.log(dogYears(11));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/

function hungryDog(weightInPounds, ageInYears) {
    if (ageInYears >= 1) {
        if (weightInPounds > 15) {
            return weightInPounds * .02;
        } else if (weightInPounds > 10) {
            return weightInPounds * .03;
        } else if (weightInPounds > 5) {
            return weightInPounds * .04;
        } else {
            return weightInPounds * .05;
        }
    } else { //Young dog
        if (ageInYears >= 7 / 12) { //7 months is 7/12
            return weightInPounds * .04;
        } else if (ageInYears >= 4 / 12) {
            return weightInPounds * .05;
        } else {
            return weightInPounds * .1;
        }

    }
}

console.log(hungryDog(15, 1));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/
let comChoice = Math.floor(Math.random() * 3.0); //assign 0, 1, or 2. Math.floor returns the largest integer less than or equal to a given number.

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

function game(userChoice, computerChoice) {
    //console.log('userChoice=' + userChoice + ' computerChoice=' + computerChoice);
    //console.log('rock=0, paper=1, scissors=2');
    if (userChoice === computerChoice) {
        return `it's a tie`;
    } else if (userChoice === rock && computerChoice === scissors) {
        return 'you win!';
    } else if (userChoice === paper && computerChoice === rock) {
        return 'you win!';
    } else if (userChoice === scissors && computerChoice === paper) {
        return 'you win!';
    } else {
        return 'you lose!';
    }
}
if (comChoice === 0) {
    console.log(game(paper, rock));
} else if (comChoice === 1) {
    console.log(game(paper, paper));
} else {
    console.log(game(paper, scissors));
}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(km) {
    return km * 0.621371;
}

console.log(miles(5));

//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of feet
  2. Convert the number of feet to centimeters
  3. Return number of centimeters
*/

function feet(cm) {
    return cm / 30.48;
}

console.log(feet(10));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

function annoyingSong(number) {
    return `${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number-1} bottles of soda on the wall`;
    /*
    while (number > 0) {
    console.log(`${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number-1} bottles of soda on the wall`);
    number--; // decreases number 1
    }
    */

}
console.log(annoyingSong(5));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/

function grade(score) {
    if (score >= 90) {
        return 'you got a A';
    } else if (score >= 80) {
        return 'you got a B';
    } else if (score >= 70) {
        return 'you got a C';
    } else if (score >= 60) {
        return 'you got a D';
    } else {
        return 'you got a F';
    }
}

console.log(grade(100));



/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/
let lowerVowels = ['a', 'e', 'i', 'o', 'u'];

function vowelCounter(word) {
    let lowerWord = word.toLowerCase();
    console.log(lowerWord);
    let count = 0;
    for (let index = 0; index < lowerWord.length; index++) {
        const lowerLetter = lowerWord[index];
        if (lowerVowels.includes(lowerLetter)) {
            count++;
        }

    }
    return count;
}
console.log(vowelCounter('cool sEntEncE'));
/*
let myArray = ['H', 'E', 'L', 'L', 'O'];
let myString = 'HELLO';
let myNumber = 12345;
console.log(myArray[1]);
console.log(myString[1]);
console.log(myNumber[1]); // this should error out because numbers don't have index accessors.
*/
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo() {
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default {
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
// WAP to check whether two numbers are equal or not
// WAP to check whether a person can vote or not

// WAP to check whether a number is divisible by 2 and 3
// WAP to check whether a year is leap year or not

// WAP to print day name when used enter a day number
// WAP to print number of days in a month  when user enter month number
// WAP to make a simple calculator
// WAP to check whether an entered character is lower case vowel, lower case consonant, upper case vowel, upper case consonant, digit, space or any special Character

// WAP to print sum of Even and Odd Numbers in specific Range
// WAP to print factorial of any specific number
// WAP to check whether a number is perfect number or not(6,28,496,8128)
// WAP to check whether a number is prime number or not

// WAP to calculate sum of even and odd digits of a specific number
// WAP to count even and odd digits in a number

// WAP to reverse a number
// WAP to check whether a number is NEON number or not
//     (1,9)
// WAP to check whether a number is Armstrong number or not
//     (1,153,370,371,407)
// WAP to check whether a number is Palindrome Number or not
//     (121,1234321)
// WAP to check whether a number is Magical Number or not
//     (81,1458,1729)

// Function

// WAP to check whether two numbers are equal or not

// function twoNumber(a,b){
//   return (a===b);
// }
// function Print(a,b){
//   let res = twoNumber(a,b);
//   res ? console.log(`Both number a and b are equal`) : console.log(`Both number a and b are not equal`)
// }
// Print(2,3)
// Print(5,5)
// Print(-5,-5)

// WAP to check whether a person can vote or not

// function validate(age) {
//   var ans = "not eigible";
//   if (age >= 18) {
//     ans = "eligible";
//   }
//   console.log(`You are ${ans} for Vote`);
// }

// validate(12);
// validate(18);
// validate(35);
// validate(0);

// WAP to check whether a number is divisible by 2 and 3

// function isdivisible(num){
//   if((num%2==0) && (num%3==0)){
//     console.log(`${num} is divisible by 2 and 3`)
//   }
// }
// isdivisible(45)
// isdivisible(2)
// isdivisible(3)
// isdivisible(12)
// isdivisible(13)
// isdivisible(1)
// isdivisible(0)

// WAP to check whether a year is leap year or not

// function isYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
// function print(year){
//   let res = isYear(year)
//   return res ? console.log(`${year} is Leap Year`) : console.log(`${year} is Not a Lear Year`);
// }

// print(2000)
// print(2021)
// print(2023)
// print(2024)

// WAP to print day name when used enter a day number

// function printDay(num) {
//   switch (num) {
//     case 1:
//       console.log(`Monday`);
//       break;
//     case 2:
//       console.log(`Tuesday`);
//       break;
//     case 3:
//       console.log(`Wednesday`);
//       break;
//     case 4:
//       console.log(`Thursday`);
//       break;
//     case 5:
//       console.log(`Friday`);
//       break;
//     case 6:
//       console.log(`Saturday`);
//       break;
//     case 7:
//       console.log(`Sunday`);
//       break;
//     default:
//       console.log(`Invalid Choice`);
//   }
// }

// printDay(4);
// printDay(7);
// printDay(3);
// printDay(9);

// WAP to print number of days in a month  when user enter month number

// function numberofDaysInMonth(num){
//   let n = num;
//   if(n >= 1 && n <=12){
//     if(n == 2){
//       console.log(`28/29 Days in Month of ${n}`)
//     }
//     else if(n == 4 || n==6 || n== 9 || n == 11){
//       console.log(`30 Days in Month of ${n}`)
//     }
//     else{
//       console.log(`31 Days in Month of ${n}`)
//     }
//   }
//   else{
//     console.log(`Invalid Month.`)
//   }
// }
// numberofDaysInMonth(5)
// numberofDaysInMonth(1)
// numberofDaysInMonth(2)
// numberofDaysInMonth(13)
// numberofDaysInMonth(11)

// WAP to make a simple calculator

// function calculator(a, b, op) {
//   if (op == "+") {
//     console.log(`Addition = ${a + b}`);
//   } else if (op == "-") {
//     console.log(`Subtract = ${a - b}`);
//   } else if (op == "*") {
//     console.log(`Multiple = ${a * b}`);
//   } else if (op == "/") {
//     console.log(`divide = ${a / b}`);
//   }
// }
// let sum = "+";
// let mul = "*";
// let sub = "-";
// let div = "/";
// calculator(2, 3, sum);
// calculator(2, 3, mul);
// calculator(2, 3, sub);
// calculator(2, 3, div);

// WAP to check whether an entered character is lower case vowel, lower case consonant, upper case vowel, upper case consonant, digit, space or any special Character

// function isCheckChar(char) {
//   if (char.length !== 1) {
//     console.log();
//     return;
//   } else {
//     if (char >= "a" && char <= "z") {
//       if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
//         console.log(`'${char}' is Lower Case Vowel`);
//       else console.log(`'${char}' is Lower Case Consonant`);
//     } else if (char >= "A" && char <= "Z") {
//       if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U")
//         console.log(`'${char}' is Upper Case Vowel`);
//       else console.log(`'${char}' is Upper Case Consonant`);
//     } else if (char >= "0" && char <= "9") console.log(`'${char}' is a Digit`);
//     else if (char == " ") console.log(`'${char}' is a Space`);
//     else console.log(`'${char}' is a Special Character`);
//   }
// }
// isCheckChar("c");
// isCheckChar(" ");
// isCheckChar("G");
// isCheckChar("h");

// 1. WAP to print Even and Odd Numbers in specific Range

// function isEvenOdd(num1,num2){
//  let even = [];
//  let odd = [];
//   while(num1<=num2){
//     if((num1&1)==0){
//       even.push(num1)
//       // console.log(`Even number : ${num1}`)
//     }
//     else{
//       odd.push(num1)
//       // console.log(`Odd number : ${num1}`)
//     }
//     num1++;
//   }
//   console.log(`Even number : ${even}`)
//   console.log(`Odd number : ${odd}`)
// }

// isEvenOdd(2,15)

// 2. WAP to print factorial of any specific number

// function factorial(s, e) {
//   let res = [];
//   if (s <= 0) {
//     res.push(0);
//     return res;
//   }
//   for (let i = s; i <= e; i++) {
//     let num = i;
//     let fact = 1;
//     while (num != 0) {
//       fact = fact * num;
//       num--;
//     }
//     res.push(fact);
//   }
//   return res;
// }

// function printFact(start,end){
//   let res = factorial(start,end);
//   console.log(`Factorial from ${start} to ${end} numbers : ${res}`);
// }
// printFact(2,5);

// 3. WAP to check whether a number is perfect number or not(6,28,496,8128)

// Perfect number = {6,28,496}
// divisor of 6 are (1,2,3) except - include itself(6)
// 6 = 1 + 2 + 3
// 6 = 6 perfect number

// function perfectNumber(num) {
//   let flag = false;
//   if (num > 0 || num > 1) {
//     console.log(`Not a perfect num : ${num}`);
//     return flag;
//   }
//   let sum = 1;
//   let i = 2;
//   let n = num;
//   console.log(n);
//   while (i < n) {
//     if (num % i == 0) {
//       sum += i;
//     }
//     i++;
//   }
//   return sum === num
//     ? console.log(`perfect num : ${sum}`)
//     : console.log(`Not a perfect num : ${sum}`);
// }
// perfectNumber(6);
// perfectNumber(28);
// perfectNumber(496);
// perfectNumber(8);
// perfectNumber(1);

// 4. WAP to check whether a number is prime number or not

// prime number = 1 and number it's self(num)

// function prime(num) {
//   let flag = true;
//   if(num<=1) flag = false;
//   let last = num / 2;
//   let start = 2;
//   while (start <= last) {
//     if (num % start == 0) {
//       flag = false;
//       break;
//     }
//     start++;
//   }
//   (flag) ? console.log(num + " is prime") : console.log(num + " is not prime");
// }

// prime(5);
// prime(7);
// prime(11);
// prime(8);
// prime(10);
// prime(12);
// prime(0);

// 3. WAP to reverse a number

// function reverseNum(num){
//   let n = num;
//   let rem = 0;
//   let res = 0;
//   while(n){
//     rem = n%10;
//     res = res*10+rem;
//     n = Math.floor(n/10);
//   }
//   console.log(`Reverse Number : ${res}`);
// }
// reverseNum(987654321);
// reverseNum(123456789);

// 6. WAP to check whether a number is Palindrome Number or not
//     (121,1234321)

// Palindrome n = 12321 = 12321

// function isPalindrome(num) {
//   let n = num;
//   let rem = 0;
//   let res = 0;
//   while (n) {
//     rem = n % 10;
//     res = res * 10 + rem;
//     n = Math.floor(n / 10);
//   }
//   res===num ? console.log(`Palindrome Number : ${res}`) : console.log(`Not Palindrome : ${res}`);
// }

// isPalindrome(121);
// isPalindrome(12321);
// isPalindrome(12345);

// 5. WAP to check whether a number is Armstrong number or not
//     (1,153,370,371,407)

// example : 153 = 1**3 + 5**3 + 3**3

// function isArmstrong(num) {
//   let n = num;
//   let rem = 0;
//   let res = 0;
//   while (n) {
//     rem = n%10;
//     // console.log(rem);
//     res = res + (rem**3);
//     n = Math.floor(n/10);
//   }
//   res === num
//     ? console.log(`Armstrong Number : ${res}`)
//     : console.log(`Not Armstrong : ${res}`);
// }

// isArmstrong(1);
// isArmstrong(153);
// isArmstrong(370);
// isArmstrong(371);
// isArmstrong(407);

// 4. WAP to check whether a number is NEON number or not (1,9)

// num = 9
// 9**2 == 81
// 8+1 = 9

// function isNeon(num) {
//   let sqr = num*num;
//   let n = sqr;
//   let rem = 0;
//   let sum = 0;
//   while (n) {
//     rem = n%10;
//     sum = sum + rem;
//     n = Math.floor(n/10);
//   }
//   num === sum
//     ? console.log(`Neon Number : ${num}`)
//     : console.log(`Not Neon : ${num}`);
// }

// isNeon(1);
// isNeon(9);
// isNeon(370);

// 7. WAP to check whether a number is Magical Number or not
// example - (81,1458,1729)
// num = 1458
// sum = 1+4+5+8 = 18
// rev = 81
// sum*rev==1458

// function isMagical(num) {
//   var n = num;
//   var sum = 0;
//   while (n != 0) {
//     let r = n % 10;
//     sum += r;
//     n = parseInt(n / 10);
//   }
//   var rev = 0;
//   n = sum;
//   while (n != 0) {
//     let r = n % 10;
//     rev = rev * 10 + r;
//     n = parseInt(n / 10);
//   }
//   sum * rev == num
//     ? console.log(`${num} is a Magical Number`)
//     : console.log(`${num} is not a Magical Number`);
// }
// 81,1458,1729
// isMagical(81);
// isMagical(1458);
// isMagical(1729);
// isMagical(14654);
// isMagical(8767453);

// 2. WAP to count even and odd digits in a number

function countEvenOdd(num1, num2) {
  let countEven = 0;
  let countOdd = 0;
  while (num1 <= num2) {
    if ((num1 & 1) == 0) {
      countEven++;
    } else {
      countOdd++;
    }
    num1++;
  }
  console.log(`Count of Even number : ${countEven}`);
  console.log(`Count of Odd number : ${countOdd}`);
}

countEvenOdd(2, 16);

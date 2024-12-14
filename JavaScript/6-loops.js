// var a = prompt("Enter your number");

// console.log(`value of a is : ${a}`)

// document.write(`value of a is : ${a}`)

// 1. WAP to print sum of Even and Odd Numbers in specific Range
// 2. WAP to print factorial of any specific number
// 3. WAP to check whether a number is perfect number or not(6,28,496,8128)
// 4. WAP to check whether a number is prime number or not

// function evenOdd(num1,num2){
//  let even = []
//  let odd = []
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
// evenOdd(2,15)

// function factorial(num){
//   let fact = 1;
//   while(num){
//     fact = fact * num;
//     num--;
//   }0
//   return fact;
// }
// console.log(factorial(1));

// Perfect number = {6,28,496}
// divisor of 6 are (1,2,3) except - include itself(6)
// 6 = 1 + 2 + 3
// 6 = 6 perfect number

// function perfectNumber(num) {
//   let sum = 1;
//   let i = 2;
//   let n = num/2;
//   console.log(n)
//   while (i<=n) {
//     if (num%i==0) {
//       sum+=i;
//     }
//     i++;
//   }
//   return sum == num
//     ? console.log(`perfect num : ${sum}`)
//     : console.log(`Not a perfect num : ${sum}`);
// }
// perfectNumber(6);
// perfectNumber(28);
// perfectNumber(496);
// perfectNumber(8);

// prime number = 1 and number it's self(num)
// function prime(num) {
//   let flag = true;
//   let last = num / 2;
//   let start = 2;
//   while (start <= last) {
//     if (num % start == 0) {
//       flag = false;
//       break;
//     }
//     start++;
//   }
//   if (flag == true && num >= 2) console.log(num + " is prime");
//   else console.log(num + " is not prime");
// }
// prime(5);
// prime(7);
// prime(11);

// prime(8);
// prime(10);
// prime(12);

//Fibonacci Series : 0  1   1   2   3   5   8   13  21  34  55  89  144.....
// function Fibonacci(num){
//   let a=0;
//   let b=1;
//   let fib = a+b;
//   console.log(0);
//   console.log(1);
//   for(let i = 1;i<=num;i++){
//     console.log(fib);
//     a = b;
//     b = fib;
//     fib = a+b;
//   }
// }
// Fibonacci(5)
// Fibonacci(10)

// Palindrome n = 12321 = 12321

// function isPalindrome(num){
// let n = num;
// let rem = 0;
// let res = 0;
// while(n){
//   rem = n%10;
//   res = res * 10 + rem;
//   n = Math.round(n/10);
// }

// console.log(res);
// return (num === res);
// }
// console.log(isPalindrome(121));
// console.log(isPalindrome(12321));
// console.log(isPalindrome(1212));
/*
Flow Control Statements or Decision Making Statements
1. Conditional Statements or Selection Statements:
    1. if Statement
    2. if else Statement
    3. Netsed if else Statement
    4. if else if ladder Statement
    5. switch case Statement
2. Iteration Statements or Loops:
    1. for Loop
    2. for in Loop
    3. for Of Loop
    4. while Loop
    5. do while Loop
    6. Nested Loops
3. Jump Statements:
    1. break Statement
    2. Continue Statement

Conditional Statements or Selection Statements:
if Statement: used when execution of a Statement Block depend
              on a condition
syntax:
if(condition){
    -----
    number of Statements
    -----
}
Note: {} are optional if we have only one statement in statement block
 */

// if(true){
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")


// if(false){
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

// if (!true)
//     console.log("Hello World1")
// console.log("Hello World2")
// console.log("Hello World3")
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")


/*
if else Statement: used when execution of one statement block out of two blocks depend on a condition
syntax:
if(condition){
    -----
    number of Statements block1
    -----
}
else{
    -----
    number of Statements block2
    -----
}
 */
// if (true) {
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// else
//     console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

// if (true)
//     console.log("Hello World1")
// console.log("Hello World2")
// console.log("Hello World3")
// else //error in this line, else used without if
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

// var num = Number(prompt("Enter the Number : "))
// if (num % 2 == 0)
//     document.write(`${num} is Even`)
// else
//     document.write(`${num} is Odd`)

/*
WAP to check whether two numbers are equal or not
WAP to check whether a person can vote or not
WAP to check whether a number is perfect square number or not
 */ 

/*
Nested if Else: if else within if else Statement
syntax:
    if(condition1){
        ------
        if(condition2){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
    else
    {
        ------
        if(condition3){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
 */

// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var c = Number(prompt("Enter the Third Number : "))
// if (a < b) {
//     if (a < c)
//         document.write(`${a} is Smallest`)
//     else
//         document.write(`${c} is Smallest`)
// }
// else {
//     if (b < c)
//         document.write(`${b} is Smallest`)
//     else
//         document.write(`${c} is Smallest`)
// }

/*
WAP to check whether a number is divisible by 2 and 3
WAP to check whether a year is leap year or not
 */

// var year = Number(prompt("Enter the Year Number : "))
// if (year % 100 == 0) {
//     if (year % 400 == 0)
//         document.write(`${year} is a Leap Year`)
//     else
//         document.write(`${year} is not a Leap Year`)
// }
// else{
//     if (year % 4 == 0)
//         document.write(`${year} is a Leap Year`)
//     else
//         document.write(`${year} is not a Leap Year`)
// }


/*
 if else if ladder : when we have n number of conditions
 syntax:
    if(condition1){
        -----
        -----
    }
    else if(condition2){
        -----
        -----
    }
    else if(condition3){
        -----
        -----
    }
    else if(condition4){
        ------
        ------
    }
    --
    --
    --
    else if(conditionN){
        ------
        ------
    }
    else{
        ------
        ------
    }
 */
// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var c = Number(prompt("Enter the Third Number : "))
// var d = Number(prompt("Enter the Fourth Number : "))
// var e = Number(prompt("Enter the Fifth Number : "))
// if (a >= b && a >= c && a >= d && a >= e)
//     document.write(`${a} is Greatest`)
// else if (b >= c && b >= d && b >= e)
//     document.write(`${b} is Greatest`)
// else if (c >= d && c >= e)
//     document.write(`${b} is Greatest`)
// else if (d >= e)
//     document.write(`${d} is Greatest`)
// else
//     document.write(`${e} is Greatest`)



// var year = Number(prompt("Enter the Year Number : "))
// if (year % 400 == 0)
//     document.write(`${year} is a Leap Year`)
// else if (year % 4 == 0 && year % 100 != 0)
//     document.write(`${year} is a Leap Year`)
// else
//     document.write(`${year} is not a Leap Year`)


// var year = Number(prompt("Enter the Year Number : "))
// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
//     document.write(`${year} is a Leap Year`)
// else
//     document.write(`${year} is not a Leap Year`)

/*
WAP to print day name when used enter a day number
WAP to print number of days in a month  when user enter month number
WAP to make a simple calculator
WAP to check whether an entered character is lower case vowel, lower case consonant, upper case vowel, upper case consonant, digit, space or any special Character
 */


// var ch = prompt("Enter a Single Character : ")
// if (ch.length != 1)
//     document.write(`'${ch}' is Invalid Input`)
// else {
//     if (ch >= 'a' && ch <= 'z') {
//         if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
//             document.write(`'${ch}' is Lower Case Vowel`)
//         else
//             document.write(`'${ch}' is Lower Case Consonant`)
//     }
//     else if (ch >= 'A' && ch <= 'Z') {
//         if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
//             document.write(`'${ch}' is Upper Case Vowel`)
//         else
//             document.write(`'${ch}' is Upper Case Consonant`)
//     }
//     else if (ch >= '0' && ch <= '9')
//         document.write(`'${ch}' is a Digit`)
//     else if (ch == ' ')
//         document.write(`'${ch}' is a Space`)
//     else
//         document.write(`'${ch}' is a Special Character`)
// }


/*
Switch Case Statement:
used to make a menu based program
syntax:
switch(input){
    case constant1:
        ------
        ------
        break
    case constant2:
        ------
        ------
        break
    case constant3:
        ------
        ------
        break
    -
    -
    case constantN:
        ------
        ------
        break
    default:
        ------
        ------
}
*/

// var num = Number(prompt("Enter the Day Number : "))
// switch (num) {
//     case 1:
//         document.write("Monday")
//         break
//     case 2:
//         document.write("Tuesday")
//         break
//     case 3:
//         document.write("Wednesday")
//         break
//     case 4:
//         document.write("Thursday")
//         break
//     case 5:
//         document.write("Friday")
//         break
//     case 6:
//         document.write("Saturday")
//         break
//     case 7:
//         document.write("Sunday")
//         break
//     default:
//         document.write("Invalid Choice")
// }

/*
WAP to print number of days in a month  when user enter month number
WAP to make a simple calculator
*/

/*
Iteration Statements or Loops:
used to iterate or repeat number of statements n times

1. for loop: use when we know number of iterations
syntax:

    for(Initialization;condition;updation){
        -----------
        -----------
        number of statements
        -----------
        -----------
    }
 */

// for (var i = 1; i <= 10; i++) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 10; i >= 1; i--) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 10; i; i--) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 10; i; i = i - 3) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 1; i<=10; ++i) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 1; i <= 10; i = ++i) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 1; i <= 10; i = i++) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 1; i <= 10; i++);
// {
//     console.log(`Hello World ${i}`)
// }

// for (let i = 1; i <= 10; i++);
// {
//     console.log(`Hello World ${i}`)
// }

// var i = 1
// for (; ;) {
//     if(i>10)
//         break
//     console.log(`Hello World ${i}`)
//     i++
// }

// var i = 1
// for (; 10;) {
//     console.log(`Hello World ${i}`)
//     i++
// }


/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not(6,28,496,8128)
4. WAP to check whether a number is prime number or not
 */

// var num = 5;
// // var num = Number(prompt("Enter the Number : "))
// var f = 1;
// for (let i = num; i >= 1; i--) {
//     f=f*i
// }
// console.log(`Factorial of ${num} = ${f}`)
// // document.write(`Factorial of ${num} = ${f}`)

/*
num = 5 
i   = 5     4       3       2           1
f   = 1*5=5 5*4=20  20*3=60 60*2=120    120*1 = 120
 */
// var num = Number(prompt("Enter the Number  : "))
// for (let i = 1; i <= 10; i++) {
//     document.write(`${num} * ${i}  = ${num * i}<br>`)
// }


// var start = Number(prompt("Enter the Range\nStart From : "))
// var end = Number(prompt("To : "))
// var sum = 0

// for(let i=start;i<=end;i++){
//     sum = sum+i
// }
// document.write(`Sum of Numbers from ${start} to ${end} = ${sum}`)
/*
start   =   1
end     =   10      
i       =   1       2       3       4       5       6       7       8       9       10
sum     =   0+1=1   1+2=3   3+3=6   6+4=10  10+5=15 15+6=21 21+7=28 28+8=36 36+9=45 45+10=55
 */

// var num = Number(prompt("Enter the Number : "))
// var flag = false
// for (let i = 2; i <= num ** 0.5; i++) {
//     if (num % i == 0) {
//         flag = true
//         break
//     }
// }
// if (flag === false && num >= 2)
//     document.write(`${num} is Prime`)
// else
//     document.write(`${num} is not Prime`)

/*
num     =   25
i       =   2       3       4       5
num%i==0=   false   false   false   true
flag    =   false                   true


num     =   13
i       =   2       3       4       5       6       7(loop end)
num%i==0=   false   false   false   false   false
flag    =   false
 */

/*
while Loop:
used when we does not have a fix idea of number of iterations
syntax:
    Initialization
    while(condition){
        -----
        -----
        number of statements
        -----
        -----
        updation
    }
 */

// var i = 1
// while(i<=10){
//     console.log(`Hello World ${i}`)
//     i++
// }


//Fibonacci Series : 0  1   1   2   3   5   8   13  21  34  55  89  144.....
// var a = 0
// var b = 1
// var sum = a + b
// var num = Number(prompt("Enter the Last Term Range of Fibonacci Series : "))
// document.write(`${a} ${b} `)
// while (sum <= num) {
//     document.write(`${sum} `)
//     a = b
//     b = sum
//     sum = a + b
// }
/*
num =   100
a   =   0   1   1   2   3   5   8   13  21  34  55  
b   =   1   1   2   3   5   8   13  21  34  55  89
sum =   1   2   3   5   8   13  21  34  55  89  144
op:0 1  1   2   3   5   8   13  21  34  55  89
 */

// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// while (num != 0) {          //12345 1234    123     12      1       0
//     let r = num % 10        //5     4       3       2       1
//     sum = sum + r           //0+5=5 5+4=9   9+3=12  12+2=14 14+1=15
//     num = parseInt(num/10)  //1234  123     12      1       0
// }
// document.write(`sum = ${sum}`)

// var num = Number(prompt("Enter the Number : "))
// var rev = 0
// while (num != 0) {          //12345     1234        123         12              1              0
//     let r = num % 10        //5         4           3           2               1
//     rev = rev * 10 + r      //0*10+5=5  5*10+4=54   54*10+3=543 543*10+2=5432   5432*10+1=54321
//     num = parseInt(num / 10)//1234      123         12          1       0       0
// }
// document.write(`Reverse Number  = ${rev}`)


/*
while Loop Questions:
1. WAP to calculate sum of even and odd digits of a specific number
2. WAP to count even and odd digits in a number
3. WAP to reverse a number
4. WAP to check whether a number is NEON number or not
    (1,9)
5. WAP to check whether a number is Armstrong number or not
    (1,153,370,371,407)
6. WAP to check whether a number is Palindrome Number or not
    (121,1234321)
7. WAP to check whether a number is Magical Number or not
    (81,1458,1729)
 */

// var num = Number(prompt("Enter the Number : "))
// var even = 0
// var odd = 0
// while (num != 0) {            //1234372 123437  12343   1234    123     12      1       0
//     let r = num % 10          //2       7       3       4       3       2       1
//     if (r % 2 == 0)           //true    false   false   true    false   true    false
//         even += r             //0+2=2                   2+4=6           6+2=8
//     else
//         odd += r              //        0+7=7   7+3=10          10+3=13         13+1=14
//     num = Math.floor(num / 10)//123437  12343   1234    123     12      1       0
// }
// document.write(`
//         Sum of Even Digits = ${even}<br>
//         Sum of Odd Digits = ${odd}
//     `)


// var n = Number(prompt("Enter the Number : "))
// var sum = 0
// var num = n                 //1458
// while (num != 0) {          //1458  145     14      1       0
//     let r = num % 10        //8     5       4       1
//     sum += r                //0+8=8 8+5=13  13+4=17 17+1=18
//     num = parseInt(num / 10)//145   14      1       0
// }
// var rev = 0
// num = sum                    //18       
// while (num != 0) {          //18        1           0
//     let r = num % 10        //8         1
//     rev = rev * 10 + r      //0*10+8=8  8*10+1=81
//     num = parseInt(num / 10)//1         0
// }
// if (sum * rev == n)
//     document.write(`${n} is a Magical Number`)
// else
//     document.write(`${n} is not a Magical Number`)


/*
do while Loop:
used when we have to execute number of statements atleast one
time whether condition is false

syntax:
Initialization
do
{
    ------
    ------
    number of Statements
    ------
    ------
    updation
}while(condition);
 */

// var i = 1
// do {
//     console.log(`Hello World ${i}`)
//     i++
// } while (i <= 10)

// do {
//     var a = Number(prompt("Enter the First Number : "))
//     var b = Number(prompt("Enter the Second Number : "))
//     var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Mulitplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
//     switch (ch) {
//         case "+":
//             alert(`${a} + ${b} = ${a + b}`)
//             break
//         case "-":
//             alert(`${a} - ${b} = ${a - b}`)
//             break
//         case "*":
//             alert(`${a} * ${b} = ${a * b}`)
//             break
//         case "/":
//             alert(`${a} / ${b} = ${a / b}`)
//             break
//         case "%":
//             alert(`${a} % ${b} = ${a % b}`)
//             break
//         case "**":
//             alert(`${a} ** ${b} = ${a ** b}`)
//             break
//         default:
//             alert(`Invalid Choice`)
//     }
//     ch = prompt("Press n to Exit\nPress any other key to Continue")
// } while (ch != 'n')

/*
Nested loops:
Loops within Loops:
 */

// for (let num = 1; num <= 20; num++) {
//     console.log(`Table of ${num} is`)
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} * ${i} = ${num * i}`)
//     }
// }

//1. WAP to print  all perfect numbers(6,28,496,8128)
//2. WAP to print and count all palindrome numbers in a range
//3. WAP to print and count all armstrong numbers(153,370,371,407)
//4. WAP to print all magical Numbers (81,1458,1729)
//5. WAP to count and print all prime numbers in a range


// for (let num = 1; num <= 10000; num++) {
//     let sum = 0
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i == 0)
//             sum = sum + i
//     }
//     if (sum == num) {
//         console.log(num)
//     }
// }

/*
Patterns
*****
*****
*****
*****
*****
 */
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write("*")
//     }
//     console.log()
// }

/*
11111
22222
33333
44444
55555
 */
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${i}`)
//         // process.stdout.write(i.toString())
//     }
//     console.log()
// }

/*
12345
12345
12345
12345
12345
 */
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }

/*
12345
23456
34567
45678
56789
 */
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//       // process.stdout.write(`${i+j-1}`)
//       document.write(`${i+j-1}`)
//   }
//   document.write("<br>")
// }
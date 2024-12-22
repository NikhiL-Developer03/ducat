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


1. Conditional Statements or Selection Statements:

if Statement: used when execution of a Statement Block depend
              on a condition
syntax:
if(condition){
    -----
    number of Statements
    -----
}
Note: {} are optional if we have only one statement in statement
      block
 */
// if(true){
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

// if(!true){
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
if else Statement: used when execution of one Statement Block
                   out of two Statements block depend
                   on a condition
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
// if (!true) {
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// else {
//     console.log("Hello World4")
//     console.log("Hello World5")
//     console.log("Hello World6")
// }

// var num = Number(prompt("Enter the Number : "))
// if (num % 2 === 0)
//     document.write(`${num} is Even`)
// else
//     document.write(`${num} is Odd`)

/*
    WAP to check whether  two numbers are equal or not
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
// else{
//     if (b < c)
//         document.write(`${b} is Smallest`)
//     else
//         document.write(`${c} is Smallest`)
// }

// var num = Number(prompt("Enter the Number :  "))
// if (num % 2 == 0) {
//     if (num % 3 == 0)
//         document.write(`${num} is Divisible by Both 2 and 3`)
//     else
//         document.write(`${num} is Divisible by 2 but not by 3`)
// }
// else {
//     if (num % 3 == 0)
//         document.write(`${num} is Divisible by 3 but not by 2`)
//     else
//         document.write(`${num} is not Divisible by Both 2 and 3`)
// }

/*
    WAP to check whether a year is leap year or not
 */
// var year = Number(prompt("Enter the Year : "))
// if (year % 100 == 0) {
//     if (year % 400 == 0)
//         document.write(`${year} is a Leap Year`)
//     else
//         document.write(`${year} is not a Leap Year`)
// }
// else {
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
//     document.write(`${c} is Greatest`)
// else if (d >= e)
//     document.write(`${d} is Greatest`)
// else
//     document.write(`${e} is Greatest`)


// var year = Number(prompt("Enter the Year : "))
// if (year % 400 == 0)
//     document.write(`${year} is a Leap Year`)
// else if (year % 4 == 0 && year % 100 != 0)
//     document.write(`${year} is a Leap Year`)
// else
//     document.write(`${year} is not a Leap Year`)

// var year = Number(prompt("Enter the Year : "))
// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
//     document.write(`${year} is a Leap Year`)
// else
//     document.write(`${year} is not a Leap Year`)

// var num = Number(prompt("Enter the Number :  "))
// if (num % 2 == 0 && num % 3 == 0)
//     document.write(`${num} is Divisible by Both 2 and 3`)
// else if (num % 2 == 0)
//     document.write(`${num} is Divisible by 2 but not by 3`)
// else if (num % 3 == 0)
//     document.write(`${num} is Divisible by 3 but not by 2`)
// else
//     document.write(`${num} is not Divisible by Both 2 and 3`)


/*
1. WAP to print day name when user enter day number
2. WAP to print number of days in a moth when user enter any month number
3. WAP to make a simple calculator
4. WAP to check whether an entered character is lower case vowel, lower case consonant, upper case vowel, upper case consonant, digit, space or any special character
 */

// var ch = prompt("Enter the Single Character : ")
// if (ch.length != 1)
//     document.write(`'${ch}' is not valid input please enter a single character`)
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

// var day = Number(prompt("Enter the Day Number : "))
// switch (day) {
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
//         document.write(`Invalid Choice`)
// }

/*
1. WAP to print number of days in a moth when user enter any month number
2. WAP to make a simple calculator
*/

// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Multiplcation\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
// switch (ch) {
//     case "+":
//         document.write(`${a} + ${b} = ${a + b}`)
//         break
//     case "-":
//         document.write(`${a} - ${b} = ${a - b}`)
//         break
//     case "*":
//         document.write(`${a} * ${b} = ${a * b}`)
//         break
//     case "/":
//         document.write(`${a} / ${b} = ${a / b}`)
//         break
//     case "%":
//         document.write(`${a} % ${b} = ${a % b}`)
//         break
//     case "**":
//         document.write(`${a} ** ${b} = ${a ** b}`)
//         break
//     default:
//         document.write(`Invalid Choice`)
//         break
// }


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

// var num = Number(prompt("Enter the Number : "))
// for (var i = 1; i <= 10; i++) {
//     document.write(`${num} * ${i} = ${num * i}<br>`)
// }

// var start = Number(prompt("Enter the Range\nStart From : "))
// var end = Number(prompt("To : "))
// var sum = 0
// for (var i = start; i <= end; i++) {
//     sum = sum + i
// }
// document.write(`sum of Numbers from ${start} to ${end} = ${sum}`)

/*
start   =   1
end     =   10
i       =   1       2       3       4       5       6       7       8       9       10
sum     =   0+1=1   1+2=3   3+3=6   6+4=10  10+5=15 15+6=21 21+7=28 28+8=36 36+9=45 45+10=55
 */

// for (var i = 1; i <= 10; i++) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 1; i <= 10; ++i) {
//     console.log(`Hello World ${i}`)
// }

// for (var i = 10; i; i--) {
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
//     if (i > 10)
//         break
//     console.log(`Hello World ${i}`)
//     i++
// }


/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not
4. WAP to check whether a number is prime number or not
 */



// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// for (let i = 1; i <= num / 2; i++) {
//     if (num % i == 0)
//         sum = sum + i
// }
// if (sum == num)
//     document.write(`${num} is Perfect Number`)
// else
//     document.write(`${num} is not Perfect Number`)

/*
num     =   28
i       =   1       2       3   4       5   6   7       8   9   10  11  12  13  14      15(loop end)
num%i==0=   T       T       F   T       F   F   T       F   F   F   F   F   F   T
sum     =   0+1=1   1+2=3       3+4=7           7+7=14                          14+14=28
 */

// var start = Number(prompt("Enter the Range\nStart From : "))
// var end = Number(prompt("To : "))
// var even = 0
// var odd = 0
// for (let i = start; i <= end; i++) {
//     if (i % 2 == 0)
//         even = even + i
//     else
//         odd = odd + i
// }
// document.write(`sum of even Numbers from ${start} to ${end} = ${even}<br>`)
// document.write(`sum of odd Numbers from ${start} to ${end} = ${odd}`)


// var num = Number(prompt("Enter the Number : "))
// var flag = false
// for (let i = 2; i <= num ** 0.5; i++) {
//     if (num % i == 0) {
//         flag = true
//         break
//     }
// }
// if (flag === false && num >= 2)
//     document.write(`${num} is Prime Number`)
// else
//     document.write(`${num} is not a Prime Number`)


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
// while (i <= 10) {
//     console.log(`Hello World ${i}`)
//     i++
// }

// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// while (num != 0) {          //1234  123     12      1       0
//     let r = num % 10        //4     3       2       1
//     sum = sum + r           //0+4=4 4+3=7   7+2=9   9+1=10
//     num = parseInt(num / 10)//123   12      1       0
// }
// document.write(`sum = ${sum}`)

//Fibonacci Series : 0  1   1   2   3   5   8   13  21  34  55  89  144......
// var num = Number(prompt("Enter the Last Term Range of Fibonacci Series : "))
// var a = 0
// var b = 1
// var sum = a + b
// document.write(`${a} ${b} `)
// while (sum <= num) {
//     document.write(`${sum} `)
//     a = b
//     b = sum
//     sum = a + b
// }

/*
num     = 100
a       = 0     1   1   2   3   5   8   13  21  34  55
b       = 1     1   2   3   5   8   13  21  34  55  89
sum     = 1     2   3   5   8   13  21  34  55  89  144
op:0  1   1     2   3   5   8   13  21  34  55  89
*/

// var num = Number(prompt("Enter the Number : "))
// var rev = 0
// while (num != 0) {              //1234      123         12          1               0
//     let r = num % 10            //4         3           2           1
//     rev = rev * 10 + r          //0*10+4=4  4*10+3=43   43*10+2=432 432*10+1=4321
//     num = parseInt(num / 10)    //123       12          1           0
// }
// document.write(`Reverse Number = ${rev}`)

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
// var sum = 0
// var n = num

// while (num != 0) {          //1458  145     14      1       0
//     let r = num % 10        //8     5       4       1
//     sum = sum + r           //0+8=8 8+5=13  13+4=17 17+1=18
//     num = parseInt(num / 10)//145   14      1       0
// }

// num = sum                   //18
// let rev = 0
// while (num != 0) {          //18        1           0
//     let r = num % 10        //8         1
//     rev = rev * 10 + r      //0*10+8=8  8*10+1=81
//     num = parseInt(num / 10)//1         0
// }

// if (sum * rev === n)
//     document.write(`${n} is a Magical Number`)
// else
//     document.write(`${n} is not a Magical Number`)


// var num = Number(prompt("Enter the Number : "))
// var n = num         //153
// var sum = 0
// while (num != 0) {      //153       15          1               0
//     let r = num % 10    //3         5           1
//     sum = sum + r ** 3  //0+3**3=27 27+5**3=152 152+1**3=153
//     num = parseInt(num / 10)//15    1           0
// }
// if (n == sum)
//     document.write(`${n} is an Armstrong Number`)
// else
//     document.write(`${n} is not an Armstrong Number`)


// var num = Number(prompt("Enter the Number : "))
// var n = num         //153

// var d = 0
// while (num != 0) {
//     d++
//     num = parseInt(num / 10)
// }

// var sum = 0
// num = n
// while (num != 0) {      //153       15          1               0
//     let r = num % 10    //3         5           1
//     sum = sum + r ** d  //0+3**3=27 27+5**3=152 152+1**3=153
//     num = parseInt(num / 10)//15    1           0
// }
// if (n == sum)
//     document.write(`${n} is an Armstrong Number`)
// else
//     document.write(`${n} is not an Armstrong Number`)

// var num = Number(prompt("Enter the Number : "))
// var n = num
// var rev = 0
// while (num != 0) {          //1221      122         12          1               0
//     let r = num % 10        //1         2           2           1
//     rev = rev * 10 + r      //0*10+1=1  1*10+2=12   12*10+2=122 122*10+1=1221
//     num = parseInt(num / 10)//122       12          1           0
// }
// if (rev == n)
//     document.write(`${n} is a Palindrome Number`)
// else
//     document.write(`${n} is not a Palindrome Number`)


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
//     var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
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
//     ch = prompt("Press n to Exit\nPress any other key to Continue : ")
// } while (ch != 'n')

/*
Nested loops:
Loops within Loops:
 */

// for (let num = 1; num <= 20; num++) {
//     document.write(`Table of ${num} is<br>`)
//     for (let i = 1; i <= 10; i++) {
//         document.write(`${num} * ${i} = ${num * i}<br>`)
//     }
// }

//1. WAP to print  all perfect numbers(6,28,496,8128)
//2. WAP to print and count all palindrome numbers in a range
//3. WAP to print and count all armstrong numbers(153,370,371,407)
//4. WAP to print all magical Numbers (81,1458,1729)
//5. WAP to count and print all prime numbers in a range

// var start = Number(prompt("Enter the Range\nStart From : "))
// var end = Number(prompt("To : "))
// var count = 0
// for (let num = start; num <= end; num++) {
//     let flag = false
//     for (let i = 2; i <= num ** 0.5; i++) {
//         if (num % i == 0) {
//             flag = true
//             break
//         }
//     }
//     if(flag==false && num>=2){
//         count++
//         document.write(`${num} `)
//     }
// }
// document.write(`<br>Total Prime Number from ${start} to ${end} = ${count}`)


// for (let i = 1; i <= 2000; i++) {
//     let sum = 0
//     let num = i
//     while (num != 0) {
//         let r = num % 10
//         sum = sum + r
//         num = parseInt(num / 10)
//     }

//     let rev = 0
//     num = sum

//     while (num != 0) {
//         let r = num % 10
//         rev = rev * 10 + r
//         num = parseInt(num / 10)
//     }
//     if(sum*rev==i){
//         console.log(i)
//     }
// }

/*
Star Patterns
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
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${i+j-1}`)
//     }
//     console.log()
// }

/*
11111
00000
11111
00000
11111
 */

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${i%2}`)
//     }
//     console.log()
// }

/*
10101
10101
10101
10101
10101
 */
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${j%2}`)
//     }
//     console.log()
// }

/*
10101
01010
10101
01010
10101
 */
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${(i+j-1)%2}`)
//     }
//     console.log()
// }


/*
AAAAA
BBBBB
CCCCC
DDDDD
EEEEE
 */
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${String.fromCharCode(i+64)}`)
//     }
//     console.log()
// }

/*
ABCDE
ABCDE
ABCDE
ABCDE
ABCDE
 */
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${String.fromCharCode(j+64)}`)
//     }
//     console.log()
// }


/*
ABCDE
BCDEF
CDEFG
DEFGH
EFGHI
 */
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         process.stdout.write(`${String.fromCharCode(i+j-1+64)}`)
//     }
//     console.log()
// }

/*
*
**
***
****
*****
 */

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(`*`)
//     }
//     console.log()
// }

/*
     *
    **
   ***
  ****
 *****
 */
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5 - i; j++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(`*`)
//     }
//     console.log()
// }


/*
     *
    * *
   * * *
  * * * *
 * * * * *
 */
//  for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5 - i; j++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(`* `)
//     }
//     console.log()
// }


/*
     *
    * *
   * * *
  * * * *
 * * * * *
  * * * *
   * * *
    * *
     *
 */
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`* `)
    }
    console.log()
}

for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`* `)
    }
    console.log()
}
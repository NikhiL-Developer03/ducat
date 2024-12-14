/*
Operators:  some special symbols which are used
            to perform some predefine operations
            on operands(variables,constants etc i.e
            a value)
Category on Basis of Operands:
1. Unary    :   Required only one operand
2. Binary   :   Required two operands
3. Ternary  :   Required three Operands

Types:
1. Arithmetic Operators
2. Assignment Operator
3. Composite/Compound/Short Hand Operators
4. Relational Operator
5. Logical Operators
6. Bitwise Operators
7. Conditional Operator
8. Increment Operator
9. Decrement Operator
10. MISC. Operator
 */

/*
Arithmetic Operators:
    +   Addition
    -   Subtraction
    *   Multiplication
    /   Division(Quotient)
    %   Division(Remainder)
    **  Power

    Category: Binary
    Precedence: L to R
    Priority: 
                1. Brackets
                2. **
                3. * / %
                4. + -
 */

// console.log(15 + 6)                 //21
// console.log(15 + "6")               //156
// console.log("15" + "6")             //156
// console.log("15" + "Hello World")   //15Hello World


// console.log(15 - 6)                 //9
// console.log(15 - "6")               //9
// console.log("15" - "6")             //9
// console.log("15" - "Hello World")   //NaN

// console.log(15 * 6)                 //90
// console.log(15 * "6")               //90
// console.log("15" * "6")             //90
// console.log("15" * "Hello World")   //NaN


// console.log(15 / 6)                 //2.5
// console.log(15 / "6")               //2.5
// console.log("15" / "6")             //2.5
// console.log("15" / "Hello World")   //NaN

// console.log(15 % 6)                 //3
// console.log(15 % "6")               //3
// console.log("15" % "6")             //3
// console.log("15" % "Hello World")   //NaN

// console.log(15 ** 6)                 //11390625
// console.log(15 ** "6")               //11390625
// console.log("15" ** "6")             //11390625
// console.log("15" ** "Hello World")   //NaN


// var a = 15*5/10*4%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*(5*7%30*2**5*5%100)
// console.log(a)

/*
15*5/10*4%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*(5*7%30*2**5*5%100)
15*5/10*4%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*(5*7%30*32*5%100)
15*5/10*4%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*(35%30*32*5%100)
15*5/10*4%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*(5*32*5%100)
15*5/10*4%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*(160*5%100)
15*5/10*4%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*(800%100)
15*5/10*4%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*0
75/10*4%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*0
7.5*4%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*0
30%40/15*50-34*5%100/10*4%20-4*6%30/2*5%50*0
30/15*50-34*5%100/10*4%20-4*6%30/2*5%50*0
2*50-34*5%100/10*4%20-4*6%30/2*5%50*0
100-34*5%100/10*4%20-4*6%30/2*5%50*0
100-170%100/10*4%20-4*6%30/2*5%50*0
100-70/10*4%20-4*6%30/2*5%50*0
100-7*4%20-4*6%30/2*5%50*0
100-28%20-4*6%30/2*5%50*0
100-8-4*6%30/2*5%50*0
100-8-24%30/2*5%50*0
100-8-24/2*5%50*0
100-8-12*5%50*0
100-8-60%50*0
100-8-10*0
100-8-0
92-0
92
*/

/*
Assignment Operator(=):
used to assign value of RHS operand to LHS operand
eg. sum=a+b;    //valid
eg. a+b=sum;    //invalid
eg. a=b=c;      //valid

Category: Binary
Precedence: R to L
 */

/* Composite/Compound/Short Hand Operators
                combination of Assignmnet Operator with other 
                operators
    a=a+b         =>      a+=b
    a=a-b         =>      a-=b
    a=a*b         =>      a*=b
    a=a/b         =>      a/=b
    a=a%b         =>      a%=b
    a=a**b        =>      a**=b
*/

/*
    Relational Operator:
    used to compare two operands
    <       Less Than
    <=      Less Than Equal
    >       Greater Than 
    >=      Greater Than Equal
    !=      not Equal       (check only value)
    !==     not Identical   (check value and data type both)
    ==      Equal           (check value only)
    ===     Identical       (check value and data type both)
 */
// console.log(10<20)      //true
// console.log(10<2)       //false
// console.log(10<"2")     //false
// console.log("10"<"2")   //true
// console.log("113"<"12") //true

// console.log(10<=20)      //true
// console.log(10<=10)      //true
// console.log(10<="2")     //false
// console.log("10"<="2")   //true
// console.log("113"<="12") //true

// console.log(10>20)      //false
// console.log(10>2)       //true
// console.log(10>"2")     //true
// console.log("10">"2")   //false
// console.log("113">"12") //false

// console.log(10>=20)      //false
// console.log(10>=10)      //true
// console.log(10>="2")     //true
// console.log("10">="2")   //false
// console.log("113">="12") //false

// console.log(10==10)         //true
// console.log(10=="10")       //true
// console.log(10==="10")      //false
// console.log(10==="20")      //false
// console.log("20"==="20")    //true

// console.log(10!=10)         //false
// console.log(10!="10")       //false
// console.log(10!=="10")      //true
// console.log(10!=="20")      //true
// console.log("20"!=="20")    //false



/*
    Logical Operators:
    used to make a compound condition

    Operator    symbol  operation               type    precedence
    Logical And &&      return true if all      binary  L to R
                        conditions are true
                        else return false
    Logical Or  ||      return true if atleast  binary  L to R
                        one condition is true
                        else return false
    Logical Not !       return true if condition Unary  R to L
                        is false and return 
                        false if condition is 
                        true

Note : false 0 null undefined empty string are falsy values
       rest all values are true
 */

// console.log(10 && 20)       //true i.e 20
// console.log(0 && 20)        //false i.e 0
// console.log(false && 20)    //false i.e false
// console.log(null && 20)     //false i.e null
// console.log(false && 0)     //false i.e false

// console.log(10 || 20)       //true i.e 10
// console.log(0 || 20)        //true i.e 20
// console.log(false || 20)    //true i.e 20
// console.log(null || 20)     //true i.e 20
// console.log(false || 0)     //false i.e 0

// console.log(!10)            //false
// console.log(!0)             //true

// console.log(!false && !0)   //true
// console.log(!false && 0)    //false   i.e 0

// console.log(10 && 20 || 0 || 30) //true i.e 20


/*
Bitwise Operator:
Operators               Symbols     Type    Precedence
1. Bitwise And          &           Binary  L to R
2. Bitwise Or           |           Binary  L to R
3. Bitwise Xor          ^           Binary  L to R
4. Bitwise Left Shift   <<          Binary  L to R
5. Bitwise Right Shift  >>          Binary  L to R
6. Bitwise Negation     ~,-         Unary   R to L

a   b   a&b a|b a^b(a|b - a&b)
0   0   0    0   0
0   1   0    1   1
1   0   0    1   1
1   1   1    1   0
 */

// var a = 275
// var b = 59
// var c = a & b
// var d = a | b
// var e = a ^ b
// console.log(c, d, e)

/*
a = 75  i.e         0   1   0   0   1   0   1   1   
b = 159 i.e         1   0   0   1   1   1   1   1   
-------------------------------------------------
c = a&b i.e         0   0   0   0   1   0   1   1
                    128 64  32  16  8   4   2   1
                    -----------------------------
                    0   0   0   0   8   0   2   1=>11
-----------------------------------------------------
d = a|b i.e         1   1   0   1   1   1   1   1
                    128 64  32  16  8   4   2   1
                    -----------------------------
                    128 64  0   16  8   4   2   1=>223
------------------------------------------------------
e = a^b i.e         1   1   0   1   0   1   0   0
                    128 64  32  16  8   4   2   1
                    -----------------------------
                    128 64  0   16  0   4   0   0=>212
 */

/*
Bitwise Left Shift and Right Shift
Biwise Left Shift
        num<<n
    i.e num*2**n
    eg. 25<<10
    eg. 25*2**10
    i.e 25*1024
    i.e 25600

Bitwise Right Shift
        num>>n
    i.e num/2**n
    eg. 2500>>5
    eg. 2500/2**5
    i.e 2500/32
    i.e 78
 */
// console.log(10<<5)
// console.log(15<<5)
// console.log(25<<5)

// console.log(1011>>5)
// console.log(1511>>5)
// console.log(2511>>5)

// console.log(5<<2>>2)
// console.log(5<<2<<2)

/*
Bitwise Negation Operator:
                    ~
                    (-x-1)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        -1  -1                     -1   -1
        ----------------------------------
            -21                         29
                    -
                    (-x)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        ----------------------------------
            -20                         30
*/
// var a = 20
// var b = -30
// console.log(~a)
// console.log(~b)
// console.log(-a)
// console.log(-b)
/*


Conditional Operator or Ternary Operator(?:)
used when we have to execute a statement out of
two statements according to a condition
syntax:
condition?Statement1:Statement2;
            True      False
 */
// var num = Number(prompt("Enter the Number : "))
// num%2==0?document.write(`${num} is Even`):document.write(`${num} is Odd`)

/*
WAP to check whether two numbers are equal or not
WAP to check whether a person can vote or not
WAP to check whether a number is perfect square number or not
 */
/*
                Increment(++)  i.e x=x+1
        Pre-Increment           Post-Increment
        (++oprand)              (operand++)
        -------------           --------------
        First Increment         first Assignment
        then Assignment         then Increment

                 Decrement(--)  i.e x=x-1
        Pre-Decrement           Post-Decrement
        (--oprand)              (operand--)
        -------------           --------------
        First Decrement         first Assignment
        then Assignment         then Decrement
 */

// var a = 10
// var b = a++         //b = 10    a = 11
// var c = ++a         //a = 12    c = 12
// var d = a--         //d = 12    a = 11
// var e = --a         //a = 10    e = 10
// --a                 //a = 9
// a--                 //a = 8
// console.log(a,b,c,d,e)


// var a = 10
// var b = a++ + ++a
// console.log(a,b)


// var a = 10
// var b = --a - a--
// var c = a-- - --a + b-- - b--
// console.log(a,b,c)


// var a = 10
// var b = a-- - --a
// var c = a-- + --a - --b - --b
// var d = a-- + a-- + b-- - --b + c-- - --c
// console.log(a,b,c,d)
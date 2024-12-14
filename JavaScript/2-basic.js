//console.log("Hello World");

/*
JavaScript Basics:
    1. Keywords
    2. Identifier
    3. Data Types
    4. Variables
    5. Constant/Literals
    6. Tokens
    7. Input/Output
    8. Operator

    keywords: reserved words
    abstract	arguments	await*	boolean
    break	byte	case	catch
    char	class*	const	continue
    debugger	default	delete	do
    double	else	enum*	eval
    export*	extends*	false	final
    finally	float	for	function
    goto	if	implements	import*
    in	instanceof	int	interface
    let*	long	native	new
    null	package	private	protected
    public	return	short	static
    super*	switch	synchronized	this
    throw	throws	transient	true
    try	typeof	var	void
    volatile	while	with	yield

    Identifiers:
        name of programming entities like variables,functions,
        objects,classes etc
    
    Rules of Identifiers:
        1. we can't use any keywords
        2. we can't use any digit as prefix of identifier
           but we can use digit in postix
        3. We can't use any special character except underscore
        4. We can't use same name for more the one item of same
           Statement block
    
    Data Types:
    Number : any whole or fractional number like 
             10 25.36 -25.35 -50 +25.36 +25
    String : Collection of Characters
             like 'sample' "example" `
                                        Hello
                                        World
                                        Ducat
                                     `
    boolean : true false
    --------------------------------------------
    null
    undefined
    object
    bigint
    array

    Data Representation:
    1. Variable:
        used when data is not fixed
        
        variables are names of memory locations in RAM which 
        contains some informations
        or
        variables are placeholder for data in RAM
        or 
        variables are data containers
        syntax:
            var variableName=value;     //function level
            let variableName=value;     //block level
            const variableName=value;   //block level and read
                                        // only
    2. Constant\Literals:
        used when data is fixed
        boolean: true false
        number : 10 +20 -25 15.36 +25.25 -65.25
        string : 'sample' "sample"
 */

// var a = 10
// var b = 10.5
// var c = -34
// var d = +34
// var e = 'Hello'
// var f = "World"
// var g = `
//             Ducat
//             Education
//             Noida
//         `
// var h = true
// var i = false
// console.log(a, typeof (a))
// console.log(b, typeof (b))
// console.log(c, typeof (c))
// console.log(d, typeof (d))
// console.log(e, typeof (e))
// console.log(f, typeof (f))
// console.log(g, typeof (g))
// console.log(h, typeof (h))
// console.log(i, typeof (i))

/*
    Tokens:
    smallest Entity of any program like identifiers,
    constants,keywords, operators, punctuators(, space
        : ; [] () {} etc)
    
    var a=10;
    var     =>  keyword
    a       =>  identifier(variable)
    =       =>  operator
    10      =>  constant
    ;       =>  punctuator
 */

/*
Output Instrucions:
console.log(): used as output instructions
*/

// var a = 10
// var b = 20
// var sum = a + b
// console.log(a, "+", b, "=", sum)
// console.log(a + " + " + b + " = " + sum)
// console.log(`${a} + ${b} = ${sum}`)//String Template Literal

// var p = 800000
// var r = 12.36
// var t = 5
// var si = p*r*t/100
// var total = p+si
// var emi = total/(t*12)
// console.log("Principal Amount : ",p)
// console.log("Rate             : ",r)
// console.log("Time             : ",t)
// console.log("Simple Interest  : ",si.toFixed(2))
// console.log("Total Amount     : ",total.toFixed(2))
// console.log("EMI Amount       : ",emi.toFixed(2))


// var p = 800000
// var r = 12.36
// var t = 5
// var si = p * r * t / 100
// var total = p + si
// var emi = total / (t * 12)
// console.log(`
//             Principal Amount :  ${p}
//             Rate             :  ${r}
//             Time             :  ${t}
//             Simple Interest  :  ${si.toFixed(2)}
//             Total Amount     :  ${total.toFixed(2)}
//             EMI Amount       :  ${emi.toFixed(2)}`
// )

// Key Points - toFixed()
// Rounding: The number is rounded to the specified number of decimal places.
// Returns a String: The result is a string, not a number.
// const num = 12.34567;
// console.log(`${typeof(num.toFixed(2))} ${num.toFixed(2)}`); // "12.35"


/*
toFixed : Returns a string representing a number in fixed-point notation.

Math.floor() : Returns the greatest integer less than or equal to its numeric argument.
Rounds down to the nearest integer
               e.g Math.floor(4.1)   i.e 4
               e.g Math.floor(4.9)   i.e 4
               e.g Math.floor(-4.1)  i.e -5
               e.g Math.floor(-4.9)  i.e -5

Math.ceil() : Returns the greatest integer greater than or equal to its numeric argument.
Rounds up to the nearest integer
               e.g Math.ceil(4.1)   i.e 5
               e.g Math.ceil(4.9)   i.e 5
               e.g Math.ceil(-4.1)  i.e -4
               e.g Math.ceil(-4.9)  i.e -4

Math.round():   Returns a supplied numeric expression rounded to the nearest
Rounds to the nearest integer
               e.g Math.round(4.1)   i.e 4
               e.g Math.round(4.9)   i.e 5
               e.g Math.round(-4.1)  i.e -4
               e.g Math.round(-4.9)  i.e -5

Math.sqrt(num)  :   return square root of numberic argument
                    eg. Math.sqrt(25) i.e 5


Math.cbrt(num)  :   return cube root of numberic argument
                    eg. Math.cbrt(27) i.e 3

Math.pow(num,n) :   return n power of the num
                    eg. Math.pow(5,2) i.e 25
                    eg. Math.pow(5,3) i.e 125
*/
// console.log(Math.floor(4.1))
// console.log(Math.floor(4.9))
// console.log(Math.floor(-4.1))
// console.log(Math.floor(-4.9))

// console.log(Math.ceil(4.1))
// console.log(Math.ceil(4.9))
// console.log(Math.ceil(-4.1))
// console.log(Math.ceil(-4.9))

// console.log(Math.round(4.1))
// console.log(Math.round(4.9))
// console.log(Math.round(-4.1))
// console.log(Math.round(-4.9))

/*
WAP to print area of circle     :   area=3.14*r*r
WAP to print area of Rectangle  :   area=l*b
WAP to print area of cuboid     :   2*(l*b + b*h + h*l)
WAP to print area of Right Angle Triangle   :   area =(base*height)/2
WAP to print area of Square     :   area = side*side
WAP to swap value of two variables
WAP to calculate temp. in F from C i.e f =  c*9/5+32
WAP to calculate temp. in C from F i.e c =  (f-32)*5/9
 */

// var r = 50
// var area = 3.14*r*r
// console.log(`Area if Circle = ${area}`)


// var a = 10
// var b = 90
// console.log(`Before swapping a = ${a} and b = ${b}`)

// var temp = a        //a = 10 b = 90  temp = 10      
// a = b               //a = 90 b = 90  temp = 10
// b = temp            //a = 90 b = 10

// a = a + b     //a = 100 b = 90
// b = a - b     //a = 100 b = 10
// a = a - b     //a = 90 b = 10

// console.log(`After swapping a = ${a} and b = ${b}`)


// var c = 37
// var f = c*9/5+32
// console.log(`Temp. in F = ${f}`)

// var f = 98.6
// var c = (f-32)*5/9
// console.log(`Temp. in C = ${c}`)

/*
Number()    : used to convert argument value into a number
parseInt()  : used to convert argument value into a number(integer)
parseFloat()  : used to convert argument value into a number(float)
 */

/*
Reading Input from User:

prompt() : used to read input from a user through keyboard
           it return input value into string format

Note : prompt() document.write() can't used in node.js they can only used in front end
*/

// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var sum = a + b
// document.write(`${a} + ${b} = ${sum}`)
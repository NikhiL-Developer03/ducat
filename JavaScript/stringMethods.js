/*
String: -> collection of Characters or Sequence of Characters or array of Characters
        -> immutable data type
        -> index start with 0

        eg. name,email,password etc
 */

//String Constant
// var a = 'Hello World'
// var b = "Ducat Education Noida"
// var c = `
//         Ducat
//         Education
//         Noida
//         `
// console.log(a,typeof a)
// console.log(b,typeof b)
// console.log(c,typeof c)

//String using Loops
var a = "Ducat Education Noida"

// //string using for Loop
// for (let i = 0; i < a.length; i++){
//         console.log(a[i])
// }

// //string using while Loop
// let i = 0
// while (i < a.length) {
//         console.log(a[i])
//         i++
// }

//string using do while Loop
// let i = 0
// do {
//         console.log(a[i])
//         i++
// }while (i < a.length)


// //string using for in loop
// for(let i in a){
//         console.log(a[i])
// }

//string using for of loop
// for(let i of a){
//         console.log(i)
// }


//string methods
//charAt() return character at any specific index
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])

// console.log(a.charAt(0))
// console.log(a.charAt(1))
// console.log(a.charAt(2))
// console.log(a.charAt(3))
// console.log(a.charAt(4))

//charCodeAt(): return Unicode of first character of String if no argument is provided, and if argument is provided, then it return unicode of that particular character
// console.log(a.charCodeAt());

/*
A=65    a=97    0=48
B=66    b=98    1=49
-
Z=90    z=122   9=57
*/
// for(let i in a){
//         console.log(`${a[i]} = ${a.charCodeAt(i)}`)
// }

/*
fromCharCode(): convert a Unicode into Character
 */

// for(let i = 0;i<=10000;i++){
//         document.write(`${i} = ${String.fromCharCode(i)} | `)
// }

/*
indexOf()     :   return first index of any substring in string
                  and return -1 if item not found in string
lastIndexOf() :   return last index of any substring in string
                  and return -1 if item not found in string
search()      :   return first index of any substring in string
                  and return -1 if item not found in string
includes()    :   check whether a substring is exist in string or not it return true of false
*/
// console.log(a)
// console.log(a.indexOf("cat"))
// console.log(a.lastIndexOf("cat"))
// console.log(a.search("cat"))
// console.log(a.includes("cat"))

// console.log(a.indexOf("javascript"))
// console.log(a.lastIndexOf("javascript"))
// console.log(a.search("javascript"))
// console.log(a.includes("javascript"))


// Copy a string into another
// var b = a
// console.log(`copied String is "${b}"`)


//concat() : concat one or more strings in a string
// var a = "Ducat"
// var b = "Education"
// var c = "Noida"
// var d = a+b+c
// var e = a.concat(b,c)
// console.log(d)
// console.log(e)

/*
startsWith() : check whether a string start with specific
               sub string or not
endsWith()   : check whether a string end with specific sub
               string or not
*/
// var msg = prompt("Enter Your Message")
// if (msg.startsWith("www"))
//         document.write(`"${msg}" is a Domain Name`)
// else if (msg.endsWith("@gmail.com"))
//         document.write(`"${msg}" is a Gmail Id`)
// else
//         document.write(`"${msg}" is a Normal Message`)

//toUpperCase()
//toLocaleUpperCase()

//toLowerCase()
//toLocaleLowerCase()

// console.log(a)
// console.log(a.toLowerCase())
// console.log(a.toLocaleLowerCase())
// console.log(a.toUpperCase())
// console.log(a.toLocaleUpperCase())

//substr() return a substring from pos to number of characters
//substring() return a substring from pos to pos  characters
//slice()

var a = "Javascript is High Level Programming Language used to Develop WebApplications"
// console.log(a)
// console.log(a.substr(20,25))//print 25 characters form 20th index
// console.log(a.substring(20,25))//print characters form 20th index to 25th index
// console.log(a.slice(20,25))//print characters form 20th index to 25th index
// console.log(a.slice(-25))//print last 25 characters form string


//repeat()  :   create number of copies of a string
// console.log(a.repeat(50))

//replace()
//replaceAll()
// console.log(a)
// console.log(a.replace(" ","-"))
// console.log(a.replaceAll(" ","-"))

//split()  :return array of substrings
// console.log(a.split())
// console.log(a.split(" "))

// console.log(a.split(" ").map(x=>`"${x}" has Length ${x.length}`))
// console.log(a)
// console.log(a.split("").reverse().join(""))
// console.log(a.split(" ").reverse().join(" "))

//trim() remove all leading white space characters from string from both side
//trimStart()remove all leading white space characters from string from left side
//trimEnd()remove all leading white space characters from string from right side

// var a  = "          Ducat Education Noida     "
// var b = a.trim()
// var c = a.trimStart()
// var d = a.trimEnd()
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)
// console.log(d.length)

/*
localeCompare() : compare two strings
                    return 0 if both string are same
                    return 1 if first string comes last in
                    alphabetical order
                    return -1 if first string comes firt in
                    alphabetical order
*/
// var a = "Aman"
// var b = "Amit"
// console.log(a.localeCompare(b))
// console.log(b.localeCompare(a))
// console.log(b.localeCompare(b))

//check whether a string is palindrom or not
var a = prompt("Enter the String")
// if (a === a.split("").reverse().join(""))
if (!a.localeCompare(a.split("").reverse().join("")))
        document.write(`"${a}" is Palindrome`)
else
        document.write(`"${a}" is not Palindrome`)

/*
  Array: 
    -> collection of items arrangement in contiguous order
    -> can contain duplicate items
    -> can contain differnt type value
    -> mutable data type


    Note: Array index always start with ZERO

    index : offset value i.e difference of desired element from base element
    syntax:
    var arrayObject=[item1,item2,item3,....,itemN]
 */

//1st type to create an array using array literal style
// var a = [10,20,30,40,50,60,"Ducat","Nitin",true,false,70,80,90,100]
// console.log(a)
// console.log(a[0])
// console.log(a[8])

//2nd type to create an array using empty array
// var a = []
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40,50,60,70,80,90,100)
// console.log(a)

// var a = [10,20,30]
// a[100] = 1000
// console.log(a.length)
// console.log(a)


//3rd type : Array constructor
// var a = Array(10,20,30,40,50,60,70,80,90,100)
// console.log(a)

// var a = Array(10)
// console.log(a.length)
// a[100] = 1000
// console.log(a.length)

// console.log(a)

//4th type : Array constructor
// var a = Array()
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40,50,60,70,80,90,100)
// console.log(a)

var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//accessing array elements using normal for loop
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i])
// }

//accessing array elements using while loop
// let i = 0
// while (i < a.length) {
//   console.log(a[i])
//   i++
// }

//accessing array elements using do while loop
// let i = 0
// do {
//   console.log(a[i])
//   i++
// }while (i < a.length)


//accessing array elements using for in loop
// for(let i in a){
//     console.log(a[i])
// }

//accessing array elements using for of loop
// for (let i of a) {
//   console.log(i)
// }


//toString convert an array into string and use , as separator

/*
join() convert an array into string and you can specify
         seperator bydefault join function use , as seperator
*/
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)
// console.log(a.toString())
// console.log(a.join())
// console.log(a.join(" "))
// console.log(a.join(":"))
// console.log(a.join("|"))

/*
array: push() pop() shift() unshift() splice() delete
push():   insert one or more then one element in last of an array
          and return updated length of array
pop()     delete an element from last of an array and return deleted
          array element
unshift() insert one or more then one element in starting
          of an array and return updated length of array
shift()   delete an element from first position of an array and return deleted array element
splice()  used to insert or delete or update elements from any specific position of array and return array of deleted elements
          syntax:
          array.splice(pos,numberOfItemToDelete,[itemstoInsert])

delete  : it delete an item from array and leave empty space
*/
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)

// console.log("Updated Length ",a.push(110))
// console.log(a)

// console.log("Updated Length ",a.push(120,130,140,150))
// console.log(a)


// console.log("Updated Length ",a.unshift(5))
// console.log(a)

// console.log("Updated Length ",a.unshift(1,2,3,4))
// console.log(a)

// console.log("Deleted Array Element is ",a.pop())
// console.log("Deleted Array Element is ",a.pop())
// console.log("Deleted Array Element is ",a.pop())
// console.log("Deleted Array Element is ",a.pop())
// console.log("Deleted Array Element is ",a.pop())
// console.log(a)

// console.log("Deleted Array Element is ",a.shift())
// console.log("Deleted Array Element is ",a.shift())
// console.log("Deleted Array Element is ",a.shift())
// console.log("Deleted Array Element is ",a.shift())
// console.log("Deleted Array Element is ",a.shift())
// console.log(a)

// console.log("Deleted Elements = ",a.splice(3,5))
// console.log(a)

// console.log("Deleted Elements = ",a.splice(3,0,33,34,35,36,37))
// console.log(a)

// delete a[2]
// delete a[5]
// delete a[8]
// console.log(a)

//slice() return a list of items from pos to pos
// var a = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250]
// console.log(a)
// console.log(a.slice(5,15))  //return elements from 5 to 15th index
// console.log(a.slice(15))    //return elements from 15th index
// console.log(a.slice(-15))   //return last 15 elements


//concat()
// var a = [1,2,3,4,5]
// var b = [10,20,30,40,50]
// var c = [100,200,300,400,500]
// var d = ["Nitin","Amit","Sumit","Tarun"]
// var e = [true,false,false,false,true]
// var f = a.concat(b,c,d,e)
// console.log(f)

//entries() generate an iterator which contains key and value of items
//accessing array elements using entries()

// for(let i of a.entries()){
//   console.log(i)
// }

//includes() return true if array conatins an item else return false
//indexOf()  return lowest index of item from array and return -1
//            if item not found in Array
//lastIndexOf()  return highest index of item from array and
//               return -1 if item not found in Array

var a = [10, 20, 30, 40, 40, 50, 50, 50, 60, 70, 80, 90, 50, 100]
console.log(a.includes(50))
console.log(a.includes(500))

console.log(a.indexOf(50))
console.log(a.indexOf(500))

console.log(a.lastIndexOf(50))
console.log(a.lastIndexOf(500))

//reverse()
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(`Original Array is ${a}`)
// a.reverse()
// console.log(`Reversed Array is ${a}`)


//find()          : return the item from array which pass a test
//findLast()      : return the last item from array which pass a test
//findIndex()     : retunn the index of item from array which pass a test
//findLastIndex() : retunn the highest index of item from array which pass a test
//map()           : return an array of containg return values of callback function after checking condition
//filter()        : return an array of items that pass a test

var a = [12, 13, 6, 4, 15, 2, 3, 454, 6, 45, 34, 2, 43, 34, 5, 45, 5, 34, 34, 33, 23, 23, 323, 32]

// function check(item) {
//   return item % 5 == 0
// }

// function check(item) {
//   let flag = false
//   for (let i = 2; i <= item ** 0.5; i++) {
//     if (item % i == 0) {
//       flag = true
//       break
//     }
//   }
//   return flag === false && item >= 2 ? true : false
// }
// console.log(a.find(check))
// console.log(a.findLast(check))
// console.log(a.findIndex(check))
// console.log(a.findLastIndex(check))
// console.log(a.map(check))
// console.log(a.filter(check))

// console.log(a.find(item=>item%5==0))
// console.log(a.findLast(item=>item%5==0))
// console.log(a.findIndex((item)=>item%5==0))
// console.log(a.findLastIndex((item)=>item%5==0))
// console.log(a.map((item)=>item%5==0))
// console.log(a.filter((item)=>item%5==0))

// reduce()
var a = [10,20,30,40,50,60,70,80,90,100]

// function sum(prev,current){
//   return prev+current
// }
// console.log(a.reduce(sum))

// console.log(a.reduce((prev,current)=>prev+current))

// forEach()
// a.forEach(x=>console.log(x))
// a.forEach(x=>console.log(x*5))
// a.forEach(x=>console.log(x/5))

// sort()
// var a = ["Nitin","Amit","Sumit","Tarun","Varun","Ankit","Ankita","Kritika","Krishika","Sonu","Prithvi"]
// console.log(a)
// // a.sort() //ascending Order
// a.sort((x,y)=>y.localeCompare(x)) //Descending Order
// console.log(a)

// var a = [2,23,435,34,54,657,67,43,4,56,7,4,213,4,56,4,35,6,75,4,56,78,65,4,3,1000,11,10000]
// console.log(a)
// a.sort((x,y)=>x-y)  //Ascending Order
// a.sort((x,y)=>y-x)  //Descending Order
// console.log(a)

//Array Destructuring

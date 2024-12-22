/**
 *  oops:
 *  -> designed by Bjarne Stroustroup(C++ Founder)
 *  -> object oriented programming Structure
    oops is a computer science term which defines a well
    structured series or steps to construct a computer
    application which composed of multiple objects,
    each object can handle data, get and transfer 
    messages to each other, since objects are not
    dependent on each other oops is seen as being
    more flexible then procedural approach

    OOPS Approachs:
    1. Abstraction  :   Data Hiding
    2. Encapsulation:   Binding data and function in a single unit
    3. Polymorphism :   Many forms of Single Entity
    4. Inheritance   :   Code Reusability

    class and Object is required to implement oops

    class: class is a technique by which we can define a new
           data type as we required

           class is a blue print of objects

           class is a collection of properties and behaviours
           where properties means variables of different-different
           data types and behaviors means various functions

           class is a logical entity only, that mean class doesn't 
           have physical existance in memory, until its instance
           is created, and name of instance is called object
    syntax:
    class ClassName{
        constructor(){
            ----
        }
        method1(){
            ----
        }
        method2(){
            ----
        }
        --
    }
 */
// class Test{
//     show(){
//         console.log(`In show() of Test Class`)
//     }
//     display(){
//         console.log(`In display() of Test Class`)
//     }
// }
// var obj = new Test()
// obj.show()
// obj.display()


// class Add {
//     setData(x, y) {     //x and y are local variable of setData
//         this.a = x  
//         this.b = y
//         this.sum = x + y
//         //this.a this.b and this.sum are instance members of Add class
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var obj1 = new Add()
// var obj2 = new Add()

// obj1.setData(10,20)

// obj1.display()
// obj2.display()

// class Magical {
//     setData(x) {
//         this.n = x
//     }
//     check() {
//         let sum = 0
//         let num = this.n
//         while (num != 0) {
//             let r = num % 10
//             sum = sum + r
//             num = parseInt(num / 10)
//         }
//         num = sum
//         let rev = 0
//         while (num != 0) {
//             let r = num % 10
//             rev = rev * 10 + r
//             num = parseInt(num / 10)
//         }
//         if (sum * rev === this.n)
//             console.log(`${this.n} is a Magical Number`)
//         else
//             console.log(`${this.n} is not a Magical Number`)
//     }
// }
// var obj = new Magical()

// obj.setData(81)
// obj.check()

// obj.setData(1458)
// obj.check()

// obj.setData(1729)
// obj.check()

// obj.setData(12345)
// obj.check()

/*
OOPS Approachs:
1. Abstraction  :   Data Hiding i.e hiding complexity
                    showing functionality, we can hide
                    members using access specifiers
                    like public,private and protected,
                    (javaScript Doesn't Support
                    Abstraction)

2. Encapsulation:   Binding Data Members with
                    Member Functions/Methods
                    or
                    Wrapping-up data members with
                    member function

3. polymorphism :   Many forms of single entity
            1. Method Overloading : if we define
                    more then one function in a class
                    with same name but with different
                    signature(either number of arguments
                    must be different or their types
                    must be different)(JavaScript Doesn't
                    Support Method Overloading)
            2. Constructors and Destructor
                    we can use user defined constructor in JavaScript
                    but we can't use user defined destructor in JS
            3. Method Overriding: if both parent class
                    and child class having same named
                    members then child class override
                    parent's member i.e child cass can
                    inherit only those member from
                    parent which child doesn't have
                    JS Support This Concept
            4. Operator Overloading:
                    if we provide user defined
                    defination to an existing
                    operator then this concept is
                    called operator overloading
                    JS Doesn't Support this feature
4. Inheritance: if we reuse member of any existing
                class in a new class is called
                inheritance
                JS Support this Concept


class with constructor
Constructor:
    -> a special member method of class which provide memory
       initialization to a class object
    -> there is no need to call constructor it called automatically
       when object is declared with help of new
    -> it can be parameterised
    -> if we not provide defination to a constructor in class
        then compiler(JIT) provide defination to constructor
    -> we can't return any value from a constructor
 */
// class Test{
//     constructor(){
//         console.log("Constructing Class Test")
//     }
//     show(){
//         console.log("In show() of Test Class")
//     }
//     display(){
//         console.log("In display() of Test Class")
//     }
// }
// var obj = new Test()
// obj.show()
// obj.display()

// class Add {
//     constructor(x = 0, y = 0) {     //x and y are local variable of setData
//         this.a = x
//         this.b = y
//         this.sum = x + y
//         //this.a this.b and this.sum are instance members of Add class
//     }
//     display() {
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var obj1 = new Add(10, 20)
// var obj2 = new Add()

// obj1.display()
// obj2.display()

/*
 * Inheritance:
 * oops approach provide a feature to reuse all members
 * of any previous existing class in a new class
 *
 * eg. if a class named B inherit class A then class
 * B can reuse all member of class A so class B
 * is called child class,derived class or subclass
 * and class A is called parent class,super class
 * or base class
 *
 * types:
 *  1. Single Inheritance
 *  2. multilevel Inheritance
 *  3. Hierarchical Inheritance
 *
 * syntax:
 *  class Parent{
 *  -----
 *  -----
 *  }
 *  class Child extends Parent{
 *      ----
 *      ----
 * }
 * Note: a child can access only those member of class
 * parent which child doesn't have
 */

// class Test{
//     show1(){
//         console.log(`In show1() of Test Class`)
//     }
//     display(){  //overridden method
//         console.log(`In display of Test Class`)
//     }
// }
// class Child extends Test{
//     show2(){
//         console.log(`In show2() of Child Class`)
//     }
//     display(){
//         console.log(`In display of Child Class`)
//     }
// }
// var obj = new Child()
// obj.show1()
// obj.show2()
// obj.display()


//Accessing Overridden Method
// class Test{
//     display(){  //overridden method
//         console.log(`In display of Test Class`)
//     }
// }
// class Child extends Test{
//     display(){
//         super.display() //accessing Overridden Method
//         console.log(`In display of Child Class`)
//     }
// }
// var obj = new Child()
// obj.display()


//constructor in parent class
// class Test{
//     constructor(){
//         console.log(`Constructing Class Test`)
//     }
//     show1(){
//         console.log(`In show1() of Test Class`)
//     }
// }
// class Child extends Test{
//     show2(){
//         console.log(`In show2() of Child Class`)
//     }
// }
// var obj = new Child()
// obj.show1()
// obj.show2()


//Constructor in child class
// class Test{
//     show1(){
//         console.log(`In show1() of Test Class`)
//     }
// }
// class Child extends Test{
//     constructor(){
//         super()
//         console.log(`Constructing Class Child`)
//     }
//     show2(){
//         console.log(`In show2() of Child Class`)
//     }
// }
// var obj = new Child()
// obj.show1()
// obj.show2()


//Single Inheritance: when a single child class inherit a single parent class
// class Test {
//     constructor(a, b) {
//         this.a = a
//         this.b = b
//     }
// }
// class Child extends Test {
//     display() {
//         console.log(`${this.a} + ${this.b} = ${this.a + this.b}`)
//     }
// }
// var obj = new Child(10,20)
// obj.display()

class Test {
  constructor(a, b) {
      this.a = a
      this.b = b
  }
}
class Child extends Test {
  constructor(a, b, c) {
      super(a, b)
      this.c = c
  }
  display() {
      console.log(`${this.a} + ${this.b} + ${this.c} = ${this.a + this.b + this.c}`)
  }
}
var obj = new Child(10, 20, 30)
obj.display()

//mulilevel Inheritance: when a child class inherit another child class


//Hierarchical Inheriatnce: when a single parent class inherit by more then one child class
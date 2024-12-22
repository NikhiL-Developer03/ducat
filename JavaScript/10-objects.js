/*
-> objects is data type which store information in pair of keys and values
-> objects keys must be unique, if duplicate key is used, then only last key will be used
-> objects values may be duplicate
-> object is mutable
*/
//object literal 
var emp = {
  id: 1001,
  name: "Nitin Chauhan",
  dsg: "Trainer",
  salary: 150000,
  city: "Faridabad",
  state: "Haryana"
}
// console.log(emp)

//Empty object literal
// var emp = {}
// emp.id = 1001
// emp['name'] = "Nitin Chauhan"
// emp["dsg"] = "Trainer"
// emp[`salary`] = 178000
// emp.city = "Noida"
// emp.state = "UP"
// console.log(emp)

//new Object()
// var emp = new Object()
// emp.id = 1001
// emp['name'] = "Nitin Chauhan"
// emp["dsg"] = "Trainer"
// emp[`salary`] = 178000
// emp.city = "Noida"
// emp.state = "UP"
// console.log(emp)


//Accessing Object Values with help of keys
// console.log(emp)
// console.log(emp.id)
// console.log(emp['name'])
// console.log(emp["dsg"])
// console.log(emp[`salary`])

//Accessing Object values through Loop
// for(let key in emp){
//     console.log(`${key} = ${emp[key]}`)
// }

//adding an item to existing object
// emp.email = "vishankchauhan@gmail.com"
// emp['phone'] = "9873848046"
// emp["subject"] = "Mern Stack"
// emp[`address`] = "House Number 124"
// console.log(emp)


//deleting object item
// delete emp.name
// delete emp['salary']
// delete emp["dsg"]
// delete emp[`city`]
// console.log(emp)

//Nesting of Objects
var emp = {
  id: 1001,
  name: "Nitin Chauhan",
  dsg: "Trainer",
  salary: 175000,
  subject: ["Mern Stack", "Mean Stack", "Python Full Stack", "PHP Full Stack"],
  active: true,
  address: {
      addressLine1: {
          house: "123",
          floor: "2nd",
          locality: "ABC Nagar"
      },
      addressLine2: {
          landmark: "Near Water Plant",
          pin: 121002
      },
      city: "Faridabad",
      state: "Haryana"
  }
}
// console.log(emp)
// console.log(emp.subject)
// console.log(emp.subject[0])
// console.log(emp.address)
// console.log(emp.address.addressLine1)
// console.log(emp.address.addressLine1.house)

//function in Objects
// var test = {
//     a:10,
//     b:20,
//     fun1(){
//         console.log("In fun1 regular function")
//     },
//     fun2(){
//         console.log("In fun2 regular function")
//     },
//     fun3:function(){
//         console.log("In fun3 anonymous function")
//     },
//     fun4:function(){
//         console.log("In fun4 anonymous function")
//     },
//     fun5:()=>console.log("In fun5 fat arrow function"),
//     fun6:()=>console.log("In fun6 fat arrow function"),
// }
// test.fun1()
// test.fun2()
// test.fun3()
// test.fun4()
// test.fun5()
// test.fun6()

// var test = {
//     a:10,
//     b:20,
//     display1(){
//         console.log(this)
//         console.log(`In display1() a = ${this.a} and b = ${test.a}`)
//     },
//     display2:function(){
//         console.log(this)
//         console.log(`In display2() a = ${this.a} and b = ${test.a}`)
//     },
//     display3:()=>{
//         console.log(this)
//         console.log(`In display3() a = ${test.a} and b = ${test.a}`)
//     }
// }
// test.display1()
// test.display2()
// test.display3()

// var test = {
//     a:10,
//     b:20,
//     display(){
//         this.sum = this.a+this.b
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//         // test.sum = test.a+test.b
//         // console.log(`${test.a} + ${test.b} = ${test.sum}`)
//     }
// }
// test.display()

// var emp = {
//     id: 1001,
//     name: "Nitin Chauhan",
//     dsg: "Trainer",
//     basicSalary: 78000,
//     calculate() {
//         this.ta = this.basicSalary * 8 / 100
//         this.da = this.basicSalary * 10 / 100
//         this.hra = this.basicSalary * 12 / 100
//         this.ma = this.basicSalary * 14 / 100
//         this.gross = this.basicSalary + this.ta + this.da + this.hra + this.ma
//         this.itax = this.gross * 10 / 100
//         this.net = this.gross - this.itax
//     },
//     display() {
//         console.log(`
//                 Employee Id         :   ${this.id}
//                 Name                :   ${this.name}
//                 Designation         :   ${this.dsg}
//                 Basic Salary        :   ${this.basicSalary}
//                 Ta                  :   ${this.ta}
//                 Da                  :   ${this.da}
//                 Hra                 :   ${this.hra}
//                 Ma                  :   ${this.ma}
//                 Gross Salary        :   ${this.gross}
//                 Income Tax          :   ${this.itax}
//                 Net Salary          :   ${this.net}
//             `)
//     }
// }
// emp.calculate()
// emp.display()


//getter and setter
//get
//set
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     set setSalary(num){
//         this.salary = num
//     },
//     get display(){
//         console.log(`
//                 Id          :   ${this.id}
//                 Name        :   ${this.name}
//                 Designation :   ${this.dsg}
//                 Salary      :   ${this.salary}
//             `)
//     }
// }
// emp.setSalary = 156700
// emp.display


//object destructuring
// var emp = {
//     id: 1001,
//     name: "Nitin Chauhan",
//     dsg: "Trainer",
//     salary: 156000,
//     city: "Faridabad",
//     state: "Haryana"
// }
// console.log(`
//         Id          :   ${emp.id}
//         Name        :   ${emp.name}
//         Designation :   ${emp.dsg}
//         Salary      :   ${emp.salary}
//         City        :   ${emp.city}
//         State       :   ${emp.state}
//     `)
// var { id, name, dsg, salary, city, state } = emp
// console.log(`
//     Id          :   ${id}
//     Name        :   ${name}
//     Designation :   ${dsg}
//     Salary      :   ${salary}
//     City        :   ${city}
//     State       :   ${state}
// `)

//class using object constructor
// var Employee = function (id, name, dsg, salary, city, state) {
//     this.id = id
//     this.name = name
//     this.dsg = dsg
//     this.salary = salary
//     this.city = city
//     this.state = state
// }
// var emp1 = new Employee(1001,"Nitin Chauhan","Trainer",154000,"Faridabad","Haryana")
// var emp2 = new Employee(1002,"Deepk","Trainer",104000,"Ghaziabad","UP")
// var emp3 = new Employee(1003,"Rahul Sharma","Manager",254000,"Kanpur","UP")

// console.log(emp1)
// console.log(emp2)
// console.log(emp3)


//object prototype : Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.

//need of object property

//solution
// var Employee = function (id, name, dsg, salary, city, state) {
//     this.id = id
//     this.name = name
//     this.dsg = dsg
//     this.salary = salary
//     this.city = city
//     this.state = state
// }
// var emp1 = new Employee(1001,"Nitin Chauhan","Trainer",154000,"Faridabad","Haryana")
// var emp2 = new Employee(1002,"Deepk","Trainer",104000,"Ghaziabad","UP")
// var emp3 = new Employee(1003,"Rahul Sharma","Manager",254000,"Kanpur","UP")

// Employee.prototype.cmp = "Ducat"
// Employee.prototype.display = function(){
//     console.log(`
//             ID          :   ${this.id}
//             Name        :   ${this.name}
//             Designation :   ${this.dsg}
//             Salary      :   ${this.salary}
//             City        :   ${this.city}
//             State       :   ${this.state}
//             Company     :   ${this.cmp}
//         `)
// }
// emp1.display()
// emp2.display()
// emp3.display()

//Object Built-in Methods

// 1. Object.keys()   :    return an array containing all keys of object
// 2. Object.values()   :    return an array containing all values of object
// 3. Object.enteries()   :    return an array containing key value of object elements

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:145000,
//     city:"Faridabad",
//     state:'Haryana'
// }
// console.log(Object.keys(emp))
// console.log(Object.values(emp))
// console.log(Object.entries(emp))


// 4. Object.assign()  :   used to copy an object elements into other
// var obj1 = {
//     a: 10,
//     b: 20
// }
// // var obj2 = obj1      //Shallow Copy
// var obj2 = {}
// Object.assign(obj2, obj1)//Deep Copy
// console.log(obj1)
// console.log(obj2)

// obj2.a = 100
// obj2.b = 200
// console.log(obj1)
// console.log(obj2)

// 5. Object.create() : used to create a new object, it make already exist object as prototype on newly created object
// var obj1 = {
//     a:10,
//     b:20
// }
// var obj2 = Object.create(obj1)
// console.log(obj2.a,obj2.b)

// 6. Object.isFrozen() : check whether an object is freeze or not
// 7. Object.freeze() : freezes an Object, prevent properties to be add,delete or update
// Object.freeze(emp)
// var obj = {
//     a:10,
//     b:20
// }
// Object.freeze(obj)
// console.log(Object.isFrozen(obj))
// obj.c = 30
// obj.b = 200
// delete obj.a
// console.log(obj)

// 8. Object.isSealed() : check whether an object is sealed or not
// 9. Object.seal() : seal an Object, prevent properties to be added or deleted but updation can possible
// var obj = {
//     a:10,
//     b:20
// }
// Object.seal(obj)
// console.log(Object.isSealed(obj))
// obj.c = 30
// obj.b = 200
// delete obj.a
// console.log(obj)


//10. Object.getOwnPropertyDescriptor(object,property)  : return description of perticular property
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer"
// }
// console.log(Object.getOwnPropertyDescriptor(emp,"id"))
// console.log(Object.getOwnPropertyDescriptor(emp,"name"))
// console.log(Object.getOwnPropertyDescriptor(emp,"dsg"))

// 11. Object.setPrototypeOf(object,prototype) : used to set Prototype of any object
// var obj1 = {
//     a:10,
//     b:20
// }
// var obj2 = {
//     c:30,
//     d:40
// }
// Object.setPrototypeOf(obj2,obj1)
// console.log(obj2)
// console.log(obj2.a,obj2.b)

//12. Object.getPrototypeOf(object) : used to get Prototype of any object
// console.log(Object.getPrototypeOf(obj2))

//13. Object.is() : compare object elements
var emp = {
  id: 1001,
  name: "Nitin",
  dsg: "Trainer"
}
// console.log(Object.is(emp.id,"1001"))
// console.log(Object.is(emp.id,1001))

// 14. Object.defineProperty(object,property,description) : used to set Property with details
// Object.defineProperty(emp,"email",{
//     type:String,
//     value:"vishankchauan@gmail.com",
//     writable:false
// })
// console.log(Object.getOwnPropertyDescriptor(emp,"email"))

// 15. Object.defineProperties(object,{property1:description1,property2:description2}) : used to set Properties with details
Object.defineProperties(emp, {
  email: {
      value: "vishankchauhan@gmail.com",
      writable: false
  },
  phone: {
      value: "9873848046",
      writable: false
  }, 
  city: {
      value: "Noida",
      writable: false
  }
})
console.log(Object.getOwnPropertyDescriptor(emp,"email"))
console.log(Object.getOwnPropertyDescriptor(emp,"phone"))
console.log(Object.getOwnPropertyDescriptor(emp,"city"))



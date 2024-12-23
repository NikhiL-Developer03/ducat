// class add{
//   constructor(a,b){
//     this.a = a;
//     this.b = b;
//   }
//   display(){
//     return this.a+this.b;
//   }
// }

// const res = new add(10,20);
// console.log(res.display());

// class father {
//   display(){
//     console.log(`display father ka`)
//   }

// }
// class son extends father{
//   display(){
//     super.display();
//     console.log(`display son ka`)
//   }
// }

// const obj = new son();
// obj.display();
// obj.display();

// class father {
//   display(){
//     console.log(`display father ka`)
//   }

// }

// constructor call another constructor
// class son extends father{
//   constructor(){
//     super();
//     console.log(`son ka constructor`)
//   }
//   display(){
//     super.display();
//     console.log(`display son ka`)
//   }
// }

// const obj = new son();
// obj.display();

//having two constructor and sharing data between them

// class sumofThree{
//   constructor(a,b){
//     this.a = a;
//     this.b = b;
//   }
// }
// class child extends sumofThree{
//   constructor(a,b,c){
//     super(a,b);
//     this.c = c;
//   }
//   display(){
//     console.log(`${this.a+this.b+this.c}`);
//   }
// }

// const childObj = new child(10,20,30)
// childObj.display();
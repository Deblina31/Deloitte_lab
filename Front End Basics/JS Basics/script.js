// function add(a,b){
//     console.log(a+b);
// }
 
// function addNum(a,b){
//     return a+b;
// }
 
// const addNum = (a,b)=> a+b;
 
// const greet = x => "Hello World" + x;
 
 
// // let num3 = 100;
 
// // const addNum = (num1,num2) => {
// //     console.log(num3);
// //     const user = "foobar";
   
// //     let num4 = 200;
// //     return num1+num2;
// // }
 
// // console.log(num3);
// // console.log(num4);
// console.log(addNum(2,3));
 
 
// const timer = {
//     seconds: 0,
//     start: function(){
//         setInterval(function(){
//             this.seconds++;
//             console.log(this.seconds);
//         }, 1000)
//     }
// }
 
const timer = {
    seconds: 0,
    start: function(){
        setInterval(()=>{
            this.seconds++;
            console.log(this.seconds);
        }, 1000)
    }
}
 
timer.start();





/*class Person {
  constructor(name) {
    this._name = name;
  }
  hello() {
    return "Hello I am " + this._name + ".";
  }
  get name() {
    return this._name;
  }
  set name(nme) {
    this._name = nme;
  }
}

class Programmer extends Person {
  hello() {
    return super.hello() + "I am also a programmer.";
  }
}

let p1 = new Person("vishwas");
console.log(p1.hello());
p1._name="John";

let p2 = new Programmer("Ajith");
console.log(p2.hello());*/
 

/* WRONG CODE-> 

class Person{
    constructor(name){
        this.name = name
    }
    hello(){
        return "Hello I am "+ this.name + '.'
    }
    get name(){
        return this.name;
    }
    set name(nme){
        this.name = nme
    }
}
 
class Programmer extends Person{
    hello(){
        return super.hello() + "I am also a programmer."
    }
}
 
let p1 = new Person("vishwas");
console.log(p1.hello());
p1.name("John")
 
let p2 = new Programmer("Ajith");
console.log(p2.hello());*/
 
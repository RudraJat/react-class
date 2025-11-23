

const Caprac =()=>{

// ---UNIT:1---

//Q.1 Write a JS program to demonstrate var,let and const
// var a=1;
// let b=2;
// const c=3;

// console.log(a);
// console.log(b);
// console.log(c);

// var a=4;
// b=5; // you can't re-declare it 
// // c=6; you cant re-assign it

// console.log(a);
// console.log(b);
// console.log(c);

//Q.2 Write a program using an arrow function to find the square of a number.
// const sq=(n)=>n*n;
// console.log(sq(3));

//Q.3Create a class Student and display details.
// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     display(){
//         console.log("Name: ",this.name);
//         console.log("Age: ",this.age);
//     }
// }

// const s1=new Student("Rudra", 20);
// s1.display();

//Q.4 All IMPORTANT Array Methods Programs
//1. map()
// const arr=[1,2,3,4,5,6];
// const add2 = arr.map((n)=>n+2);
// console.log(add2);

//2. filter
// const arr=[1,2,3,4,5,6];
// const  great4 = arr.filter((n)=>n>4);
// console.log(great4);

//3. concat
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const res= arr1.concat(arr2);
// console.log(res);

//4. reduce
// const arr1=[1,2,3,4,5,6];
// const total=arr1.reduce((sum,n)=>sum+=n,0);
// console.log(total);

//Q.5 Use SPREAD and REST operator
// const arr = [1,2,3];
// const arr2=[...arr,4,5];
// console.log(arr2);


// function sum(...num){
//     return num.reduce((total,n)=>total+=n);
// }
// console.log(sum(1,2,3,4,5,6));




};
export default Caprac;
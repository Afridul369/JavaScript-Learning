// Data Types are of 2 varities

// 1. Primitive Data Types
// 2. Reference(non-Primitive) Data Types

// 1. Primitive Data Types
// {String,Number,boolean,Null,undefined,Symbol,bigint}

let score = 100
// console.log(typeof score); // number
let login = null 
// console.log(typeof login); // object
// let email; // or
let email = undefined;
// console.log(typeof email); // undefined
let bignumber = 1651451321654615n
// console.log(typeof bignumber);

let id = Symbol('12345')
let id2 = Symbol('12345')
// console.log(id === id2);

// 2. Reference Data Types
// {Array,Object,Function}

// ARRAY
let heroes = ["iron man","spider man","hulk"]
// console.log( heroes);
// console.log( heroes[1]);

// OBJECTS
let MyObject = {
    name:"Abir",
    age:23
}
// console.log(MyObject['name']); // right way
// console.log(MyObject.name); // right way
// console.log(MyObject[0]); // NOT Right Way

//FUNCTION
let MyFunction = function(){
    // console.log("Hello Abir");
} 
// or
function abir (){
    // console.log("Hello Abir");
}
abir()
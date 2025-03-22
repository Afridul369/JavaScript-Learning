let score = "1"


// console.log(typeof score); // number => without string

//console.log(typeof score); // string 

let valueNumber = Number(score)
// console.log(valueNumber); // 99
// console.log(typeof valueNumber); // number => cz converted to Number

// "99" => 99
// "99abc" => NaN
// "99abc" => typeof = number which is not right

// null => 0  when converted to Number
// null => typeof = number

// undefinded => NaN  when converted to Number
// undefined => typeof = number

// true => 1  when converted to Number
// true => typeof = number

// false => 0  when converted to Number
// false => typeof = number

let logedIn = undefined

let booleanLogedIn = Boolean(logedIn)

// console.log(booleanLogedIn);
// console.log(typeof booleanLogedIn);

// "Abir" => true  when converted to Boolean
// "Abir" => typeof = Boolean

// "" => false  when converted to Boolean
// "" => typeof = Boolean

// 1 => true  when converted to Boolean
// 1 => typeof = Boolean

// 0 => false  when converted to Boolean
// 0 => typeof = Boolean

// null => false  when converted to Boolean
// null => typeof = Boolean

// undefined => false  when converted to Boolean
// undefined => typeof = Boolean

let Modern = 33

let stringModern = String(Modern)

console.log(stringModern);
console.log(typeof stringModern);

// null => null  when converted to String
// null => typeof = string

// undefined => undefined  when converted to String
// undefined => typeof = string















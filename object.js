const jsuser = {
    name : 'Abir',
    age : 25,
    email : ' abir123@gmail.com'
}
// Freeze 
Object.freeze(jsuser) 
 jsuser.email = ' abir123@yahoo.com'
//  console.log(jsuser.email); 
// here using freeze we can't change the value of email

jsuser.name = function(){
    return 'Afridul Hossain'
    // console.log('Afridul Hossain');
} 
// console.log(abir()); 
// jsuser.name e ekta new function assign koranor fole jsuser.name tar ager object value ta hariye felbe and replace hoye notun function ta boshbe
// Afridul Hossain, undefined => here inside of this function we will use return 'Afridul Hossain' for avoiding undefined

const nam = function(){
    return `My name is ${this.name}`
}
let nam2 = nam.bind(jsuser)
// console.log(nam2());   // ekhane this ta bairer object k access korte partese .bind r karone

const myuser = {
    name : 'Afridul',
    age : 30,
    email : ' a123@gmail.com'
}
 
// console.log(Object.keys(myuser));   // ['name', 'age', 'email']
// console.log(Object.values(myuser));   // [ 'Afridul', 30, ' a123@gmail.com' ]
// console.log(Object.entries(myuser));   // [  [ 'name', 'Afridul' ],[ 'age', 30 ],[ 'email', ' a123@gmail.com' ]  ]

const regularuser = {
    name : 'Afridul',
    age : 30,
    email : ' a123@gmail.com',
    fullname : {
        userfullname : {
            firstname : 'Afridul',
            lastname : 'Hossain',
        },
        address : {
            city : 'Dhaka',
            country : 'Bangladesh'
        }
    }
}
// console.log(regularuser.fullname.userfullname[1]);  // not acceptable ..undefined...cz this is an object not an array
// console.log(regularuser.fullname.userfullname.firstname);  // Right way

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'c', 4: 'd' }
// let obj3 = Object.assign( obj1, obj2)
// let obj3 = Object.assign( {},obj1, obj2) // duitai ekoi kaj kore
// console.log(obj3);   // { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }

let obj3 = {...obj1,...obj2}  // spraed operator (recommended)
// console.log(obj3);

const course = {
    coursename : 'JavaScript',
    price : '999',
    mentor : 'Afridul Hossain'
}
// console.log(course.mentor);  // Afridul Hossain
// console.log(course.price);  // evabe call korle prottek ta individually call korte hobe

const {coursename,price,mentor} = course
// console.log(price);  // 999
// console.log(coursename);  // JavaScript // evabe de structure korle bar bar course. ta likte hobe na
const {mentor:teacher} = course   // evabe de structure e mentor r nam o change kora jay
// console.log(teacher);  // Afridul Hossain
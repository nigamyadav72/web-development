//higher order functions

//types of function 

//1.regular fuction
//function functionName(){ block of code}
//eg.  funciton sayHello(){  console.log("Hello")}






//2.Anonymous function
//anonymous function is a function that has no name
//function(){ block of code}
//eg:-  function(){  console.log("Hello")}
//anonymous function is used as a value for a variable

//3.Named function
//const sayHello = function(){
// console.log("Hello")}
//yesma hamle function lai auta name deko xau tesle garda yeslai named function bhaninxa ra yo auta anonymous funciton nai ho jaslai name deko matra ho


//4.Arrow function
//()=>{
//   console.log("hello world")}
//no need to write funciton name
//const sayHello = ()=>{ console.log("Hello")}



// function sayHello(){
//     console.log("Hello, how are you?")
// }
// sayHello()


// const sayHello2 = ()=>{
//     console.log("Hello")
// }   
// sayHello2()



//function with argument and parameters

// function sum(a,b){//a and b are parameters
//     console.log(a+b)
// }

// sum(4,5)//4 and 5 are arguments




//5.immediately invoked function expression(IIFE)

// (function hello(){
//     console.log("Hello world")
// })()//yo function lai call garna ko lagi hamile () use gareko xau 


//$ le python ma f string jastai kam garxa dynamic string banauna milxa javascript ma 
// function hello(name="nigam"){
//     // console.log("Hello "+name)
//     console.log(`hello ${name}`)
// }
// hello("ram")

// const hello = (name="nigam")=>{
//     console.log("hello "+name)
// }
// hello()




//function which take another function as an argument or return function are called higher order function
var numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers.forEach((number)=>{
//     console.log(number)
// })

// var squares =[]
// numbers.forEach((number)=>{
//     squares.push(number *number)
// })
// console.log(squares)



//map function
//map function is used to create a new array from an existing array with modification
//yesle return garxa jun forEach le gardaina
// const squares = numbers.map((number)=>{
//     return number *number

// })
// console.log(squares)



//filter function
//yesle kei kura filter garirako hunxa
const evenNumbers = numbers.filter((number)=>{
    return number%2==0
})
console.log(evenNumbers)




//reduce function

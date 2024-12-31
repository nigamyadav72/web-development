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
// var numbers = [1,2,3,4,5,6,7,8,9,10]
//forEach function array ma matra use hunxa object ma use hudaina
// numbers.forEach((number)=>{
//     console.log(number)
// })

// var squares =[]
// numbers.forEach((number)=>{
//     squares.push(number *number)
// })
// console.log(squares)



//map function
//map function is used to create a new array from an existing array with modification interview ma sodhxa haita yesto kura haru

//map le fuction transform garxa ra new array banxa
//yesle return garxa jun forEach le gardaina
// const squares = numbers.map((number)=>{
//     return number *number

// })
// console.log(squares)



//filter function
//yesle kei kura filter garirako hunxa
// const evenNumbers = numbers.filter((number)=>{
//     return number%2==0
// })
// console.log(evenNumbers)




//reduce function
//
// var numbers = [1,2,3,4,5,6,7,8,9,10]
// numbers.reduce((accumulator,currentValue)=>{
//     console.log(currentValue)
// })


// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue
// },0)

//accumulator bhaneko microprocessor ko accumulator jastai ho yesle value rakhxa hold garxa 
//currentValue chai array value rakhdai janxa 
// console.log(sum)



//jati pani calculation or arithematic ko kura auxa tyo sabai higher order function (reduce ) bata garinxa

// const cartItems = [
//     {
//         productName: "ORice",
//         productPrice: 350,
//         qty : 4,
//         huhu : "haha",
//         haha : "hehe"
        

//     },
//     {
//         productName: "papad",
//         productPrice: 15,
//         qty : 1,
//         haha :'hehe',
//         huhu : "haha"

//     },
//     {
//         productName: "Momo",
//         productPrice: 150,
//         qty : 2,
//         haha : "hehe",
//         huhu : "haha"

//     },
//     {
//         productName: "Chowmein",
//         productPrice: 120,
//         qty : 4,
//         haha : "hehe",
//         huhu : "haha"

//     }
// ]


// const totalPrice = cartItems.reduce((accumulator,currentValue)=>{
//         return accumulator + (currentValue.productPrice * currentValue.qty)
// },0)

// console.log(totalPrice)


// newcartItems = cartItems.map((item)=>{
//     return {
//         productName: item.productName,
//         productPrice: item.productPrice,
//         qty: item.qty,
//     }

// })

// console.log(newcartItems)



//filter use garer condition match gardai chahiye jatiko matra pani jhikna sakxam hamle long array bata pani

// const output = cartItems.filter((item)=>{
//     return item.productPrice == 150
// })

// console.log(output)

// this is how we define normal object in javascript now we learn about object destructuring 
// const person = {
//     name : "nigam yadav",
//     age : 22
// }

// console.log(person.age)


//yesma hamle person.age bata age na nikalera object destructuring garim jasma 
//hamle person lai hatayera jj chaiya tyo kura lai curly{ } bracket ma lekhxam jasle j lekhim tesko value tesma lyayera rakhdinxa ra hamle direct age or name lekhera value pauxam

// const {age} = {
//     name : "nigam yadav",
//     age : 22
// }

// console.log(age)


//jati wata chahinxa teti wata rakhna milxa dekhako ho { } bracket ma
//plus hamle yeti name confusion ayo bhane alias dina milxa like maile name: nayaname rakhe bhane name ko nickname nayaname hunxa 
// const {age,name:nayaname} = {
//     name : "nigam yadav",
//     age : 22
// }

// console.log(age,nayaname)



// mathi object destructuring garya jastai array ko pani desrtructuring hunxa jasma hamle array lai [] bracket le denote garthim so tei bracket ma array ko name lai rakhim bhane direct array name bata 0th index lai access garna sakxam 

// const name = ["nigam yadav"]
// console.log(name[0])


//array destructing le auta matra element bhaye paxi kam garxa dherai bhayo bhane garna mildaina hai

// const [name] = ["nigam yadav"]
// console.log(name)


//auta lai matra access garxa jati wata huda pani

// const [name] = ["nigam yadav","manish"]
// console.log(name)



//here we use ... called spread/rest operator used to copy array or merge more array into one 
// const numbers = [1,2,3,4,5,6,7,8,9]
// const numbersCopy = [...numbers]
// console.log(numbersCopy)




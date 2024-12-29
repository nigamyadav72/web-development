//for loop (for(initialization; condition; increment/decrement){})
// for(var i =0; i<10; i++){
//     console.log(i,"Hello World");
// }


// var i = 0;
// while(i<10){
//     console.log(i,"Hello World");
//     i++;
// }


// let i=0;
// do{
//     console.log(i,"Hello World");
//     i++;
// }
// while(i<10)


// var person ={
//     name:"John",
//     age:30,
//     city:"New York"
// }
// console.log(person.name);


var person = {
    name: "John",
    age: 30,
    nationality: "nepali",
    address1: "itahari",
    address2: "kathmandu",
    address3: "pokhara",
    address4: "biratnagar",
    address5: "dharan",
    address6: "damak",
}
//for in loop bata both array and object ko loop garna milxa 
// for(let key in person){
//     console.log(person[key]);
// }


var names = ["John","Doe","Smith","Alex","Tom"];

//for in loop for array
// for(let index in names){
//     console.log(names[index])
// }


//for loop for array
// for(var i=0; i<names.length; i++){
//     console.log(names[i]);
// }


//for of loop for array
// for(let name of names){
//     console.log(name);
// }




var person1 = {
    status: 200,
    message: "Files fetched successfully",
    files: [
        {
            _id: "67716d34522ded1f8a3667a3",
            name: "Lab1AI.pdf",
            userId: "397411",
            ipAddress: "2400:1a00:bd11:486a:6577:ba43:6b7f:8aba",
            path: "https://tapshare.digitalpathshalanepal.com/u/Lab1AI.pdf",
            size: "136822",
            createdAt: "2024-12-29T15:39:32.222Z",
            updatedAt: "2024-12-29T15:39:32.222Z",
            __v: 0
        }
    ]
}
// console.log(person1.files[0].ipAddress)

var files = person1.files

// for(var i=0; i<files.length; i++){
//     console.log(files[i].name)
// }

// for(file of files){
//     console.log(file.name)
// }


//HOF
// files.forEach((file)=>{
//     console.log(file)
// })



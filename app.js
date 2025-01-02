const express = require('express')//tarkari bhada ma halim 
//ago balim tespaxi pakeko tarkari lai arko bhada ma rakhim 
const app = express()
//mathi ko duitai line is mandatory harek project ma chahinxa 
//app dekhim bhane express use bhako xa bujhnu paryo hai ta


// '/' lai api bhanda pani hunxa aur route bhanne  ra callback function ma req,res same order ma auxa like res,req garna mildaina request,response nai hunxa 
// yo bhaneko / bhanera request gare paxi k response dine bhaneko ho route garne ho 
//yeslai monolithic architecture bhanxa 

app.get('/',(req,res)=>{
    res.send("bye world")
})


// mathi ko bye world wala kam hamle react haru ma garna paryo bhane yesari garxam just a line of code ko different xa 

// app.get('/',(req,res)=>{
//     res.json({
//         message: "hello world"
//     })
// })

app.get('/about',(req,res)=>{
    res.send("This is about page")
})


//tala ko res.send ma h1 tag use garera hamle html css use garna sakxam tara yo kura hectic hunxa hai so hamle different file ma garera link garxam

// app.get('/about',(req,res)=>{
//     res.send("<h1>This is about page</h1>")
// })

//aba tarkari khanu paryo hai ta tara tarkari mix max xa tara kunai auta khana man lagyo bhane kasari khane ta 
//callback function which is passed as argument of another function is called callback function 
//app.listen(port_number,callback function)
app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})

//yeha port number bhaneko hotel ma different different room number hunxa testai system ma different different port number hunxa
//yesle k garxa ta express lai bhanxa app.js lai port number 3000 ma halde bhanera bhanxa or tyo port number ma run gar bhanera
//suru ma allocate garnu aghi system le check garxa ki tyo port address use ma xa kinai bhanera khali raixa bhane matra allocate garxa natra 
//we get error of address already in use = 3000
// if we get such error then there is two solution either we can change port number or eliminate the process which is using that port address
//there are some port number which cannot be used by public directly like in hotel we cannot use all room 
//so port number 0-1000 so not be used by us it is a very bad practice 




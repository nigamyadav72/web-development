    //yesle class name select garxa 

        const h1 = document.querySelector('.catchme')
        const button = document.querySelector('.clickMeButton')    

        h1.textContent = "learning C"
        h1.style.backgroundColor = "blue"

        //kasaile kei trigger garyo bhane teslai event bhanxa
 
        // button.addEventListener("mouseover",function(){
        //     h1.textContent = "Learning Click Me"
            
        // })

        //onclick rakhnu parxa html ko tag ma ra click count herna sakinxa yesari
        // function changeTextContent(){
        //     console.log("Clicked on button")

        // }

        function changeTextContent(){
            alert("You clicked Me")
        }
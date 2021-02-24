
const nightmode = document.querySelectorAll("[Class = day]");
const wordC = document.querySelectorAll("[Class = wordchange]")

function buttonclick(){
    
    for (let index = 0; index < nightmode.length; index++) {
        if(nightmode[index].className === "day"){
            console.log("Night mode");
            nightmode[index].classList.add("night")
            nightmode[index].classList.remove("day")
            document.querySelector("[id=word]").classList.add("night")
            document.querySelector("h1 span").textContent = "NIGHT"
            document.querySelector("h2 span").textContent = "night"
            for (let index = 0; index < wordC.length; index++) {
                wordC[index].textContent = "day"   
            }
            
        }   
        
        else  {
            console.log("Day mode");
            nightmode[index].classList.add("day")
            nightmode[index].classList.remove("night")
            document.querySelector("[id=word]").classList.remove("night")
            document.querySelector("h1 span").textContent = "DAY"
            document.querySelector("h2 span").textContent = "day"
            for (let index = 0; index < wordC.length; index++) {
                wordC[index].textContent = "night"   
            }
        }
        
    }

}

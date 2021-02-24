


function buttonclick(){
    console.log("Clicked");
    const nightmode = document.querySelectorAll("[Class = day]");
    for (let index = 0; index < nightmode.length; index++) {
        if(nightmode[index].className = "day"){
            nightmode[index].classList.add("night")

        }   
        
        else if (nightmode[index].className = "night"){
            nightmode[index].className.add("day")
            nightmode[index].classList.remove("night")
        }
        
    }

}

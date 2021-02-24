const head = document.querySelectorAll("h1")
for (let index = 0; index < head.length; index++) {
    head[index].addEventListener("click",HeadClicked)
    
} 
const buttons = document.querySelectorAll("button")
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click",clicked)
    
} 


function clicked(){
    alert(this.textContent + " said:  EEEEEEE");
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.removeEventListener("click",clicked)
}

function HeadClicked(){
      head[0].innerHTML = "But why?"
      head[1].innerHTML = "D:<"
   
   
   
}
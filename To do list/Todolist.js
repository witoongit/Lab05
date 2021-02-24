const inputdata = document.querySelector("input")
inputdata.addEventListener("keydown", newlist)
var listnum = 0;

function newlist(){
    if(event.key === "Enter"){

        console.log("New list")
        var newlist = document.createElement("li")
        var span = document.createElement("span")
        var icon = document.createElement("i")
        var data = document.createTextNode(" " + this.value);
        newlist.id = listnum
        newlist.addEventListener("click", done)
        icon.classList.add("fas")
        icon.classList.add("fa-trash")
        icon.addEventListener("click", removelist)
        document.querySelector("ul").appendChild(newlist)
        document.getElementById(listnum).appendChild(span)
        document.getElementById(listnum).appendChild(icon)
        newlist.appendChild(data);
        inputdata.value = ""
        listnum++
    }
}

function done(){
    console.log("done")
    this.classList.add("done")
    this.removeEventListener("click", done)
}

function removelist(){
    console.log("List has been remove")
    event.currentTarget.parentNode.remove()
}
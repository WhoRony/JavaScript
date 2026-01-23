const btn = document.querySelector("button")
const input = document.querySelector("input")
const body = document.querySelector("body")

btn.addEventListener("click",function(){
    //caught the input 
    const inputvalue = input.value
    if(inputvalue === "") return
    console.log(inputvalue);


    
    //picked up my pase in making the new element
    const newElement = document.createElement("div")
    const delbtn = document.createElement("button")
    newElement.innerHTML = inputvalue
    delbtn.innerHTML= "delete"
    
    //used appendchild to appned that to my body
    body.appendChild(newElement)
    body.appendChild(delbtn)
    
    delbtn.addEventListener("click", function(){
        newElement.remove()
        delbtn.remove()
    })
    
    input.value = " "
})

    
let input = document.querySelector("input")
let subButton = document.querySelector("button")
let body = document.querySelector("body")
let todoCollector = document.querySelector(".todoCollector")
let taskCounter =  document.querySelector(".taskCounter h2 span")
let tasklist = []

subButton.addEventListener("click",()=>{
    if(input.value=="") return;

    let newTodo = document.createElement("p")
    newTodo.innerHTML+=input.value
    todoCollector.appendChild(newTodo)

    tasklist.push(newTodo)
    input.value=""

    taskCounter.innerHTML = tasklist.length

})


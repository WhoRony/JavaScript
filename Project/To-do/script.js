let input = document.querySelector("input")
let subButton = document.querySelector("button")
let body = document.querySelector("body")
let todoCollector = document.querySelector(".todoCollector")
let taskCounter =  document.querySelector(".taskCounter h2 span")
// let compButton = document.querySelector("com")
let tasklist = []

subButton.addEventListener("click",()=>{
    if(input.value=="") return;

    let newTodo = document.createElement("p")
    newTodo.innerHTML+=`${(tasklist.length+1)}. ${input.value}`
    todoCollector.appendChild(newTodo)

    tasklist.push(newTodo)
    input.value=""

    let compButton =  document.createElement("button")
    compButton.innerHTML = "Done"
    todoCollector.appendChild(compButton)    
    taskCounter.innerHTML = tasklist.length
    
    // compButton.addEventListener("click",()=>{
        //     compButton = false
        //     if(compButton != false) {
            //     }else{
                //         compButton.innerHTML = "Undo"
                
                //     }
                // })
    compButton.addEventListener("click",()=>{
        newTodo.style.textDecoration = 'line-through'
        if(compButton.innerHTML == "Done"){
            compButton.innerHTML = "undo"
            tasklist.pop()
            taskCounter.innerHTML = tasklist.length
            
        }else if(compButton.innerHTML == "undo"){
            newTodo.style.textDecoration = "none"
            compButton.innerHTML = "Done"
            tasklist.push()
            taskCounter.innerHTML = tasklist.length
            console.log(tasklist);
            
        }
    })


})



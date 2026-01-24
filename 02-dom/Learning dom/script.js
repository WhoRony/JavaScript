const btn = document.querySelector("button")
const input = document.querySelector("input")
const body = document.querySelector("body")

input.addEventListener("keydown", function (event) {
    if(event.key === "Enter"){
    event.preventDefault()

    const inputvalue = input.value.trim()
    if (inputvalue === "") return

    const wrapper = document.createElement("div")

    const text = document.createElement("span")
    text.textContent = inputvalue

    const delbtn = document.createElement("button")``
    delbtn.textContent = "Delete"

    const updatebtn = document.createElement("button")
    updatebtn.textContent = "Update"

    delbtn.addEventListener("click", function () {
        wrapper.remove()
    })

    updatebtn.addEventListener("click", function () {
        input.value = text.textContent
        wrapper.remove()
    })

    wrapper.append(text, delbtn, updatebtn)
    body.appendChild(wrapper)

    input.value = ""
    }
})



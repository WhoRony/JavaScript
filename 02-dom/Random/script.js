let arr = [
    {
        team: "CSK",
        main: "yellow",
        secondary: "blue",
    },
    {
        team: "MI",
        main: "royalblue",
        secondary: "gold",
    },
    {
        team: "kX11",
        main: "crimson",
        secondary: "grey",
    },
    {
        team: "SRH",
        main: "orange",
        secondary: "brown",
    },
        {
        team: "RR",
        main: "pink",
        secondary: "blue",
    },    {
        team: "KKR",
        main: "purple",
        secondary: "gold",
    },
]

let box = document.querySelector(".box")
let button = document.querySelector("button")
let h1 = document.querySelector("h1")

button.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let winner = arr[randomIndex];
    h1.textContent = winner.team + " WINS!";
    box.style.backgroundColor = winner.main;
    box.style.border = `10px solid ${winner.secondary}`;
});

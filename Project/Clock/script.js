const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".min-hand")
const secondHand = document.querySelector(".sec-hand")


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = (seconds * 6) + 90;
    secondHand.style.transform =`rotate(${secondDegree}deg)`


    const min = now.getMinutes();
     const minutesDeg = (min * 6) + (seconds / 10) + 90;
    minuteHand.style.transform =`rotate(${minutesDeg}deg)`
    
    const hour = now.getHours();
    const hoursDeg = ((hour % 12) * 30) + (min / 2) + 90;
    hourHand.style.transform =`rotate(${hoursDeg}deg)`

}

setInterval(setDate, 1000);

setDate()


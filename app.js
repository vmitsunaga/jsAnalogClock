const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.seconds-hand');

function setDate() {

    const now = new Date();

    const hour = now.getHours();
    const hourDegree = (hour * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

}

setInterval(setDate, 1000);
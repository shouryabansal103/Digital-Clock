const months = ["January, February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const hrCell = document.getElementById("hour");
const minCell = document.getElementById("minute");
const secCell = document.getElementById("second");
const dateCell = document.getElementById("date");

const showTime = ()=>{
    let clock = new Date();
    dateCell.innerHTML = clock.getDate() + " " + months[clock.getMonth()] + " " + clock.getFullYear();
    hrCell.innerHTML = clock.getHours();
    minCell.innerHTML = clock.getMinutes();
    secCell.innerHTML = clock.getSeconds();
}

setInterval(showTime, 1000)
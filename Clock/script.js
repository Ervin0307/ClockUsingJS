
let clock = document.getElementById("clock");

function updateClock() {
    let time = new Date();
    let curHours = time.getHours();
    let curMin = time.getMinutes();
    let curSec = time.getSeconds();

    let timeOfDay = (curHours < 12) ? "AM" : "PM";
    
    curHours = ((curHours < 10) ? "0" : "") + curHours;
    curSec = ((curSec < 10) ? "0" : "") + curSec;
    curMin = ((curMin < 10) ? "0" : "") + curMin;

    curHours = (curHours > 12) ? curHours % 12 : curHours;

    let curTimeStr = curHours + ":" + curMin + ":" + curSec +" "+ timeOfDay;

    clock.innerHTML = curTimeStr;
}
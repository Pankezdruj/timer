let deadline = '2020-03-01T22:00:00';   //YYYY-MM-DDTHH:MM:SS

function getTimeRemaining(endtime){
    let remainingTime = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((remainingTime/1000) % 60),
        fullSeconds = Math.floor(remainingTime/1000),
        minutes = Math.floor((remainingTime/60000) % 60),
        fullMinutes = Math.floor(remainingTime/60000),
        hours = Math.floor((remainingTime/3600000) % 24),
        fullHours = Math.floor(remainingTime/3600000),
        days = Math.floor((remainingTime/86400000) % 30),
        fullDays = Math.floor(remainingTime/86400000);
        return {
            'miliSeconds': remainingTime,
            'seconds': seconds,
            'fullSeconds': fullSeconds,
            'minutes': minutes,
            'fullMinutes': fullMinutes,
            'hours': hours,
            'fullHours': fullHours,
            'days': days,
            'fullDays': fullDays
        };
}
function setClock(id, endtime, countTill){
    let timerWrapper = document.getElementsByClassName(id)[0],
    seconds = timerWrapper.getElementsByClassName('seconds')[0],
    minutes = timerWrapper.getElementsByClassName('minutes')[0],
    hours = timerWrapper.getElementsByClassName('hours')[0],
    days = timerWrapper.getElementsByClassName('days')[0],
    timeInterval = setInterval(updateClock, 1000),
    t = getTimeRemaining(endtime);
    if (t.miliSeconds <= 0){
        clearInterval(timeInterval);
    }
    function updateClock() {
        let t = getTimeRemaining(endtime);
        if (countTill == 'seconds'){
            seconds.textContent = t.fullSeconds;
        } 
        else if (countTill == 'minutes'){
            seconds.textContent = t.seconds;
            minutes.textContent = t.fullMinutes;
        }
        else if (countTill == 'hours'){
            seconds.textContent = t.seconds;
            minutes.textContent = t.minutes;
            hours.textContent = t.fullHours;
        }
        else if (countTill == 'days'){
            seconds.textContent = t.seconds;
            minutes.textContent = t.minutes;
            hours.textContent = t.hours;
            days.textContent = t.fullDays;
        }
    }
}

window.addEventListener('DOMContentLoaded', function(){
    setClock('timer-numbers', deadline, 'hours');
    
    
});
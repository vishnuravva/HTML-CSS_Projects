const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampmSpan = document.getElementById('ampm')

function updateClock() {

    let hrs = new Date().getHours()
    let mins = new Date().getMinutes()
    let secs = new Date().getSeconds()

    let ampm = 'AM'
    if (hrs > 12) {
        hrs = hrs - 12
        ampm = 'PM'
    }
    hrs = hrs < 10 ? '0'+hrs : hrs
    mins = mins < 10 ? '0'+mins : mins
    secs = secs < 10 ? '0'+secs : secs

    hours.innerText = hrs
    minutes.innerHTML = mins
    seconds.innerHTML = secs
    ampmSpan.innerText = ampm

    setTimeout(() => {
        updateClock()
    }, 1000)

}

updateClock()
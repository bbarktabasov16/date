let clock =()=> {
    let date = new Date()
    let year = date.getFullYear()
    let monthNum = date.getMonth()
    let day = date.getDay()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let milliseconds = date.getMilliseconds()

    if (hours <= 9) hours = "0" + hours
    if (minutes <= 9) minutes = "0" + minutes
    if (seconds <= 9) seconds = "0" + seconds

    let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    let dateTime1 = "Бугун: " + day + " " + month[monthNum] + " " + year
    // let dateTime2 = "Саат: " + hours + ":" + minutes + ":" + seconds
    let dateTime2 = hours + ":" + minutes + ":" + seconds
    let dateTime = dateTime1 + " | "  + dateTime2

    // console.log(dateTime1)
    // console.log(dateTime2)

    let element = document.getElementById('time').innerHTML = dateTime2

    setTimeout(() => {
        clock()
    }, 1000);
}

clock()
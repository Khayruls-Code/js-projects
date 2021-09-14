function getTime () {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = 'AM'

    if(h == 0){
        h = 12
    }
    if(h > 12){
        h = h - 12
        session = 'PM'
    }

    h = h < 9 ? '0' + h : h
    m = m < 9 ? '0' + m : m
    s = s < 9 ? '0' + s : s

    let time = `${h} : ${m} : ${s} ${session}`
    document.getElementById('showTime').innerText = time

    setTimeout(getTime, 1000)
}

getTime ()
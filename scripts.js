const week = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]
const time = document.getElementById("time")
const date = document.getElementById("date")

const addZero = (num, digit) => {
    return String(num).padStart(digit, "0")
}

const updateTime = () => {
    let now = new Date()
    time.innerText = `${addZero(now.getHours(), 2)}:${addZero(now.getMinutes(), 2)}:${addZero(now.getSeconds(), 2)}`
    date.innerText = `${week[now.getDay()]} ${addZero(now.getDate(), 2)}/${addZero(now.getMonth() + 1, 2)}/${now.getFullYear()}`
}

updateTime()
setInterval(updateTime, 1000)

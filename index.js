let time = new Date().getHours()
let user = "дорогой пользователь"



if (time >= 4 && time <= 12) {
    alert(`Доброе утро  ${user}`)
} else if (time >= 12 && time <= 18) {
    alert(`Добрый день ${user}`)
} else if (time >= 18 && time <= 22) {
    alert(`Добрый вечер ${user}`)
}  else if (time >= 22 && time <= 24) {
    alert(`Доброй ночи ${user}`)
} else if (time >= 1 && time <= 4) {
    alert(`Доброй ночи ${user}`)
}


let future = "2023-06-23 18:10"
let clock = Date.parse(future ) - new Date().getTime()

if ( clock <= 0) {
    alert("Время!")
}

console.log (
    Math.floor((clock / (1000 * 60 *60 ) % 24)),
    Math.floor((clock / (1000 * 60 ) % 60))
)
let red1 = document.getElementById('red')
let yellow1 = document.getElementById('yellow')
let green1 = document.getElementById('green')

let clicktimes = {"red":0 , "yellow":0, "green":0}
let squares1 = document.querySelectorAll('.squares')

squares1.forEach(sq => {
    sq.onclick = () =>{
        clicktimes[sq.value]++
        sq.innerHTML = clicktimes[sq.value]
    }
})

function clearscore(){
    clicktimes['red'] = 0
    clicktimes['green'] = 0
    clicktimes['yellow'] = 0
    squares1.forEach(sq => sq.innerText='')
}

let cleargame1 = document.getElementById('cleargame')
cleargame1.onclick = () =>clearscore()

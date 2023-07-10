const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener(('click'), () => {
    console.log("click next")

    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    console.log(currentActive)
    update()
})

prev.addEventListener(('click'), () => {
    console.log("click prev")

    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    console.log(currentActive)
    update()
})

function update() {
    console.log("update")

    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1)
        * 100 + '%'


    console.log(circles.length)
    if (currentActive === 1) {
        prev.disabled = true
        console.log("boll 1")
    }
    else if (currentActive === circles.length) {
        next.disabled = true
        console.log("boll 4")
    }
    else {
        prev.disabled = false
        next.disabled = false
        console.log("boll 2 eller 3")
    }
}
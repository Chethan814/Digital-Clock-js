let clock = document.querySelector("#clock")

setInterval(() => {
    time = new Date()
    clock.textContent = time.toLocaleTimeString()
}, 1000);
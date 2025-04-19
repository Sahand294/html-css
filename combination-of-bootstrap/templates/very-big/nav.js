document.addEventListener("DOMContentLoaded", function () {
    const nav_trigger = document.getElementById("nav-options-trigger")
    const nav_target = document.querySelector(".nav-options-container")
    const info_trigger = document.getElementById("info-trigger")
    const info_target = document.querySelector(".info")

    const numlink = document.getElementById("number")
    nav_trigger.addEventListener("click", function() {
        nav_target.classList.toggle("active")
    })
    info_trigger.addEventListener("click", function () {
        info_target.classList.toggle("active")
    })
    numlink.addEventListener("click", function () {
        const number = "(073)123-12-12"
        navigator.clipboard.writeText(number)
    })

})
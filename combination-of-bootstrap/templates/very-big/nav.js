document.addEventListener("DOMContentLoaded", function () {
    const nav_trigger = document.getElementById("nav-options-trigger")
    const nav_target = document.querySelector(".nav-options-container")
    const info_trigger = document.getElementById("info-trigger")
    const info_target = document.querySelector(".info")
    nav_trigger.addEventListener("click", function() {
        nav_target.classList.toggle("active")
    })
    info_trigger.addEventListener("click", function () {
        info_target.classList.toggle("active")
    })
})
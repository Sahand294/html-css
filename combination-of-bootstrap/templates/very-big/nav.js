document.addEventListener("DOMContentLoaded", function () {
    const trigger = document.getElementById("trigger")
    const target = document.querySelector(".nav-options-container")
    trigger.addEventListener("click", function() {
        target.classList.toggle("active")
    })
})
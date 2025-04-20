document.addEventListener("DOMContentLoaded",function () {
    const links_trigger = document.getElementById("link_button")
    const link_target = document.querySelector(".nav-links-container")
    links_trigger.addEventListener("click", function () {
        link_target.classList.toggle("active")
    })
})
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navbarMenu.classList.toggle('active');

        // const bars = document.querySelectorAll('.bar');
        // if(navbarMenu.classList.contains('active')) {
        //     bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        //     bars[1].style.opacity = '0';
        //     bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        // } else {
        //     bars[0].style.transform = 'rotate(0) translate(0)';
        //     bars[1].style.opacity = '1';
        //     bars[2].style.transform = 'rotate(0) translate(0)';
        // }
    });
});
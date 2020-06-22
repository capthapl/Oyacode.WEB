// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


let hamburger = document.getElementById('header_menu_mobile');
let slideMenu = document.getElementById('header_menu_slide');
let slideX = document.getElementById('header_links_slide_close');
let mobile_links = document.getElementsByClassName('mobile_link');

window.onload = () => {
    console.log("load" + mobile_links.length)
    for (let i = 0; i < mobile_links.length; i++) {
        mobile_links[i].addEventListener('click', () => {
            slideMenu.style.padding = "0"
            slideX.style.width = "0px"
        })
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

hamburger.addEventListener('click', () => {
    slideMenu.style.padding = "20px 250px 10px 30px"
    slideX.style.width = "30px"
});

slideX.addEventListener('click', () => {
    slideMenu.style.padding = "0"
    slideX.style.width = "0px"

})

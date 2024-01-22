let menuBtn = document.querySelector('.nav-btn-js');
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu a');

menuBtn.addEventListener('click', function () {
    console.log('menuBtn', menuBtn)

    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


menuItem.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
})

var swiper = new Swiper(".about-swiper", {
    effect: "cards",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".dominators-swiper", {
    loop: true,
    slidesPerView: 1,

    breakpoints: {
        992: {
            effect: "coverflow",
            centeredSlides: true,
            slidesPerView: 2.34,

            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 120,
                modifier: 1.4,
                scale: 0.6,
                slideShadows: true,
            },
        },
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".marketplace-swiper", {
    slidesPerView: 1.2,
    breakpoints: {
        992: {
            slidesPerView: 2.34,
        },
        1440: {
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
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

var aboutSwiper = new Swiper(".about-swiper", {
    effect: "cards",
    loop: true,

    cardsEffect: {
        perSlideOffset: 10,
        perSlideRotate: 10,
        rotate: false,
        slideShadows: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var dominatorsSwiper = new Swiper(".dominators-swiper", {
    loop: false,
    slidesPerView: 1,
    effect: "coverflow",

    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 0.2,
        slideShadows: false,
    },

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

dominatorsSwiper.slideTo(1, false, false);

var marketplaceSwiper = new Swiper(".marketplace-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 29,
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const accordionItem = document.querySelectorAll('.accordion-item .accordion-question');

accordionItem.forEach((accordionToggle) => {
    accordionToggle.addEventListener('click', () => {
        const accordionItem = accordionToggle.parentNode;
        const accordionContent = accordionToggle.nextElementSibling;

        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            accordionItem.classList.remove('active');
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionItem.classList.add('active');
        }
    });
});
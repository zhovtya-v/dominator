const body = document.querySelector("body");
let menuBtn = document.querySelector('.nav-btn-js');
let menu = document.querySelector('.header-section');

menuBtn.addEventListener('click', function () {
    console.log('menuBtn', menuBtn)

    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');

    body.classList.toggle('menu-opened');
})


var dominatorsSwiper = new Swiper(".dominators-swiper", {
    loop: true,
    slidesPerView: 1,
    effect: "coverflow",
    centeredSlides: true,

    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 0.2,
        slideShadows: false,
    },

    breakpoints: {
        768: {
            effect: "coverflow",
            centeredSlides: true,
            slidesPerView: 2.1,

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

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});


var marketplaceSwiper = new Swiper(".marketplace-swiper", {
    //slidesPerView: 1.2,
    loop: true,
    spaceBetween: 21,
    slidesPerView: 'auto',
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 29,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1441: {
            spaceBetween: 29,
            slidesPerView: 4,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
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


document.addEventListener('DOMContentLoaded', reinit_slider);
window.addEventListener('resize', reinit_slider);

let mql = window.matchMedia('(max-width: 991px)');
let swiper = null;

function reinit_slider() {
    if (mql.matches) {
        swiper = new Swiper('.about-swiper', {
            grabCursor: true,
            spaceBetween: 12,
            slidesPerView: 1,
            centeredSlides: true,
            roundLengths: true,
            loop: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
    else {
        var swiper = new Swiper(".about-swiper", {
            effect: "cards",
            loop: true,

            cardsEffect: {
                perSlideOffset: 10,
                perSlideRotate: 10,
                rotate: false,
                slideShadows: false,
                stretch: 50,
                depth: 20,
                modifier: 1,
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
    }
}


var thumbsSliderRoadMap = new Swiper(".top-road-map-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6.5,
});
var sliderRoadMap = new Swiper(".bottom-road-map-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
        swiper: thumbsSliderRoadMap,
    },
});
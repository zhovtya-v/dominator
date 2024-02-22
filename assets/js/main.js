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


document.addEventListener('DOMContentLoaded', about_reinit_slider);
window.addEventListener('resize', about_reinit_slider);

let mql = window.matchMedia('(max-width: 991px)');
let swiper = null;

function about_reinit_slider() {
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


/*var thumbsSliderRoadMap = new Swiper(".top-road-map-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3.6,

    breakpoints: {
        992: {
            slidesPerView: 5,
            spaceBetween: 29,
        },
        1200: {
            slidesPerView: 6.5,
            spaceBetween: 20,
        }
    },
});
var sliderRoadMap = new Swiper(".bottom-road-map-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
        swiper: thumbsSliderRoadMap,
    },
});*/

var mySwiper = new Swiper('.bottom-road-map-slider', {
    queueStartCallbacks: true,
    loop: true,
    onSlideChangeStart: function (swiper) {
        myNavSwiper.swipeTo(swiper.activeLoopIndex, 100, false);
    },
    onSlideChangeEnd: function (swiper) {

        if (swiper != null && swiper != undefined &&
            myNavSwiper != null && myNavSwiper != undefined) {
            if (swiper.activeLoopIndex != myNavSwiper.activeLoopIndex) {
                myNavSwiper.swipeTo(swiper.activeLoopIndex, 100, false);
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', road_map_reinit_slider);
window.addEventListener('resize', road_map_reinit_slider);

function road_map_reinit_slider() {
    if (mql.matches) {
        myNavSwiper = new Swiper('.top-road-map-slider', {
            createPagination: false,
            loop: true,
            moveStartThreshold: 10,
            queueStartCallbacks: true,
            simulateTouch: true,
            initialSlide: 0,
            spaceBetween: 10,
            slidesPerView: 3,
            onSlideChangeStart: function (swiper) {
                mySwiper.swipeTo(swiper.activeLoopIndex, 0, false);
            },
            onSlideClick: function (swiper) {
                var ls = swiper.loopedSlides;
                var slideIndex = swiper.clickedSlideIndex - ls;

                if (slideIndex >= swiper.slides.length - ls*2) {
                    slideIndex = swiper.slides.length - ls*2 - slideIndex;
                }
                if (slideIndex<0) {
                    slideIndex = -slideIndex;
                }

                myNavSwiper.swipeTo(slideIndex, 100, true);
            },
        })
    }
    else {
        myNavSwiper = new Swiper('.top-road-map-slider', {
            createPagination: false,
            loop: true,
            moveStartThreshold: 10,
            queueStartCallbacks: true,
            simulateTouch: true,
            initialSlide: 0,
            spaceBetween: 10,
            slidesPerView: 5,
            onSlideChangeStart: function (swiper) {
                mySwiper.swipeTo(swiper.activeLoopIndex, 0, false);
            },
            onSlideClick: function (swiper) {
                var ls = swiper.loopedSlides;
                var slideIndex = swiper.clickedSlideIndex - ls;

                if (slideIndex >= swiper.slides.length - ls*2) {
                    slideIndex = swiper.slides.length - ls*2 - slideIndex;
                }
                if (slideIndex<0) {
                    slideIndex = -slideIndex;
                }

                myNavSwiper.swipeTo(slideIndex, 100, true);
            },
        })
    }
}

/*
function ShimmerElement(q){
    this.anime=false;
    this.el=document.querySelector(q);
    if(this.el==null)return false;
    this.start=function(){
        if(this.anime)this.anime.cancel();
        //створюємо анімацію
        this.anime=this.el.animate([{opacity:0.2},{opacity:1},{opacity:0},{opacity:0.5},{opacity:0},{opacity:0},{opacity:0},{opacity:1}],{duration:1600, iterations:'Infinity'});
    };
    this.stop=function(){
        this.anime.cancel();
    }
    this.startTime=function(ms){
        this.start();
        setTimeout(this.stop.bind(this), ms);
    }

}

var f3=new ShimmerElement('.title');
f3.startTime(4000);*/




function init(){
    new SmoothScroll(document,100,20)
}

function SmoothScroll(target, speed, smooth) {
    if (target === document)
        target = (document.scrollingElement
            || document.documentElement
            || document.body.parentNode
            || document.body) // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body
    && document.documentElement
        ? document.documentElement
        : target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e)

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

        if (!moving) update()
    }

    function normalizeWheelDelta(e){
        if(e.detail){
            if(e.wheelDelta)
                return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
            else
                return -e.detail/3 // Firefox
        }else
            return e.wheelDelta/120 // IE,Safari,Chrome
    }

    function update() {
        moving = true

        var delta = (pos - target.scrollTop) / smooth

        target.scrollTop += delta

        if (Math.abs(delta) > 0.5)
            requestFrame(update)
        else
            moving = false
    }

    var requestFrame = function() { // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(func) {
                window.setTimeout(func, 1000 / 50);
            }
        );
    }()
}

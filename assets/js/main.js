window.addEventListener('load', (event) => {
    //new SmoothScroll(document,100,20);

    let menuBtn = document.querySelector('.nav-btn-js');
    let menu = document.querySelector('.header-section');

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('menu-opened');
    })

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
                document.dispatchEvent(new CustomEvent('element-show', {
                    detail: {
                        target: change.target
                    }
                }));
            }
        });
    }

    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.animation-section');
    for (let elm of elements) {
        observer.observe(elm);
    }

    var modal = document.querySelector('.modal');
    var modalBg = document.querySelector('.modal-bg');
    var modalCloseBtn = document.querySelector('.modal-close');
    var openModalBtn = document.querySelector('.video-btn-play');

    openModalBtn.addEventListener("click", () => modal.style.display='block');
    modalCloseBtn.addEventListener("click", () => modal.style.display='none');
    modalBg.addEventListener("click", () => modal.style.display='none');
})

document.addEventListener('element-show', function(e) {
    if (e.detail.target.classList.contains('hero-section')) {
        counter(document.querySelector('.element-show #dominators-first .out-num'), 0, 1347)
        counter(document.querySelector('.element-show #dominators-second .out-num'), 0, 347)
        counter(document.querySelector('.element-show #dominators-third .out-num'), 0, 150)
    }
});

function counter(object, start, end) {
    if (object === null) return;

    var interval = setInterval(function() {
        var magic_num = 15;
        var diff = end - start;
        var step = Math.ceil(diff / magic_num);

        start += step;

        object.innerHTML = start + 'K';

        if( start === end ) {
            clearInterval(interval);
        }
    }, 30);
}

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
            //grabCursor: true,
            spaceBetween: 12,
            slidesPerView: 1,
            centeredSlides: true,
            //roundLengths: true,
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

    var requestFrame = function() {
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
*/

function buttonHoverAnimation() {
    const buttonSelector = document.querySelectorAll(".video-play");

    for (let i = 0; i < buttonSelector.length; i++) {
        const button = buttonSelector[i].querySelector(".video-btn-play");

        function mousemoveFn(event) {
            const buttonPosX = event.currentTarget.getBoundingClientRect().left;
            const buttonPosY = event.currentTarget.getBoundingClientRect().top;

            const xPosOfMouse = event.clientX - buttonPosX;
            const yPosOfMouse = event.clientY - buttonPosY;

            const xPosOfMouseInsideButton =
                xPosOfMouse - buttonSelector[i].offsetWidth / 2;

            const yPosOfMouseInsideButton =
                yPosOfMouse - buttonSelector[i].offsetWidth / 4;

            const animationDivider = 2;

            console.log(xPosOfMouseInsideButton);
            console.log(yPosOfMouseInsideButton);

            TweenMax.to(button, 1, {
                x: xPosOfMouseInsideButton / animationDivider,
                y: yPosOfMouseInsideButton / animationDivider,
                ease: Power3.easeOut
            });
        }

        function mouseleaveFn() {
            TweenMax.to(button, 1, {
                x: 0,
                y: 0,
                ease: Power3.easeOut
            });
        }

        buttonSelector[i].addEventListener("mousemove", mousemoveFn);
        buttonSelector[i].addEventListener("mouseleave", mouseleaveFn);
    }
}

buttonHoverAnimation();

/*var browser=new mbrowser();*/

mbrowser=function(){
    this.spec_string=   navigator.userAgent;
    this.name=          this.get_name();
};

mbrowser.prototype.get_name=function(){
    var spec_string = this.spec_string;

    var matches = spec_string.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if ( navigator.appName === 'safari') {
        console.log('safari')




    } else {
        console.log('another site')



    }
};

//var browser = new mbrowser();

var html = document.documentElement;
var body = document.body;

var scroller = {
    target: document.querySelector("#scroll-container"),
    ease: 0.05, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
    rotation: 0.01,
    force3D: true
});


window.addEventListener("load", onLoad);

function onLoad() {
    /*var userAgent = navigator.userAgent.toLowerCase();
    var name = userAgent.get_name();

    console.log('name', name);*/

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            console.log('chrome');
            updateScroller();
            window.focus();
            window.addEventListener("resize", onResize);
            document.addEventListener("scroll", onScroll);

        } else if (ua.indexOf('firefox') > -1) {
            updateScroller();
            window.focus();
            window.addEventListener("resize", onResize);
            document.addEventListener("scroll", onScroll);
        } else {
            console.log('safari');
            document.querySelector('.viewport').style.overflow = 'visible';
            document.querySelector('.viewport').style.position = 'relative';
            document.querySelector('.scroll-container').style.overflow = 'visible';
            document.querySelector('.scroll-container').style.position = 'relative';
            document.querySelector('.scroll-container').style.transform = 'none';
        }
    }
}

function updateScroller() {

    var resized = scroller.resizeRequest > 0;

    if (resized) {
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
    }

    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
    }

    TweenLite.set(scroller.target, {
        y: -scroller.y
    });

    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
    scroller.scrollRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}

function onResize() {
    scroller.resizeRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}
window.addEventListener('load', (event) => {

    var vid = document.getElementById("hero-video");
    vid.muted = true;

    let menuBtn = document.querySelector('.nav-btn-js');
    let menu = document.querySelector('.header-section');

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('menu-opened');
    })

    smoothLinksScroll();

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

    let options = { threshold: [0.4] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.animation-section');
    for (let elm of elements) {
        observer.observe(elm);
    }

    initPopupsOpeners();

})

function initPopupsOpeners() {
    var body = document.querySelector('body');
    var html = document.querySelector('html');
    var items = document.querySelectorAll('.open-modal-js');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var modalId = this.dataset.popupId;

            if (modalId !== null) {
                var modal = document.querySelector('#' + modalId);
                if (modal != null) {
                    modal.style.display= 'block';
                    body.classList.add('modal-opened');
                    html.classList.add('modal-opened');
                }
            }
        });
    });

    items = document.querySelectorAll('.close-modal-js');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var modal = this.closest('.modal');

            modal.style.display = 'none';
            body.classList.remove('modal-opened');
            html.classList.remove('modal-opened');
        });
    });
}

document.addEventListener('element-show', function(e) {
    if (e.detail.target.classList.contains('hero-section')) {
        counter(document.querySelector('.element-show #dominators-first .out-num'), 0, 1347)
        counter(document.querySelector('.element-show #dominators-second .out-num'), 0, 347)
        counter(document.querySelector('.element-show #dominators-third .out-num'), 0, 150)
    }
});

function smoothLinksScroll() {
    document.querySelectorAll('.header-section .menu a[href^="#"]').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);
            const topOffset = 10;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

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

let currentSizeMode = null;
let mql = window.matchMedia('(max-width: 991px)');
document.addEventListener('DOMContentLoaded', function () {
    currentSizeMode = mql.matches ? 'mobile' : 'desktop';

    about_reinit_slider(currentSizeMode);
    road_map_reinit_slider(currentSizeMode);
});

let aboutSwiper = null;

// Size mode
window.addEventListener('resize', function () {
    let newSizeMode = mql.matches ? 'mobile' : 'desktop';

    if (currentSizeMode !== newSizeMode) {
        currentSizeMode = newSizeMode;

        document.dispatchEvent(new CustomEvent('changeSizeMode', {
            detail: {
                mode: currentSizeMode
            }
        }));
    }
});

document.addEventListener('changeSizeMode', function(e) {
    const newSizeMode = e.detail.mode;

    about_reinit_slider(newSizeMode);
    road_map_reinit_slider(newSizeMode);
});

function about_reinit_slider(sizeMode) {
    const object = document.querySelector('.about-swiper');
    if (object === null) {
        return;
    }

    if (aboutSwiper !== null) {
        aboutSwiper.destroy();
    }

    if (sizeMode === 'mobile') {
        aboutSwiper = new Swiper('.about-swiper', {
            spaceBetween: 12,
            slidesPerView: 1,
            centeredSlides: true,
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
        aboutSwiper = new Swiper(".about-swiper", {
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

function road_map_reinit_slider(sizeMode) {
    if (document.querySelector('.top-road-map-slider') === null || document.querySelector('.bottom-road-map-slider') === null) {
        return;
    }

    if (topRoadMapSwiper !== null) {
        topRoadMapSwiper.destroy();
    }

    if (sizeMode === 'mobile') {
        topRoadMapSwiper = new Swiper('.top-road-map-slider', {
            createPagination: false,
            loop: true,
            moveStartThreshold: 10,
            queueStartCallbacks: true,
            simulateTouch: true,
            initialSlide: 0,
            spaceBetween: 10,
            slidesPerView: 4,
            onSlideChangeStart: function (swiper) {
                bottomRoadMapSwiper.swipeTo(swiper.activeLoopIndex, 0, false);
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

                topRoadMapSwiper.swipeTo(slideIndex, 100, true);
            },
        });
    }
    else {
        topRoadMapSwiper = new Swiper('.top-road-map-slider', {
            createPagination: false,
            loop: true,
            moveStartThreshold: 10,
            queueStartCallbacks: true,
            simulateTouch: true,
            initialSlide: 0,
            spaceBetween: 10,
            slidesPerView: 6,
            onSlideChangeStart: function (swiper) {
                bottomRoadMapSwiper.swipeTo(swiper.activeLoopIndex, 0, false);
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

                topRoadMapSwiper.swipeTo(slideIndex, 100, true);
            },
        })
    }

    if (bottomRoadMapSwiper !== null) {
        bottomRoadMapSwiper.destroy();
    }
    bottomRoadMapSwiper = new Swiper('.bottom-road-map-slider', {
        queueStartCallbacks: true,
        loop: true,
        effect: true,
        onSlideChangeStart: function (swiper) {
            topRoadMapSwiper.swipeTo(swiper.activeLoopIndex, 100, false);
        },
        onSlideChangeEnd: function (swiper) {
            if (swiper != null && swiper != undefined &&
                topRoadMapSwiper != null && topRoadMapSwiper != undefined) {
                if (swiper.activeLoopIndex != topRoadMapSwiper.activeLoopIndex) {
                    topRoadMapSwiper.swipeTo(swiper.activeLoopIndex, 100, false);
                }
            }
        }
    });
}


let topRoadMapSwiper = null;
let bottomRoadMapSwiper = null;

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
    function isAgent(agent){
        return navigator.userAgent.toLowerCase().indexOf(agent.toLowerCase())>-1;
    }

    if (!isAgent('Chrome') && isAgent('Safari')) {
        document.querySelector('.viewport').style.overflow = 'visible';
        document.querySelector('.viewport').style.position = 'relative';
        document.querySelector('.scroll-container').style.overflow = 'visible';
        document.querySelector('.scroll-container').style.position = 'relative';
        document.querySelector('.scroll-container').style.transform = 'none';
    }
    else {
        updateScroller();
        window.focus();
        window.addEventListener("resize", onResize);
        document.addEventListener("scroll", onScroll);
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

function openGame(id, openMarketplace) {
    var link = document.getElementById(id);
    var url = "game/index.html" + window.location.search;
    if (openMarketplace) {
        if (window.location.search && window.location.search.length > 0)
            url += "&";
        else
            url += "?";

        url += "w=marketplace";
    }
    
    link.setAttribute("href", url);
}

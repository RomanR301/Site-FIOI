document.addEventListener("DOMContentLoaded", function() {
    var carousel = new Swiper('.swiper-container', {
        slidesPerView: 1,
        watchOverflow: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
});


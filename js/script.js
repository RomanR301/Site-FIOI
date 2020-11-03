document.addEventListener("DOMContentLoaded", function() {
    var swiperTestimonial = new Swiper('.testimonial-carousel', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
        },
        pagination: {
            el: '.testimonial-pagination',
        },
        breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
            },
            767: {
              slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        }
    });
});


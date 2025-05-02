const swiper = new Swiper('.mySwiper', {
    loop: true, // فعال کردن چرخش بی‌پایان
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true, // فعال کردن نشانگر دست برای کشیدن
    slidesPerView: 1, // تعداد اسلایدهای قابل مشاهده
    spaceBetween: 10, // فاصله بین اسلایدها
});

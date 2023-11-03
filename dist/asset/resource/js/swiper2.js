var swiper = new Swiper('.swiper-container', {
    speed: 500,
    loop: true,
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
    spaceBetween: 1000,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var toggleButton = document.getElementById('play-pause-button');
var icon = document.getElementById('play-pause-icon');

toggleButton.addEventListener('click', function() {
    if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    } else {
        swiper.autoplay.start();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }
});
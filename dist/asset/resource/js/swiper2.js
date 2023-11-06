var swiper = new Swiper('#slider2', {
    speed: 500,
    loop: true,
    autoplay: {
        delay: 2000, // 3초 간격
        disableOnInteraction: false,
    },
    spaceBetween: 20, // 슬라이드 간의 간격을 20픽셀로 설정
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

// 버튼 요소와 아이콘 요소 선택
var toggleButton = document.getElementById('play-pause-button');
var icon = document.getElementById('play-pause-icon');

// 버튼 클릭 이벤트 리스너 추가
toggleButton.addEventListener('click', function() {
    // 자동 재생 상태 확인
    if (swiper.autoplay.running) {
        // 자동 재생 중지
        swiper.autoplay.stop();
        // 아이콘 변경
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    } else {
        // 자동 재생 시작
        swiper.autoplay.start();
        // 아이콘 변경
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }
});
var swiper1 = new Swiper('.main-visual .swiper-container', {
    speed: 500,
    loop: true,
autoplay: {
    delay: 1800, 
    disableOnInteraction: false,
 },
    spaceBetween: 1000, // 슬라이드 간의 간격을 20픽셀로 설정
    slidesPerView: 1,
    pagination: {
        el: '.main-visual .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main-visual .swiper-button-next',
        prevEl: '.main-visual .swiper-button-prev',
    },
});

var swiper2 = new Swiper('.carKind-slider .swiper-container', {
    
    slidesPerGroup: 1,
    slidesPerView: 3,
    speed: 500,
    loop: true,
    autoplay: {
        delay: 1300, // 3초 간격
        disableOnInteraction: false,
    },
    spaceBetween: 10, // 슬라이드 간의 간격을 20픽셀로 설정
    pagination: {
        el: '.carKind-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.carKind-slider .swiper-button-next',
        prevEl: '.carKind-slider .swiper-button-prev',
    },
    slidesPerGroup: 1,
});

// 첫 번째 슬라이더의 버튼 요소와 아이콘 요소 선택
var toggleButton1 = document.getElementById('play-pause-button');
var icon1 = document.getElementById('play-pause-icon');

// 첫 번째 슬라이더의 버튼 클릭 이벤트 리스너 추가
toggleButton1.addEventListener('click', function() {
    // 자동 재생 상태 확인
    if (swiper1.autoplay.running) {
        // 자동 재생 중지
        swiper1.autoplay.stop();
        // 아이콘 변경
        icon1.classList.remove('fa-pause');
        icon1.classList.add('fa-play');
    } else {
        // 자동 재생 시작
        swiper1.autoplay.start();
        // 아이콘 변경
        icon1.classList.remove('fa-play');
        icon1.classList.add('fa-pause');
    }
});

// 두 번째 슬라이더의 버튼 요소와 아이콘 요소 선택
var toggleButton2 = document.getElementById('play-pause-button2');
var icon2 = document.getElementById('play-pause-icon2');

// 두 번째 슬라이더의 버튼 클릭 이벤트 리스너 추가
toggleButton2.addEventListener('click', function() {
    // 자동 재생 상태 확인
    if (swiper2.autoplay.running) {
        // 자동 재생 중지
        swiper2.autoplay.stop();
        // 아이콘 변경
        icon2.classList.remove('fa-pause');
        icon2.classList.add('fa-play');
    } else {
        // 자동 재생 시작
        swiper2.autoplay.start();
        // 아이콘 변경
        icon2.classList.remove('fa-play');
        icon2.classList.add('fa-pause');
    }
});


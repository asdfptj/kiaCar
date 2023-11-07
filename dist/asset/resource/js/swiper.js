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
    
    initialSlide: 1, // 중앙 이미지를 첫 번째로 설정
  slidesPerView: 3,
  centeredSlides: true, // 중앙에 위치한 슬라이드를 가로축의 중앙에 위치시킴
    slidesPerView: 3,
    speed: 500,
    loop: true,
    autoplay: {
        delay: 1300, // 3초 간격
        disableOnInteraction: true,
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

var swiper3 = new Swiper('.carKind-slider__pass .swiper-container', {
    
    initialSlide: 1, // 중앙 이미지를 첫 번째로 설정
  slidesPerView: 3,
  centeredSlides: true, // 중앙에 위치한 슬라이드를 가로축의 중앙에 위치시킴
    speed: 500,
    loop: true,
    autoplay: {
        delay: 1300, // 3초 간격
        disableOnInteraction: true,
    },
    spaceBetween: 10, // 슬라이드 간의 간격을 20픽셀로 설정
    pagination: {
        el: '.carKind-slider__pass .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.carKind-slider__pass .swiper-button-next',
        prevEl: '.carKind-slider__pass .swiper-button-prev',
    },
    slidesPerGroup: 1,
});

var swiper4 = new Swiper('.carKind-slider__RV .swiper-container', {
    
    initialSlide: 1, // 중앙 이미지를 첫 번째로 설정
  slidesPerView: 3,
  centeredSlides: true, // 중앙에 위치한 슬라이드를 가로축의 중앙에 위치시킴
    speed: 500,
    loop: true,
    autoplay: {
        delay: 1300, // 3초 간격
        disableOnInteraction: true,
    },
    spaceBetween: 10, // 슬라이드 간의 간격을 20픽셀로 설정
    pagination: {
        el: '.carKind-slider__RV .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.carKind-slider__RV .swiper-button-next',
        prevEl: '.carKind-slider__RV .swiper-button-prev',
    },
    slidesPerGroup: 1,
});

var swiper5 = new Swiper('.introduce-wrap .swiper-container', {
    
    initialSlide: 1, // 중앙 이미지를 첫 번째로 설정
  slidesPerView: 3,
  centeredSlides: true, // 중앙에 위치한 슬라이드를 가로축의 중앙에 위치시킴
    speed: 500,
    loop: true,
    autoplay: {
        delay: 1300, // 3초 간격
        disableOnInteraction: true,
    },
    spaceBetween: 10, // 슬라이드 간의 간격을 20픽셀로 설정
    pagination: {
        el: '.introduce-wrap .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.introduce-wrap .swiper-button-next',
        prevEl: '.introduce-wrap .swiper-button-prev',
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

// 세 번째 슬라이더의 버튼 요소와 아이콘 요소 선택
var toggleButton3 = document.getElementById('play-pause-button3');
var icon3 = document.getElementById('play-pause-icon3');

// 세 번째 슬라이더의 버튼 클릭 이벤트 리스너 추가
toggleButton3.addEventListener('click', function() {
    // 자동 재생 상태 확인
    if (swiper3.autoplay.running) {
        // 자동 재생 중지
        swiper3.autoplay.stop();
        // 아이콘 변경
        icon3.classList.remove('fa-pause');
        icon3.classList.add('fa-play');
    } else {
        // 자동 재생 시작
        swiper3.autoplay.start();
        // 아이콘 변경
        icon3.classList.remove('fa-play');
        icon3.classList.add('fa-pause');
    }
});

// 네 번째 슬라이더의 버튼 요소와 아이콘 요소 선택
var toggleButton4 = document.getElementById('play-pause-button4');
var icon4 = document.getElementById('play-pause-icon4');

// 네 번째 슬라이더의 버튼 클릭 이벤트 리스너 추가
toggleButton4.addEventListener('click', function() {
    // 자동 재생 상태 확인
    if (swiper4.autoplay.running) {
        // 자동 재생 중지
        swiper4.autoplay.stop();
        // 아이콘 변경
        icon4.classList.remove('fa-pause');
        icon4.classList.add('fa-play');
    } else {
        // 자동 재생 시작
        swiper4.autoplay.start();
        // 아이콘 변경
        icon4.classList.remove('fa-play');
        icon4.classList.add('fa-pause');
    }
});

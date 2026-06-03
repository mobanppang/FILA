
const carouselContainer = document.querySelector('.hero_section');
const carousel = carouselContainer.querySelector('.carousel');
let slides = carousel.getElementsByClassName('slide');
const [leftBtn, rightBtn] = carouselContainer.querySelectorAll('.button_container > button');
const slideWidth = +getComputedStyle(carouselContainer).width.split('px')[0];
const slideMoveMillisecond = 1000;
let carouselMousePosition = {
    startX: 0,
    endX: 0,
}
let autoplay = true;

if(autoplay){
    setInterval(() => {
        move_right();
    }, slideMoveMillisecond * 4);
}

function move_left(){
    leftBtn.onclick = null;
    carouselContainer.onmousedown = null;
    carouselContainer.onmouseup = null;
    let slide = slides[slides.length-1].cloneNode(true);
    carousel.insertAdjacentElement('afterbegin', slide);
    carousel.style.transform = `translateX(${-slideWidth}px)`;

    setTimeout(() => {
        carousel.style.transitionDuration = `${slideMoveMillisecond}ms`;
        carousel.style.transform = `translateX(0px)`;
        slides[slides.length-1].remove();
        setTimeout(() => {
            carousel.style.transitionDuration = '0s';
            leftBtn.onclick = move_left;
            carouselContainer.onmousedown = carousel_mouse_down;
            carouselContainer.onmouseup = carousel_mouse_up;
        }, slideMoveMillisecond);
    }, 10);
}

function move_right(){
    rightBtn.onclick = null;
    carouselContainer.onmousedown = null;
    carouselContainer.onmouseup = null;
    let slide = slides[0].cloneNode(true);
    carousel.insertAdjacentElement('beforeend', slide);
    carousel.style.transitionDuration = `${slideMoveMillisecond}ms`;
    carousel.style.transform = `translateX(${-slideWidth}px)`;
    setTimeout(() => {
        slides[0].remove();
        carousel.style.transform = `translateX(0px)`;
        carousel.style.transitionDuration = '0s';
        rightBtn.onclick = move_right;
        carouselContainer.onmousedown = carousel_mouse_down;
        carouselContainer.onmouseup = carousel_mouse_up;
    }, slideMoveMillisecond);
}

function carousel_mouse_down(e){
    carouselMousePosition.startX = e.clientX;
}

function carousel_mouse_up(e){
    carouselMousePosition.endX = e.clientX;
    // 감도 조절: 사용자가 실수로 미세하게 움직인 경우는 무시 (픽셀 단위)
    const threshold = 50;
    const diffX = carouselMousePosition.startX - carouselMousePosition.endX;
    if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
            move_right();
        } else {
            move_left();
        }
    }
}
const videos = document.querySelectorAll(".hero_video");

function pauseAll() {
    videos.forEach(v => {
        v.pause();
    });
}

function playVideo(index) {
    const v = videos[index];
    if (!v) return;

    v.pause();
    v.currentTime = 0;

    const p = v.play();
    if (p !== undefined) {
        p.catch(() => {
            console.log("iOS autoplay blocked");
        });
    }
}

swiper.on("slideChangeTransitionStart", () => {
    pauseAll();
});

swiper.on("slideChangeTransitionEnd", () => {
    playVideo(swiper.realIndex);
});

carouselContainer.onmousedown = carousel_mouse_down;
carouselContainer.onmouseup = carousel_mouse_up;
leftBtn.onclick = move_left;
rightBtn.onclick = move_right;
console.log(carouselContainer)
// document.getElementById("description").style.backgroundColor ="gray";

export default function basic() {

    let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        direction: 'vertical',
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    let galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

}



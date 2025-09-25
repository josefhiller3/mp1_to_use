/* Your JS here. */

var elem = document.getElementById('scroll_indicator_item');
window.addEventListener('scroll', () => {
    const initial_size = 1.5;
    const final_size = 0.9;
    const initial_padding = 1;
    const final_padding = 0.6;

    const scroll_threshold = 250;
    const scroll_position = window.scrollY;
    let progress = scroll_position / scroll_threshold;
    if (progress > 1) {
        progress = 1;
    }
    if (progress < 0){
        progress = 0;
    }
    const newSize = initial_size - progress * (initial_size - final_size);
    const newPadding = initial_padding - progress * (initial_padding - final_padding);
    elem.style.fontSize = newSize + "rem";
    elem.style.padding = newPadding + "rem";
    
  
});


const track = document.querySelector('.Carousel-item');
const slides = document.querySelectorAll('.Carousel-item img');
const carousel = document.querySelector('.Carousel');

const prevButton = document.querySelector('.Carousel-button-prev');
const nextButton = document.querySelector('.Carousel-button-next');
let currentIndex = 0;
function updateCarousel() {
    const imageWidth = carousel.clientWidth;
    const offset = -currentIndex*imageWidth;
    track.style.transform = `translateX(${offset}px)`;

}

function slideNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function slidePrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}



prevButton.addEventListener('click', e => {
    e.stopPropagation();
    slidePrev();
});

nextButton.addEventListener('click', e => {
    e.stopPropagation();
    slideNext();
});

window.addEventListener('resize', updateCarousel);

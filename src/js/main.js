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

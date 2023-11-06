window.onscroll = function() {
    var header = document.getElementById('#header');
    if (window.scrollY >= 0.2 * window.innerHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

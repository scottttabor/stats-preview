const image = document.getElementById('hero-image');

if (window.innerWidth > 767) {
    image.src = './images/image-header-desktop.jpg';
} else {
    image.src = './images/image-header-mobile.jpg';
};

window.addEventListener('resize', () => {
    console.log('working');
    if (window.innerWidth > 767) {
        image.src = './images/image-header-desktop.jpg';
    } else {
        image.src = './images/image-header-mobile.jpg';
    }
})
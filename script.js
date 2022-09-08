const sliders = document.querySelectorAll('.container__list');

sliders.forEach(slider => {
    slider.addEventListener('mouseover', () => {
        removeActiveClasses();
        slider.classList.add('active');
    });
});

function removeActiveClasses () {
    sliders.forEach(slider => {
        slider.classList.remove('active');
    });
};
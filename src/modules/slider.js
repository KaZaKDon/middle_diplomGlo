export const slider = () => {
    const items = document.querySelectorAll('.benefits__item');
    const prevBtn = document.querySelector('.benefits__arrow--left');
    const nextBtn = document.querySelector('.benefits__arrow--right');

    let currentIndex = 0;
    let autoSlide;

    function getVisibleCount() {
        return window.innerWidth <= 576 ? 1 : 3;
    }

    function render() {
        const visible = getVisibleCount();
        items.forEach(item => item.classList.remove('active'));

        for (let i = 0; i < visible; i++) {
            const index = (currentIndex + i) % items.length; // зацикливание
            items[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        render();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        render();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 2000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    window.addEventListener('resize', () => {
        render();
    });

    render();
    startAutoSlide();
};
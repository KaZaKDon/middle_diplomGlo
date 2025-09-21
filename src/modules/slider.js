export const slider = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const slider = document.querySelector('.benefits-wrap');
        const items = document.querySelectorAll('.benefits__item');
        const prevArrow = document.querySelector('.benefits__arrow--left');
        const nextArrow = document.querySelector('.benefits__arrow--right');

        let currentIndex = 0;

        // Определяем количество видимых элементов в зависимости от ширины экрана
        let itemsPerSlide = () => {
            if (window.innerWidth >= 576) {
                return 3;
            } else {
                return 1;
            }
        };

        const updateSliderPosition = () => {
            const perSlide = itemsPerSlide();
            const maxIndex = Math.ceil(items.length / perSlide) - 1;

            // Ограничение по границам
            if (currentIndex < 0) currentIndex = 0;
            if (currentIndex > maxIndex) currentIndex = maxIndex;

            const translateX = -(currentIndex * 100 * perSlide) + '%';

            // Вычисляем смещение
            slider.style.transform = `translateX(${translateX})`;
        };

        // Обработчики стрелок
        prevArrow.addEventListener('click', () => {
            currentIndex--;
            updateSliderPosition();
        });

        nextArrow.addEventListener('click', () => {
            currentIndex++;
            updateSliderPosition();
        });

        // Обновление при изменении размера окна
        window.addEventListener('resize', () => {
            updateSliderPosition();
        });

        // Инициализация
        updateSliderPosition();
    });

}
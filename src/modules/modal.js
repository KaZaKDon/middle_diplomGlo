export const modal = () => {
    document.querySelectorAll('.fancyboxModal').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            // Показываем модальное окно
            document.querySelector('.header-modal').style.display = 'block';
            // Можно добавить скрытие подложки, если есть
            document.querySelector('.overlay').style.display = 'block';
        });
    });

    // Закрытие модального окна при клике на крестик
    document.querySelectorAll('.header-modal__close').forEach(function (closeBtn) {
        closeBtn.addEventListener('click', function () {
            document.querySelector('.header-modal').style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
        });
    });

    // Также можно закрывать окно при клике на подложку (если есть такая возможность)
    document.querySelector('.overlay').addEventListener('click', function () {
        document.querySelector('.header-modal').style.display = 'none';
        this.style.display = 'none';
    });
}
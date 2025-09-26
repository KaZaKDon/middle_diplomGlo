export const modal = () => {
    const modalWindow = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');

    // Открытие модалки
    document.querySelectorAll('.fancyboxModal').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            modalWindow.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    // Закрытие по крестику
    document.querySelectorAll('.header-modal__close').forEach(function (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modalWindow.style.display = 'none';
            overlay.style.display = 'none';
        });
    });

    // Закрытие по клику на подложку
    overlay.addEventListener('click', function () {
        modalWindow.style.display = 'none';
        this.style.display = 'none';
    });

    // ✅ Закрытие по отправке формы
    document.querySelectorAll('.header-modal form').forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // чтобы страница не перезагружалась

            // Тут можно добавить проверку на ошибки, если используешь validForms
            // Если ошибок нет — закрываем
            modalWindow.style.display = 'none';
            overlay.style.display = 'none';

            // А ещё сбросим форму
            form.reset();
        });
    });
};
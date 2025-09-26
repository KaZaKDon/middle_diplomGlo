export const sertificatesModal = () => {
    const links = document.querySelectorAll('.sertificate-document');
    const modal = document.querySelector('.cert-modal');
    const modalContent = modal?.querySelector('.cert-modal-content');
    const modalImg = modal?.querySelector('img');
    const closeBtn = modal?.querySelector('.cert-modal-close');

    if (!links.length || !modal || !modalContent || !modalImg || !closeBtn) {
        console.warn("⚠️ Сертификаты или модалка не найдены на странице");
        return;
    }

    // Открыть модалку по клику на сертификат
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = link.getAttribute('href');
            modalImg.src = imgSrc;
            modal.classList.add('active');

            setTimeout(() => {
                modalContent.classList.add('show');
            }, 10);
        });
    });

    // Функция закрытия
    const closeModal = () => {
        modalContent.classList.remove('show');
        setTimeout(() => {
            modal.classList.remove('active');
        }, 300);
    };

    // Закрытие по крестику
    closeBtn.addEventListener('click', closeModal);

    // Закрытие по клику на фон
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
};
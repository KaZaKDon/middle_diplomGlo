export const slidServis = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const servicesWrap = document.querySelector('.services-wrap');
        if (!servicesWrap) {
            console.error("Элемент .services-wrap не найден!");
            return;
        }

        const allServices = Array.from(document.querySelectorAll('.service-block'));
        const servicePrev = document.querySelector('.services__arrow--left');
        const serviceNext = document.querySelector('.services__arrow--right');

        let serviceIndex = 0;

        function getVisibleCount() {
            return window.innerWidth <= 576 ? 1 : 2;
        }

        function renderServices() {
            const visible = getVisibleCount();
            servicesWrap.innerHTML = '';

            for (let i = 0; i < visible; i++) {
                const index = (serviceIndex + i) % allServices.length;
                const clone = allServices[index].cloneNode(true);
                servicesWrap.appendChild(clone);
            }
        }

        function nextService() {
            serviceIndex = (serviceIndex + 1) % allServices.length;
            renderServices();
        }

        function prevService() {
            serviceIndex = (serviceIndex - 1 + allServices.length) % allServices.length;
            renderServices();
        }

        serviceNext.addEventListener('click', nextService);
        servicePrev.addEventListener('click', prevService);
        window.addEventListener('resize', renderServices);

        renderServices();
    });

}
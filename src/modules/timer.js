export const timer = () => {
    document.addEventListener("DOMContentLoaded", () => {
        // 👉 дата окончания акции
        const endDate = new Date("2025-09-30T23:59:59");

        // 👉 выбираем все таймеры на странице
        const countdowns = document.querySelectorAll(".countdown");

        function updateCountdown() {
            const now = new Date();
            const diff = endDate - now;

            // если время вышло
            if (diff <= 0) {
                countdowns.forEach(cd => {
                    cd.querySelector(".count_1 span").textContent = "00";
                    cd.querySelector(".count_2 span").textContent = "00";
                    cd.querySelector(".count_3 span").textContent = "00";
                    cd.querySelector(".count_4 span").textContent = "00";
                });
                clearInterval(timer);
                return;
            }

            // вычисляем оставшееся время
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            // выводим во все таймеры
            countdowns.forEach(cd => {
                cd.querySelector(".count_1 span").textContent = String(days).padStart(2, "0");
                cd.querySelector(".count_2 span").textContent = String(hours).padStart(2, "0");
                cd.querySelector(".count_3 span").textContent = String(minutes).padStart(2, "0");
                cd.querySelector(".count_4 span").textContent = String(seconds).padStart(2, "0");
            });
        }

        // запуск
        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);
    });
}
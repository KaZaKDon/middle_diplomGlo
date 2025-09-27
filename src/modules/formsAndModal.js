// formsAndModal.js

// =========================
// 1. МОДАЛКА HEADER
// =========================
export const initHeaderModal = () => {
    const modalWindow = document.querySelector(".header-modal--opened");
    const overlay = document.querySelector(".overlay");

    if (!modalWindow || !overlay) return;

    // Открытие
    document.querySelectorAll(".fancyboxModal").forEach((button) => {
        button.addEventListener("click", (e) => {
            if (button.closest("#services")) return; // кнопки из services идут в другой модалке
            e.preventDefault();
            modalWindow.style.display = "block";
            overlay.style.display = "block";
        });
    });

    // Закрытие по крестику
    modalWindow.querySelectorAll(".header-modal__close").forEach((btn) => {
        btn.addEventListener("click", () => {
            modalWindow.style.display = "none";
            overlay.style.display = "none";
        });
    });

    // Закрытие по клику на overlay
    overlay.addEventListener("click", () => {
        modalWindow.style.display = "none";
        overlay.style.display = "none";
    });
}

// =========================
// 2. МОДАЛКА SERVICES
// =========================
export function initServicesModal() {
    
    const modal = document.querySelector(".services-modal--opened");
    const overlay = document.querySelector(".overlay");

    if (!modal || !overlay) {
        return;
    }

    // Делегирование: ловим клики по кнопкам вызова замерщика
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".service-button");
        if (btn) {
            e.preventDefault();

            // Открыть окно
            modal.style.display = "block";
            overlay.style.display = "block";

            // Если у кнопки есть data-subject → запишем в форму
            const subject = btn.dataset.subject;
            if (subject) {
                const subjectInput = modal.querySelector("input[name='subject']");
                if (subjectInput) subjectInput.value = subject;
            }
        }
    });

    // Закрытие окна
    modal.querySelector(".services-modal__close")?.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
}

// =========================
// 3. ВАЛИДАЦИЯ ФОРМ
// =========================
export function initFormsValidation() {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let valid = true;
            const requiredFields = form.querySelectorAll(".required");

            requiredFields.forEach((field) => {
                if (!field.value.trim()) {
                    field.classList.add("is-invalid");
                    valid = false;
                } else {
                    field.classList.remove("is-invalid");
                }
            });

            if (!valid) {
                console.warn("Форма не прошла валидацию");
                return;
            }

            // собираем данные формы
            const formData = new FormData(form);
            const data = {};

            formData.forEach((value, key) => {
                data[key] = value;
            });

            // 🔥 если на странице есть калькулятор — добавляем calc-total
            const calcTotal = document.getElementById("calc-total");
            if (calcTotal && calcTotal.value) {
                data["calc-total"] = calcTotal.value;
            }

            console.log("Отправляем JSON:", JSON.stringify(data));

            // TODO: здесь можно добавить fetch() для реальной отправки
        });
    });
}
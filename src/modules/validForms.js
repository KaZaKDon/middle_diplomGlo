export const validForms = () => {
    document.addEventListener("DOMContentLoaded", () => {
        // Все формы на странице
        const forms = document.querySelectorAll("form[name='action-form'], form[name='action-form2']");

        forms.forEach(form => {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const nameInput = form.querySelector("input[name='fio']");
                const phoneInput = form.querySelector("input[name='phone']");

                const name = nameInput.value.trim();
                const phone = phoneInput.value.trim();

                // Регулярки для проверки
                const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/; // только буквы и пробелы
                const phoneRegex = /^\+?\d{7,16}$/; // + опционально и до 16 цифр

                // Валидация
                let errors = [];

                if (!name && !phone) {
                    errors.push("Заполните оба поля");
                } else {
                    if (!name) {
                        errors.push("Введите имя");
                    } else if (!nameRegex.test(name)) {
                        errors.push("Имя может содержать только буквы (русские или латинские)");
                    }

                    if (!phone) {
                        errors.push("Введите телефон");
                    } else if (!phoneRegex.test(phone)) {
                        errors.push("Телефон должен содержать только + и цифры (до 16)");
                    }
                }

                if (errors.length > 0) {
                    alert(errors.join("\n"));
                    return;
                }

                // ✅ Если ошибок нет — собираем JSON
                const data = {
                    fio: name,
                    phone: phone,
                    page: form.querySelector("input[name='page']") ?
                        form.querySelector("input[name='page']").value :
                        "Не указана"
                };

                console.log("Отправка данных:", JSON.stringify(data));

                /* Пример отправки через fetch
                fetch("/send.php", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                    .then(res => res.json())
                    .then(result => {
                        alert("Заявка успешно отправлена!");
                        console.log(result);
                        form.reset();
                    })
                    .catch(err => {
                        alert("Ошибка при отправке!");
                        console.error(err);
                    });*/
            });
        });
    });
}
export const validForms = () => {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        const nameInput = form.querySelector("input[name='fio']");
        const phoneInput = form.querySelector("input[name='phone']");

        if (!nameInput || !phoneInput) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();

            // Убираем все лишние символы кроме цифр и плюса
            const cleanPhone = phone.replace(/[^\d+]/g, "");

            // Регулярки
            const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
            const phoneRegex = /^\+?\d{7,16}$/;

            let errors = [];

            if (!name && !cleanPhone) {
                errors.push("Заполните оба поля");
            } else {
                if (!name) {
                    errors.push("Введите имя");
                } else if (!nameRegex.test(name)) {
                    errors.push("Имя может содержать только буквы (русские или латинские)");
                }

                if (!cleanPhone) {
                    errors.push("Введите телефон");
                } else if (!phoneRegex.test(cleanPhone)) {
                    errors.push("Телефон должен содержать от 7 до 16 цифр (с плюсом или без)");
                }
            }

            if (errors.length > 0) {
                alert(errors.join("\n"));
                return;
            }

            const data = {
                fio: name,
                phone: cleanPhone,
                page: form.querySelector("input[name='page']")
                    ? form.querySelector("input[name='page']").value
                    : "Не указана"
            };

            console.log("Отправка данных:", JSON.stringify(data));
            form.reset();
        });
    });
};
            // пример отправки
            /*
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
                form.reset();
            })
            .catch(err => {
                alert("Ошибка при отправке!");
                console.error(err);
            });
            */
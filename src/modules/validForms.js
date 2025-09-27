export const validForms = () => {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        const nameInput = form.querySelector("input[name='fio']");
        const phoneInput = form.querySelector("input[name='phone']");

        if (!nameInput || !phoneInput) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // удалить старые ошибки
            form.querySelectorAll(".-message").forEach(msg => msg.remove());

            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();
            const cleanPhone = phone.replace(/[^\d+]/g, "");

            const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
            const phoneRegex = /^\+?\d{7,16}$/;

            //let errors = [];

            if (!name && !cleanPhone) {
                alert("Заполните оба поля");
            } else {
                if (!name) {
                    alert("Введите имя");
                } else if (!nameRegex.test(name)) {
                    alert("Имя может содержать только буквы (русские или латинские)");
                }

                if (!cleanPhone) {
                    alert("Введите телефон");
                } else if (!phoneRegex.test(cleanPhone)) {
                    alert("Телефон должен содержать от 7 до 16 цифр (с плюсом или без)");
                }
            }

            console.log(name, phone);

            /*if (errors.length > 0) {
                const errorMessage = document.createElement("div");
                errorMessage.classList.add("-message");
                errorMessage.style.color = "red";
                errorMessage.innerText = errors.join("\n");
                form.appendChild(errorMessage);
                return; // ❌ не отправляем дальше
            }

            // ✅ Если дошли сюда, значит ошибок нет
            const data = {
                fio: name,
                phone: cleanPhone,
                page: form.querySelector("input[name='page']")
                    ? form.querySelector("input[name='page']").value
                    : "Не указана"
            };*/

            console.log("Отправка данных:", JSON.stringify(data));

            // закрываем модалку и сбрасываем форму вручную
            const modalWindow = document.querySelector('.header-modal');
            const overlay = document.querySelector('.overlay');
            if (modalWindow && overlay) {
                modalWindow.style.display = 'none';
                overlay.style.display = 'none';
            }

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
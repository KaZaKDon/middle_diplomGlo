import { animateNumber } from "./helpers.js";

export const calc = () => {
    const typeSelect = document.getElementById("calc-type");
    const materialSelect = document.getElementById("calc-type-material");
    const areaInput = document.getElementById("calc-input");
    const totalInput = document.getElementById("calc-total");

    if (!typeSelect || !materialSelect || !areaInput || !totalInput) return;

    let previousTotal = 0;

    const calculate = () => {
        const typeValue = parseFloat(typeSelect.value);
        const materialValue = parseFloat(materialSelect.value);
        const areaValue = parseFloat(areaInput.value);

        let totalValue = 0;

        if (!isNaN(typeValue) && typeValue > 0 &&
            !isNaN(materialValue) && materialValue > 0 &&
            !isNaN(areaValue) && areaValue > 0) {
            totalValue = typeValue * materialValue * areaValue;
        }

        // Анимируем итог
        animateNumber(totalInput, previousTotal, totalValue, 1000);

        previousTotal = totalValue;
    };

    // Только цифры и точка
    areaInput.addEventListener("input", () => {
        areaInput.value = areaInput.value.replace(",", ".").replace(/[^0-9.]/g, "");
        calculate();
    });

    typeSelect.addEventListener("change", calculate);
    materialSelect.addEventListener("change", calculate);
}
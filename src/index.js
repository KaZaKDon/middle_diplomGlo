import { sertificatesModal } from "./modules/sertificates";
import { slider } from "./modules/slider";
import { slidServis } from "./modules/slidServis";
import { smoothScroll } from "./modules/smoothScroll";
import { timer } from "./modules/timer";
import {
    initHeaderModal,
    initServicesModal,
    initFormsValidation,
} from "./modules/formsAndModal.js";
import { initCalc } from "./modules/calc.js"

document.addEventListener("DOMContentLoaded", () => {
    initHeaderModal();
    initServicesModal();
    initFormsValidation();
    if (document.getElementById("calc")) {
        initCalc();
    }
});
slider();
slidServis();
timer();
sertificatesModal();
smoothScroll();

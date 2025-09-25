export const sertificatesModal = () => {
    const certLinks = document.querySelectorAll(".sertificate-document");
    const modal = document.getElementById("certModal");
    const modalImg = modal.querySelector("img");
    const closeBtn = modal.querySelector(".cert-modal-close");

    if (!certLinks.length || !modal || !modalImg || !closeBtn) return;

    // открытие
    certLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const imgSrc = link.getAttribute("href");
            modalImg.src = imgSrc;
            modal.classList.add("active");
        });
    });

    // закрытие крестиком
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        modalImg.src = "";
    });

    // закрытие по клику на фон
    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.classList.remove("active");
            modalImg.src = "";
        }
    });

    // закрытие по Esc
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
            modalImg.src = "";
        }
    });
}
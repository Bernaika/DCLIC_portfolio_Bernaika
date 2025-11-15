// Informations sur la propriétaire du portfolio
const portfolioOwner = {
    name: "Bernaïka ABÉLARD",
    title: "Etudiante en Gestion des Affaires – Administration & RH",
    email: "exemple@example.com",
    location: "Haïti"
};

console.log("Portfolio de :", portfolioOwner.name);

// Quand le HTML est chargé
document.addEventListener("DOMContentLoaded", () => {

    // 1) Animation des barres de compétences
    const skillBars = document.querySelectorAll(".skill-fill");

    skillBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.width = width + "%";
        }, 300);
    });

    // 2) Effet de survol sur les cartes de projet
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });
    });

    // 3) Validation simple du formulaire de contact (page d'accueil ou contact.html)
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const prenomInput = document.getElementById("prenom");
            const nomInput = document.getElementById("nom");
            const sujetInput = document.getElementById("sujet");
            const messageInput = document.getElementById("message");

            const prenomError = document.getElementById("prenom-error");
            const nomError = document.getElementById("nom-error");
            const messageError = document.getElementById("message-error");
            const successMessage = document.getElementById("form-success");

            if (prenomError) prenomError.textContent = "";
            if (nomError) nomError.textContent = "";
            if (messageError) messageError.textContent = "";
            if (successMessage) successMessage.textContent = "";

            let isValid = true;

            if (!prenomInput.value.trim()) {
                prenomError.textContent = "Veuillez saisir votre prénom.";
                isValid = false;
            }

            if (!nomInput.value.trim()) {
                nomError.textContent = "Veuillez saisir votre nom.";
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                messageError.textContent = "Veuillez écrire un message.";
                isValid = false;
            }

            if (isValid) {
                successMessage.textContent =
                    "Merci pour votre message, Bernaïka vous répondra dès que possible.";
                form.reset();
            }
        });
    }

});

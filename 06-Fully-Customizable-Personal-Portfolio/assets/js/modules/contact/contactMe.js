emailjs.init("OYrY6rSmYFDAmeLdr");

document.querySelector(".contact-form-fields").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm(
        "service_bc5qe7e",
        this
    ).then(() => {
        alert("✅ Message sent successfully!");
        this.reset(); // Clear the form
    })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("❌ Something went wrong. Please try again.");
        });
});
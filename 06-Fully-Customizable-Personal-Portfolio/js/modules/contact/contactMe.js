emailjs.init("OYrY6rSmYFDAmeLdr");

const contactMeForm = document.querySelector(".contact-form-fields");
if (!contactMeForm) {
    console.warn("Contact form (.contact-form-fields) not found in DOM.");
} else {
    // form fields
    const nameInput = contactMeForm.querySelector('#name');
    const user_email = contactMeForm.querySelector('#email');
    const subjectInput = contactMeForm.querySelector('#subject');
    const messageInput = contactMeForm.querySelector('#message');
    const submitBtn = contactMeForm.querySelector('button[type="submit"]');

    // Status region (aria-live) for accessible messages
    let statusRegion = contactMeForm.querySelector('.contact-form-status');
    if (!statusRegion) {
        statusRegion = document.createElement('div');
        statusRegion.className = 'contact-form-status';
        statusRegion.setAttribute('aria-live', 'polite');
        statusRegion.style.marginTop = '0.5rem';
        contactMeForm.appendChild(statusRegion);
    }

    // Utility: email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function createErrorMessage(input, message) {
        let el = input.parentNode.querySelector('.error-msg[data-for="' + input.id + '"]');
        if (!el) {
            el = document.createElement('div');
            el.className = 'error-msg';
            el.setAttribute('data-for', input.id);
            el.style.color = 'var(--color-primary)';
            el.style.fontSize = '0.875rem';
            el.style.marginTop = '0.2rem';
            input.insertAdjacentElement('afterend', el);
        }
        el.textContent = message;
        input.setAttribute('aria-invalid', 'true');
    }

    function clearErrorMessage(input) {
        const el = input.parentNode.querySelector('.error-msg[data-for="' + input.id + '"]');
        if (el) el.remove();
        input.removeAttribute('aria-invalid');
    }

    function clearAllErrors() {
        [nameInput, user_email, subjectInput, messageInput].forEach(i => i && clearErrorMessage(i));
        statusRegion.textContent = '';
    }

    function validateForm() {
        const errors = [];
        if (!nameInput || !nameInput.value.trim()) {
            errors.push({ field: nameInput, message: 'Please enter your full name.' });
        }
        if (!user_email || !user_email.value.trim()) {
            errors.push({ field: user_email, message: 'Please enter your email address.' });
        } else if (!emailRe.test(user_email.value.trim())) {
            errors.push({ field: user_email, message: 'Please enter a valid email address.' });
        }
        if (!subjectInput || !subjectInput.value.trim()) {
            errors.push({ field: subjectInput, message: 'Please enter a subject.' });
        }
        if (!messageInput || !messageInput.value.trim()) {
            errors.push({ field: messageInput, message: 'Please enter your message.' });
        }
        return errors;
    }

    function setFormSending(isSending) {
        if (submitBtn) {
            submitBtn.disabled = isSending;
            submitBtn.setAttribute('aria-busy', isSending ? 'true' : 'false');
            submitBtn.textContent = isSending ? 'Sending...' : 'Send Message';
        }
        [nameInput, user_email, subjectInput, messageInput].forEach(i => {
            if (i) i.disabled = isSending;
        });
    }

    // Configuration: adjust these IDs to match your EmailJS setup.
    // Assumptions: service ID exists and template expects keys: from_name, from_email, subject, message
    const SERVICE_ID = 'service_bc5qe7e';
    const TEMPLATE_ID = 'template_opc8inf';

    contactMeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearAllErrors();

        const errors = validateForm();
        if (errors.length > 0) {
            // show errors inline
            errors.forEach(err => {
                if (err.field) createErrorMessage(err.field, err.message);
            });
            // focus first error
            const first = errors[0].field;
            if (first) first.focus();
            statusRegion.textContent = 'Please fix the errors above and try again.';
            return;
        }

        // prepare params
        const templateParams = {
            from_name: nameInput.value.trim(),
            c: user_email.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim()
        };

        // UI: sending state
        setFormSending(true);
        statusRegion.textContent = '';


        if (window.emailjs && typeof emailjs.send === 'function') {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                .then(() => {
                    statusRegion.style.color = '#27ae60';
                    statusRegion.textContent = '✅ Message sent successfully!';
                    // Send auto-reply
                    emailjs.send(SERVICE_ID, 'template_78pfeeb', {
                        from_name: nameInput.value.trim(),
                        from_email: user_email.value.trim(),
                        reply_to: user_email.value.trim(),
                        subject: `Thanks ${templateParams["from_name"]} — let’s connect soon 🚀:`,
                        message: 'Thank you for contacting me! I will get back to you as soon as possible.'
                    })
                        .then(() => console.log("Auto-reply sent"))
                        .catch(err => console.error("Auto-reply failed:", err));

                        contactMeForm.reset();

                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    statusRegion.style.color = '#c0392b';
                    statusRegion.textContent = '❌ Something went wrong while sending. Please try again later.';
                })
                .finally(() => {
                    setFormSending(false);
                });
        }  else {
            // EmailJS not available: graceful fallback
            console.warn('EmailJS SDK not available. Ensure is loaded.');
            statusRegion.style.color = 'var(--color-primary)';
            statusRegion.textContent = 'Email service is unavailable. You can still copy your message and send it manually to mohammedelaouri@gmail.com.';
            setFormSending(false);
        }
    });
}

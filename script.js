document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear previous status
        formStatus.textContent = '';

        // Form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.classList.add('error-message');
            return;
        }

        // Send email using EmailJS
        emailjs.sendForm('service_2wuh1hb', 'template_jx3n7tz', form)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                form.reset();
                formStatus.textContent = 'Message sent successfully!';
                formStatus.classList.remove('error-message');
                formStatus.classList.add('success-message');
            }, function(error) {
                console.error('Failed to send email:', error);
                formStatus.textContent = 'Failed to send message. Please try again later.';
                formStatus.classList.remove('success-message');
                formStatus.classList.add('error-message');
            });
    });
});

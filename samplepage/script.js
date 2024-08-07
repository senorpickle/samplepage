document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    // Here you would typically send the form data to a server
    console.log(Object.fromEntries(formData));
});

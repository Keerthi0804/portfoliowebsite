document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate a successful submission
    document.getElementById('response-message').textContent = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById('response-message').classList.remove('hidden');

    // Reset the form
    this.reset();
});

// Function to show project details
function showProjectDetails(project) {
    alert(`Details for ${project} will be available soon!`);
}

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const eventName = document.getElementById("event").value;

    message.textContent =
        `Registration successful! Welcome, ${name}. You registered for ${eventName}.`;

    form.reset();
});
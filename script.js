// script.js

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("gov-links")) {
        const govLinks = [
            { name: 'Ministry of Home Affairs', url: 'https://www.mha.gov.in/' },
            { name: 'Ministry of Health and Family Welfare', url: 'https://www.mohfw.gov.in/' },
            { name: 'Ministry of Education', url: 'https://www.mhrd.gov.in/' },
            // Add more government sectors here
        ];

        const govLinksContainer = document.getElementById("gov-links");

        govLinks.forEach(link => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.name}</a>`;
            govLinksContainer.appendChild(li);
        });
    }

    if (document.getElementById("login-form")) {
        const loginForm = document.getElementById("login-form");
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            alert(`Logged in with email: ${email}`);
            // Implement actual login logic here
        });
    }

    if (document.getElementById("register-form")) {
        const registerForm = document.getElementById("register-form");
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;
            const confirmPassword = document.getElementById("register-confirm-password").value;
            
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            alert(`Registered with email: ${email}`);
            // Implement actual registration logic here
        });
    }
});

const API_BASE = "https://polling-back.onrender.com";

document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    if (!response.ok) {
        document.getElementById("message").textContent = "Invalid login.";
        return;
    }

    const data = await response.json();

    localStorage.setItem("token", data.token);

    window.location.href = "teacher.html";
});
const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

// Carregar tema salvo
if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
}

// Clique no botão
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        icon.textContent = "☀️";
        localStorage.setItem("tema", "dark");
    } else {
        icon.textContent = "🌙";
        localStorage.setItem("tema", "light");
    }
});

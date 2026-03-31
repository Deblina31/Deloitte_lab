const toggleButton = document.getElementById("themeToggle");
const body = document.body;

//default theme
body.classList.add("light");

toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("purple");
    } else {
        body.classList.remove("purple");
        body.classList.add("light");
    }
});

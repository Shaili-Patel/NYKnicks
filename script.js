document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("welcome-popup");
    const closeBtn = document.getElementById("close-popup");

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});

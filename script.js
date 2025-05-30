
function toggleFigure(img) {
    if (img.classList.contains("active")) {
        img.classList.remove("active");
        img.classList.add("inactive");
        localStorage.removeItem(img.src);
    } else {
        img.classList.remove("inactive");
        img.classList.add("active");
        localStorage.setItem(img.src, "active");
    }
}

// On load, restore from localStorage
window.onload = () => {
    document.querySelectorAll(".figure img").forEach(img => {
        if (localStorage.getItem(img.src) === "active") {
            img.classList.add("active");
            img.classList.remove("inactive");
        }
    });
};

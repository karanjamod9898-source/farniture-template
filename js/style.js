document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navList = document.getElementById("mainListDiv");
    const searchBox = document.getElementById("searchBox");
    const navContainer = document.querySelector(".nav-container");
    const toggle = document.getElementById("menu-toggle");

    // Toggle Menu + Scroll Lock
    navToggle?.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navList.classList.toggle("showing");
        navToggle.textContent = navToggle.classList.contains("active") ? "✖" : "☰";
        document.body.style.overflow = navList.classList.contains("showing") ? "hidden" : "auto";
    });

    // Handle Search Box Position
    const handleSearchBox = () => {
        if (!searchBox) return;
        (window.innerWidth <= 798 ? navList : navContainer)?.appendChild(searchBox);
    };
    window.addEventListener("resize", handleSearchBox);
    handleSearchBox();

    // If extra toggle exists
    toggle?.addEventListener("change", () => {
        document.body.style.overflow = toggle.checked ? "hidden" : "auto";
    });
});

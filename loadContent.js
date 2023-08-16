// loadContent.js
document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header");
    const contentContainer = document.getElementById("content");
    const footerContainer = document.getElementById("footer");

    fetch("components/header.html")
        .then(response => response.text())
        .then(data => headerContainer.innerHTML = data);

    fetch("components/content.html")
        .then(response => response.text())
        .then(data => contentContainer.innerHTML = data);

    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => footerContainer.innerHTML = data);
});

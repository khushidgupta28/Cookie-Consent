let cookieContainer = document.querySelector(".cookie-container");
let acceptButton = document.querySelector(".accept");

acceptButton.addEventListener("click", function() {
    cookieContainer.style.display = "none";
});

acceptButton.addEventListener("click", function() {
    localStorage.setItem("cookieAccepted", "true");
});

window.addEventListener("load", function() {
    if (localStorage.getItem("cookieAccepted") === "true") {
        cookieContainer.style.display = "none";
    } else {
        cookieContainer.style.display = "block";
    }
});

if (!checkCookieConsent()) {
  showCookiePopup();
}
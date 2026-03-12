// Hamburger mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Optional: Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");

if(localStorage.getItem("cookiesAccepted")){
cookieBanner.style.display = "none";
}

acceptBtn.addEventListener("click", function(){
localStorage.setItem("cookiesAccepted","true");
cookieBanner.style.display = "none";
});
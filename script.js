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





async function sendMessage() {
    const input = document.getElementById("user_input").value;
    const response = await fetch("/chat", {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({message: input})
    });
    const data = await response.json();
    document.getElementById("messages").innerHTML += `<p><b>You:</b> ${input}</p><p><b>Bot:</b> ${data.reply}</p>`;
}




const messagesDiv = document.getElementById("messages");
messagesDiv.scrollTop = messagesDiv.scrollHeight;
     








var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),
s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/XXXXXXXX/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

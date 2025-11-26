document.addEventListener("DOMContentLoaded", () => {
    const user = "10627800";
    const domain = "georgebrown.ca";
    const link = document.querySelector(".email");
    
    link.href = "mailto:" + user + "@" + domain;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 90; // navbar height
    const topPos = target.offsetTop - offset;

    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  });
});
});

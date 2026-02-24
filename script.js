// ================================
// PANAVANHU ELECTRICAL - SCRIPT.JS
// ================================


// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";
document.querySelector(".nav-container").appendChild(menuToggle);

menuToggle.addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("active");
});


// ===== ADD MOBILE STYLE =====
const style = document.createElement("style");
style.innerHTML = `
.menu-toggle{
  display:none;
  font-size:28px;
  color:white;
  cursor:pointer;
}

@media(max-width:768px){
  nav ul{
    position:absolute;
    top:70px;
    right:0;
    background:#0b1f3a;
    width:220px;
    flex-direction:column;
    padding:20px;
    display:none;
  }
  nav ul.active{
    display:flex;
  }
  .menu-toggle{
    display:block;
  }
}
`;
document.head.appendChild(style);


// ===== SMOOTH SCROLL =====
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    if(this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash)?.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===== STICKY HEADER SHADOW =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if(window.scrollY > 50){
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
  } else {
    header.style.boxShadow = "none";
  }
});


// ===== ACTIVE NAV LINK =====
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav ul li a").forEach(link => {
  if(link.getAttribute("href") === currentPage){
    link.style.color = "#f4b400";
  }
});


// ===== SCROLL REVEAL EFFECT =====
const revealElements = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if(position < screenHeight - 100){
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Initial state
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s ease";
});


// ===== CONTACT FORM VALIDATION =====
const form = document.querySelector("form");
if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you. Your request has been received. We will contact you shortly.");
    form.reset();
  });
}


// ===== WHATSAPP PREFILLED MESSAGE =====
const whatsappBtn = document.querySelector(".whatsapp-btn");
if(whatsappBtn){
  whatsappBtn.href = "https://wa.me/27732112762?text=" +
    encodeURIComponent("Hello Panavanhu Electrical, I would like to request a quotation.");
}

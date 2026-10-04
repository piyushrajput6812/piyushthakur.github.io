const toggle=document.querySelector(".nav-toggle"),links=document.querySelector(".nav-links");
toggle?.addEventListener("click",()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const header=document.querySelector(".site-header");
window.addEventListener("scroll",()=>{header.style.background=window.scrollY>30?"rgba(8,11,18,.9)":"rgba(8,11,18,.7)"},{passive:true});

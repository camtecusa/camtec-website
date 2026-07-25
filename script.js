const toggle=document.querySelector(".menu"),nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("quoteForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const d=new FormData(e.currentTarget);
  const subject=encodeURIComponent(`CAMTEC inquiry: ${d.get("set")}`);
  const body=encodeURIComponent(`Name: ${d.get("name")}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email")}\nCamera set: ${d.get("set")}\n\nMessage:\n${d.get("message")||""}`);
  window.location.href=`mailto:Camtec.usa@gmail.com?subject=${subject}&body=${body}`;
});
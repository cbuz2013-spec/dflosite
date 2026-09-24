const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.theme').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.theme').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const card=document.getElementById('brandCard');
    card.dataset.theme=btn.dataset.theme;
    const logo=card.querySelector('.client-logo');
    if(btn.dataset.theme==='red') logo.innerHTML='RIVER<br><b>ROOM</b>';
    if(btn.dataset.theme==='blue') logo.innerHTML='NORTHSTAR<br><b>CASINO</b>';
    if(btn.dataset.theme==='gold') logo.innerHTML='GRAND<br><b>TOUR</b>';
  });
});

document.getElementById('demoForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const subject=encodeURIComponent(`DealerFlow demo request — ${data.get('org')||'New lead'}`);
  const body=encodeURIComponent(
`DealerFlow Demo Request\n\nContact: ${data.get('name')||''}\nOrganization: ${data.get('org')||''}\nEmail: ${data.get('email')||''}\nPhone: ${data.get('phone')||''}\nOperation type: ${data.get('type')||''}\nApprox. dealer count: ${data.get('dealers')||''}\n\nWhat they want to improve:\n${data.get('notes')||''}`
  );
  document.getElementById('formStatus').textContent='Opening your email app with the demo request pre-filled…';
  window.location.href=`mailto:info@buzzingedge.com?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent=new Date().getFullYear();


// v1.1 guided demo tabs
document.querySelectorAll('.demo-tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.demo-tab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.demo-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    const panel=document.getElementById(btn.dataset.panel);
    if(panel) panel.classList.add('active');
  });
});

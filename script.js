const menu=document.querySelector('.menu');
const nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'關閉導覽選單':'開啟導覽選單')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const viewer=document.querySelector('#viewer');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{const img=document.querySelector('#viewer-image');img.src=button.dataset.image;img.alt=button.dataset.caption;document.querySelector('#viewer-title').textContent=button.dataset.caption;viewer.showModal()}));
document.querySelector('#close-viewer').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',e=>{const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close()});

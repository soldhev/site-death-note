// ── CURSOR CUSTOMIZADO ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; cursor.style.left=mx+'px'; cursor.style.top=my+'px'; });
function animateRing(){ rx+=(mx-rx)*.12; ry+=(my-ry)*.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(animateRing); }
animateRing();
document.querySelectorAll('a,button,input,select,textarea').forEach(el=>{ el.addEventListener('mouseenter',()=>{ cursor.style.transform='translate(-50%,-50%) scale(2)'; ring.style.transform='translate(-50%,-50%) scale(1.5)'; }); el.addEventListener('mouseleave',()=>{ cursor.style.transform='translate(-50%,-50%) scale(1)'; ring.style.transform='translate(-50%,-50%) scale(1)'; }); });

// ── SEARCH MODAL ──
const searchData = [
  {type:'Página',    name:'Home — Página Principal',         href:'index.html'},
  {type:'Página',    name:'Produtos — Loja Death Note',      href:'produtos.html'},
  {type:'Página',    name:'Cadastro — Criar Conta',          href:'cadastro.html'},
  {type:'Página',    name:'FAQ — Perguntas Frequentes',      href:'index.html#faq'},
  {type:'Página',    name:'Contatos',                        href:'index.html#contatos'},
  {type:'Página',    name:'Trabalhe Conosco',                href:'index.html#trabalhe'},
  {type:'Produto',   name:'Death Note Réplica Oficial',      href:'produtos.html'},
  {type:'Produto',   name:'Camiseta Light Yagami',           href:'produtos.html'},
  {type:'Produto',   name:'Boneco Ryuk Colecionável',        href:'produtos.html'},
  {type:'Produto',   name:'Caneca "I am Justice"',           href:'produtos.html'},
  {type:'Produto',   name:'Poster L × Light',                href:'produtos.html'},
  {type:'Produto',   name:'Action Figure L Lawliet',         href:'produtos.html'},
];

function openSearch(){
  document.getElementById('searchModal').classList.add('open');
  setTimeout(()=>document.getElementById('searchInput').focus(),100);
}
function closeSearch(){ document.getElementById('searchModal').classList.remove('open'); document.getElementById('searchInput').value=''; renderResults(''); }

document.getElementById('searchInput').addEventListener('input',e=>renderResults(e.target.value));

document.getElementById('searchModal').addEventListener('click',e=>{ if(e.target===e.currentTarget) closeSearch(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeSearch(); if((e.ctrlKey||e.metaKey)&&e.key==='k'){ e.preventDefault(); openSearch(); } });

function renderResults(q){
  const box = document.getElementById('searchResults');
  if(!q){ box.innerHTML='<p class="search-hint">Digite para buscar produtos, páginas...</p>'; return; }
  const results = searchData.filter(d=>d.name.toLowerCase().includes(q.toLowerCase())||d.type.toLowerCase().includes(q.toLowerCase()));
  if(!results.length){ box.innerHTML='<p class="search-hint">Nenhum resultado encontrado.</p>'; return; }
  box.innerHTML = results.map(r=>`<a class="search-result" href="${r.href}"><span class="res-type">${r.type}</span><span class="res-name">${r.name}</span></a>`).join('');
}
renderResults('');

// ── HEADER SCROLL SHADOW ──
window.addEventListener('scroll',()=>{
  const h = document.querySelector('header');
  if(window.scrollY>30) h.style.boxShadow='0 4px 30px rgba(0,0,0,.6)';
  else h.style.boxShadow='none';
});

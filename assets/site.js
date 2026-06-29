// HAFEEZ — shared mobile-menu behaviour
(function(){
  var burger=document.querySelector('.burger'),
      mm=document.getElementById('mobilemenu'),
      scrim=document.getElementById('scrim'),
      close=document.querySelector('.mm-close');
  if(!burger||!mm) return;
  function open(){mm.classList.add('open');scrim&&scrim.classList.add('open');burger.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';}
  function shut(){mm.classList.remove('open');scrim&&scrim.classList.remove('open');burger.setAttribute('aria-expanded','false');document.body.style.overflow='';}
  burger.addEventListener('click',open);
  close&&close.addEventListener('click',shut);
  scrim&&scrim.addEventListener('click',shut);
  mm.querySelectorAll('a').forEach(function(a){a.addEventListener('click',shut);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')shut();});
})();

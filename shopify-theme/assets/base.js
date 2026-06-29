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

// HAFEEZ — product page interactions (quantity, variant price, gallery)
(function(){
  // quantity steppers
  document.querySelectorAll('[data-qty-up],[data-qty-down]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var input = btn.parentElement.querySelector('input[name="quantity"]');
      if(!input) return;
      var v = parseInt(input.value, 10) || 1;
      v = btn.hasAttribute('data-qty-up') ? v + 1 : Math.max(1, v - 1);
      input.value = v;
    });
  });

  // variant select → update price display
  var sel = document.querySelector('[data-variant-select]');
  var priceEl = document.querySelector('[data-price]');
  if(sel && priceEl){
    sel.addEventListener('change', function(){
      var opt = sel.options[sel.selectedIndex];
      var p = opt.getAttribute('data-price');
      if(p) priceEl.innerHTML = p;
    });
  }

  // gallery thumbnails → swap main image
  var main = document.getElementById('MainImage');
  if(main){
    document.querySelectorAll('[data-thumb]').forEach(function(t){
      t.addEventListener('click', function(){
        var full = t.getAttribute('data-full');
        if(full) main.src = full;
      });
    });
  }
})();

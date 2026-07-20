document.getElementById('ep-year').textContent = new Date().getFullYear();

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
    // nav mobile
    (function(){
      const btn = document.getElementById('btnMobile');
      const menu = document.getElementById('mobileMenu');
      let open = false;
      function toggle(force){
        open = typeof force==='boolean' ? force : !open;
        btn.setAttribute('aria-expanded', open);
        menu.classList.toggle('open', open);
        if(open){ menu.querySelector('a')?.focus(); }
      }
      btn.addEventListener('click', () => toggle());
      menu.addEventListener('click', e => {
        const a = e.target.closest('a[href^="#"]'); if(a) toggle(false);
      });
      document.addEventListener('keydown', e => { if(open && e.key==='Escape') toggle(false); });

      // nav desktop condicional
      const navDesktop = document.querySelector('nav.only-desktop');
      const mq = window.matchMedia('(min-width: 980px)');
      function sync(){ navDesktop.style.display = mq.matches ? 'flex' : 'none'; }
      mq.addEventListener?.('change', sync); sync();
    })();
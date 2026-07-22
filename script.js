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

    const livros = [
    {
      imagem: "",
      titulo: "Título livro 1",
      autor: "João Guilherme Burnett Jr.",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      imagem: "",
      titulo: "Título livro 2",
      autor: "João Guilherme Burnett Jr.",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      imagem: "",
      titulo: "Título livro 3",
      autor: "João Guilherme Burnett Jr.",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  function criarCard(livro){
    const card = document.createElement("div");
    card.className = "livro-card";

    const capa = document.createElement("div");
    if (livro.imagem) {
      capa.className = "livro-capa";
      const img = document.createElement("img");
      img.src = livro.imagem;
      img.alt = "Capa do livro " + livro.titulo;
      capa.appendChild(img);
    } else {
      capa.className = "livro-capa placeholder";
      capa.textContent = "Capa em breve";
    }

    const titulo = document.createElement("h3");
    titulo.className = "livro-titulo";
    titulo.textContent = livro.titulo;

    const autor = document.createElement("p");
    autor.className = "livro-autor";
    autor.textContent = livro.autor;

    const desc = document.createElement("p");
    desc.className = "livro-desc";
    desc.textContent = livro.descricao;

    card.appendChild(capa);
    card.appendChild(titulo);
    card.appendChild(autor);
    card.appendChild(desc);
    return card;
  }

  const track = document.getElementById("livrosTrack");

const repeticoes = Math.max(4, Math.ceil(12 / livros.length));

for (let i = 0; i < repeticoes; i++) {
    livros.forEach(livro => {
        track.appendChild(criarCard(livro));
    });
}

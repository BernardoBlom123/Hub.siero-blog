import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import BlogSection from "../src/pages/site/components/BlogSection";
import "./demo.scss";

/**
 * A página de demonstração da seção.
 *
 * `MemoryRouter` e não `BrowserRouter`: a seção usa `<Link to="/blog">`, e no
 * GitHub Pages não há rota `/blog` nem fallback de SPA — o link levaria a um
 * 404. Com o roteador em memória, a navegação acontece fora da página e nada
 * quebra. O aviso no topo diz isso a quem estiver vendo.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="demo-aviso">
      <span>
        <strong>Demonstração</strong> da seção "Atualizações do mercado" da
        landing do Hub.Siero
      </span>
      <span className="demo-ponto" aria-hidden="true" />
      <span>Conteúdo em lorem ipsum, links inertes</span>
      <span className="demo-ponto" aria-hidden="true" />
      <a href="https://github.com/BernardoBlom123/Hub.siero-blog">
        Código no GitHub
      </a>
    </div>

    <div className="site-institucional">
      <main>
        <MemoryRouter>
          <BlogSection />
        </MemoryRouter>
      </main>
    </div>
  </StrictMode>,
);

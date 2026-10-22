import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { scrollToAnchor } from "../smoothScroll";

/**
 * Atualizações do mercado: a vitrine de conteúdo na landing, logo abaixo do
 * vídeo do Hero.
 *
 * É uma CHAMADA, não uma segunda listagem: o conteúdo abaixo é placeholder
 * (lorem ipsum) e não vem da API pública. Quando for ligado ao backend, a fonte
 * é `PublicArticle` de `../blog/types` e o endereço de cada cartão passa a ser
 * `/blog/:slug`.
 *
 * O desenho foge da grade de três colunas das outras seções de propósito: um
 * destaque alto à esquerda, três chamadas empilhadas à direita e uma fileira de
 * três abaixo dão hierarquia editorial, que é o que distingue uma seção de
 * conteúdo de uma de serviços.
 */

interface Post {
  readonly id: string;
  readonly categoria: string;
  readonly titulo: string;
  readonly resumo: string;
  readonly data: string;
  readonly leitura: string;
}

const DESTAQUE: Post = {
  id: "destaque",
  categoria: "Lorem",
  titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do",
  resumo:
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  data: "18 de março de 2026",
  leitura: "6 min",
};

/** As três chamadas empilhadas ao lado do destaque. */
const POSTS: readonly Post[] = [
  {
    id: "post-1",
    categoria: "Ipsum",
    titulo: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    resumo:
      "Accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.",
    data: "11 de março de 2026",
    leitura: "4 min",
  },
  {
    id: "post-2",
    categoria: "Dolor",
    titulo: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit",
    resumo:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur velit.",
    data: "4 de março de 2026",
    leitura: "7 min",
  },
  {
    id: "post-3",
    categoria: "Amet",
    titulo: "At vero eos et accusamus et iusto odio dignissimos ducimus",
    resumo:
      "Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
    data: "25 de fevereiro de 2026",
    leitura: "5 min",
  },
];

/** A fileira de três abaixo do destaque. */
const POSTS_SECUNDARIOS: readonly Post[] = [
  {
    id: "post-4",
    categoria: "Tempor",
    titulo: "Excepteur sint occaecat cupidatat non proident sunt in culpa",
    resumo:
      "Qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis natus.",
    data: "19 de fevereiro de 2026",
    leitura: "6 min",
  },
  {
    id: "post-5",
    categoria: "Labore",
    titulo: "Et harum quidem rerum facilis est et expedita distinctio nam",
    resumo:
      "Libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
    data: "12 de fevereiro de 2026",
    leitura: "3 min",
  },
  {
    id: "post-6",
    categoria: "Magna",
    titulo: "Temporibus autem quibusdam et aut officiis debitis aut rerum",
    resumo:
      "Necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae.",
    data: "5 de fevereiro de 2026",
    leitura: "8 min",
  },
];

/** Um cartão de chamada. `vertical` é a variante da fileira de baixo. */
function PostCard({
  post,
  numero,
  vertical = false,
}: {
  post: Post;
  numero: number;
  vertical?: boolean;
}) {
  return (
    <article
      className={`blog-post-card${vertical ? " blog-post-card--coluna" : ""}`}
    >
      <span className="blog-post-index" aria-hidden="true">
        {String(numero).padStart(2, "0")}
      </span>
      <div className="blog-post-body">
        <span className="blog-chip">{post.categoria}</span>
        <h3 className="blog-post-title">{post.titulo}</h3>
        <p className="blog-post-excerpt">{post.resumo}</p>
        <div className="blog-meta">
          <span>{post.data}</span>
          <span className="blog-meta-sep" aria-hidden="true" />
          <span className="blog-meta-leitura">
            <Clock size={13} strokeWidth={1.8} aria-hidden="true" />
            {post.leitura}
          </span>
        </div>
      </div>
      <ArrowUpRight
        size={18}
        strokeWidth={1.8}
        className="blog-post-seta"
        aria-hidden="true"
      />
    </article>
  );
}

export default function BlogSection() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-section-head">
        <p className="section-label">Atualizações do mercado</p>
        <p className="blog-section-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="blog-showcase">
        {/* Destaque */}
        <article className="blog-highlight">
          <div className="blog-highlight-cover" aria-hidden="true">
            <span className="blog-chip blog-chip--sobre-cor">{DESTAQUE.categoria}</span>
          </div>
          <div className="blog-highlight-body">
            <h3 className="blog-highlight-title">{DESTAQUE.titulo}</h3>
            <p className="blog-highlight-excerpt">{DESTAQUE.resumo}</p>
            <div className="blog-meta">
              <span>{DESTAQUE.data}</span>
              <span className="blog-meta-sep" aria-hidden="true" />
              <span className="blog-meta-leitura">
                <Clock size={14} strokeWidth={1.8} aria-hidden="true" />
                {DESTAQUE.leitura} de leitura
              </span>
            </div>
          </div>
        </article>

        {/* Chamadas ao lado do destaque */}
        <div className="blog-list">
          {POSTS.map((post, i) => (
            <PostCard key={post.id} post={post} numero={i + 1} />
          ))}
        </div>
      </div>

      {/* Fileira de três, abaixo */}
      <div className="blog-grid">
        {POSTS_SECUNDARIOS.map((post, i) => (
          <PostCard key={post.id} post={post} numero={POSTS.length + i + 1} vertical />
        ))}
      </div>

      <div className="blog-actions">
        <a
          href="#contato"
          className="btn-primary btn-primary--static"
          onClick={scrollToAnchor("#contato")}
        >
          Falar com um especialista
          <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
        </a>
        <Link to="/blog" className="blog-link-secundario">
          Ver todos os artigos
          <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

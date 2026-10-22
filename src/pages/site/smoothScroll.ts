/**
 * Smooth-scrolls to an in-page section by anchor target (e.g. "#contato").
 * Returns a click handler that keeps the anchor's href for accessibility /
 * no-JS fallback while providing smooth behavior when JS is available.
 */
export function scrollToAnchor(
  href: string
): (event: React.MouseEvent<HTMLAnchorElement>) => void {
  return (event) => {
    const id = href.startsWith("#") ? href.slice(1) : href;
    const target = document.getElementById(id);
    if (!target) return; // let the browser handle the fallback jump
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

if (window.customElements) {
  try {
    window.customElements.define('ie-sucks', class extends HTMLElement {});
  } catch {
    // we don't care if this breaks, for whatever reason
  }
}

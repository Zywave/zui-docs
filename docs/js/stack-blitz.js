import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';
import StackBlitzSDK from 'https://unpkg.com/@stackblitz/sdk/bundles/sdk.m.js';

class StackBlitz extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      _loading: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.label = 'Launch Code Editor';
    this._loading = false;
    this._vm = null;
  }

  static get styles() {
    return [
      css`
        /* iframe#container will replace div#container once StackBlitz loads. */
        iframe {
          border: none;
          min-height: 50vh;
        }
      `
    ];
  }

  firstUpdated() {
    this.loadProject();
  }

  render() {
    return html`
      <div id="container">
        ${this._loading ? 'Loading Code Editor...' : this.label}
      </div>
    `;
  }

  async loadProject() {
    this.style.display = 'block';
    if (!this._loading) {
      try {
        const folder = '/stack-blitz';
        this._loading = true;
        const response = await fetch(`${folder}/manifest.json`);
        const manifest = await response.json();
        const files = manifest.files.map(async filename => {
          const response = await fetch(`${folder}/${filename}`);
          return { [filename]: await response.text() };
        });
        const project = Object.assign({}, manifest, {
          files: (await Promise.all(files)).reduce((acc, file) => Object.assign(acc, file), {}),
          settings: {
            compile: {
              action: 'refresh'
            }
          }
        });
        const container = this.shadowRoot.getElementById('container');
        this._vm = await StackBlitzSDK.embedProject(container, project, {
          forceEmbedLayout: true,
          view: 'both',
          openFile: 'index.html'
        });
      } finally {
        this._loading = false;
      }
    }
  }
}

customElements.define('stack-blitz', StackBlitz);

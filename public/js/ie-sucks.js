class IeSucks extends HTMLElement {
  constructor() {
    super(); 

    const template = document.createElement('template');
    template.innerHTML = `
        <style>
        :host {
            display: none;
        }
        </style>
        <slot></slot>
    `;
    
    // use Shadow DOM to encapsulate this element from the global context
    this.attachShadow({ mode: 'open' });
    
    // attach the template from above to your element
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

if (customElements) {
    customElements.define('ie-sucks', IeSucks);
}

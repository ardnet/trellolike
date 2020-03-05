async function getColumn() {
  const res = await fetch('http://127.0.0.1:3000/column');
  return await res.json();
}

class Column extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode: 'open'});
  }

  static get observedAttributes() {
    return ['addcol'];
  }

  set addcol(value) {
    this.setAttribute('addcol', value);
  }

  get addcol() {
    return this.getAttribute('addcol');
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attributeChangedCallback: ' + this.addcol);
    console.log('attributeChangedCallback: ' + name);
    console.log('attributeChangedCallback: ' + oldVal);
    console.log('attributeChangedCallback: ' + newVal);
  }

  connectedCallback() {
    const colTpl = document.getElementById('column-tpl');

    getColumn().then((data) => {
      data.forEach(element => {
        const instColTpl = document.importNode(colTpl.content, true);

        instColTpl.querySelector('.columns').setAttribute('id', 'column-' + element.id);
        instColTpl.querySelector('.column-title').innerHTML = element.col_title;
        instColTpl.querySelector('.del-col-butt').innerHTML = 'Delete column ' + element.id;

        instColTpl.querySelector('.add-card-butt').setAttribute('id', 'add-card-in-column-' + element.id);
        instColTpl.querySelector('.add-card-butt').innerHTML = 'Add card in column ' + element.id;
        instColTpl.querySelector('.del-card-butt').innerHTML = 'Delete card in column ' + element.id;

        this.root.appendChild(instColTpl);
      });
    });
  }
}

customElements.define('tl-column', Column);
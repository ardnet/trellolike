async function getColumn() {
  const res = await fetch('http://127.0.0.1:3000/column');
  return await res.json();
}

class Column extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    const colTpl = document.getElementById('column-tpl');

    getColumn().then((data) => {
      data.forEach(element => {
        console.log(element);
        const instColTpl = document.importNode(colTpl.content, true);
        instColTpl.querySelector('.columns').setAttribute('id', 'column-' + element.id);
        instColTpl.querySelector('.column-title').innerHTML = element.col_title;

        instColTpl.querySelector('.add-card-butt').setAttribute('id', 'add-card-in-column-' + element.id);
        instColTpl.querySelector('.add-card-butt').innerHTML = 'Add card in column ' + element.id;

        this.root.appendChild(instColTpl);
      });
    });
  }
}

customElements.define('tl-column', Column);
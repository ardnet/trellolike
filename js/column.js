class Column extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <div id="column-1" class="columns">
        <div class="column-name">Column 1</div>
        <button class="add-card" id="add-card-in-column-1">Add card in column 1</button>
      </div>
      
      <div id="column-2" class="columns">
        <div class="column-name">Column 2</div>
        <button class="add-card" id="add-card-in-column-2">Add card in column 2</button>
      </div>

      <div class="columns">
       <button class="add-column">Add column</button>
      </div>
    `;
  }
}

customElements.define('tl-column', Column);
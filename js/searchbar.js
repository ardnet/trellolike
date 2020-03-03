class SearchBar extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `<input type="text" placeholder="Search card(s)..." />`;
  }
}

customElements.define('tl-searchbar', SearchBar);
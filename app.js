// Access the main Elements container
const utilsTemp = document
  .querySelector(`[data-type="utils-temp-container"]`)
  .content.cloneNode(true);
const mainUiTemp = document
  .querySelector(`[data-type="main-ui-temp-container"]`)
  .content.cloneNode(true);
// Updated templates object with all identified templates

const modTemplates = {};
const utilsTemplates = {};
const mainUiTemplates = {};

// renderMod(product);
renderPrime(prime, viewType);
renderSection(sections, products, viewType);

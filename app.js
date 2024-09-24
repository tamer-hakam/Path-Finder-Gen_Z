// Access the main Elements container
const utilsTemp = document
  .querySelector(`[data-type="utils-temp-container"]`)
  .content.cloneNode(true);
const mainUiTemp = document
  .querySelector(`[data-type="main-ui-temp-container"]`)
  .content.cloneNode(true);
// Updated templates object with all identified templates

const modTemplates = {};
const modElementsTemplate = {};
const utilsTemplates = {};
const mainUiTemplates = {};

// renderMod(product);
renderPrime(products.idA1, viewType);
renderSection(sections.sections0, products, viewType);
window.onload = function () {
  setTimeout(() => {
    initInfiniteScroll(); // Initialize infinite scrolling after a delay
  }, 500); // Adjust the delay as needed (in milliseconds)
};

function createMainFooter(options) {
  console.log("footer");

  const template = getTemplateClone(mainUiTemplates, "footer", mainUiTemp);
  const parent = document.querySelector(`[data-type="body-container"]`);

  const fragment = document.createDocumentFragment();
  // Append the populated clone to the fragment
  fragment.appendChild(template);

  // Append the fragment to the body in one operation to minimize reflows
  parent.appendChild(fragment);
}

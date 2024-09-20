function createModFooter(data, temp, parent) {
  const footerTemp = temp.querySelector(`[data-type="footer"]`).cloneNode(true);
  const crossedPriceTemp = temp
    .querySelector(`[data-type="crossedPrice"]`)
    .cloneNode(true);
  const priceTemp = temp.querySelector(`[data-type="price"]`).cloneNode(true);
  const footer = footerTemp.cloneNode(true);

  const priceContainer = footer.querySelector(`[data-type="price-container"]`);

  if (data.price) {
    const price = priceTemp.cloneNode(true);
    price.textContent = `${data.price}_Egp`;
    priceContainer.appendChild(price);
  }

  if (data.crossedPrice) {
    const crossedPrice = crossedPriceTemp.cloneNode(true);
    crossedPrice.textContent = `${data.crossedPrice}_Egp`;
    priceContainer.appendChild(crossedPrice);
  }
  const fragment = document.createDocumentFragment();
  fragment.appendChild(footer);
  parent.appendChild(fragment);
}

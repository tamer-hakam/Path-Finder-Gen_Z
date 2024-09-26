//  * clone the node template
//  * extract the dom elements
//  * create color > helper function
//  * create size  > helper function
//  * create orders table > helper function
//  ! if size for oneSize

// const testSize = splitSizeChunks(productBB.sizeList, 5);
// const testcolor = splitColorsChunks(productBB.colors, 4);

function createAoptions(product) {
  // ! store this for later use
  const modTemp = document
    .querySelector(`[data-type="option-a-mod"]`)
    .content.cloneNode(true);

  const modBody = modTemp.querySelector(`[data-type="mod-body"]`);
  const img = modTemp.querySelector(`[data-type="img"]`);
  const crossedPrice = modTemp.querySelector(`[data-type="crossedPrice"]`);
  const price = modTemp.querySelector(`[data-type="price"]`);

  //  ! check if there is discount
  // const priceB = modTemp.querySelector(`[data-type="priceB"]`);

  img.src = product.cartOptionsDetails.imgSrc;
  crossedPrice.textContent = product.details.crossedPrice;
  price.textContent = product.details.price;

  const colorNavTag = modTemp
    .querySelector(`[data-type="color-nav-tag"]`)
    .cloneNode(true);

  const colorName = modTemp
    .querySelector(`[data-type="color-name"]`)
    .cloneNode(true);

  const colorsContainer = modTemp.querySelector(
    `[data-type="colors-container"]`
  );

  const sizeText = modTemp
    .querySelector(`[data-type="sizeText"]`)
    .cloneNode(true);
  const sizeContainer = modTemp.querySelector(`[data-type="size-container"]`);
  document.body.appendChild(modTemp);
  createColorsOptions(item.getColors(3), colorsContainer);
  createSizeOptions(item.getSizes(5), sizeContainer);

  createShoppingListTable(item);
}

function createColorsOptions(colors, colorsContainer) {
  colors.forEach((element) => {
    const nav = document.querySelector(`[data-type="testNav"]`).cloneNode();
    const ul = document.createElement("ul");
    nav.appendChild(ul);
    colorsContainer.appendChild(nav);

    element.forEach((color) => {
      console.log(color);

      color.forEach((colorObj) => {
        const li = document.createElement("li");
        const aElem = document.createElement("a");
        li.appendChild(aElem);
        const button = createColorBtn(colorObj.value, {
          classes: ["colorIconC"],
        });

        aElem.appendChild(button);
        ul.appendChild(li);
      });
    });
  });
}

function createSizeOptions(sizelList, sizeContainer) {
  sizelList.forEach((element) => {
    const nav = document.querySelector(`[data-type="testNav"]`).cloneNode();
    const ul = document.createElement("ul");
    nav.appendChild(ul);
    sizeContainer.appendChild(nav);

    element.forEach((sizeChunk) => {
      sizeChunk.forEach((size) => {
        console.log(size);
        const li = document.createElement("li");
        const aElem = document.createElement("a");
        aElem.textContent = size.name;
        li.appendChild(aElem);
        ul.appendChild(li);
      });
    });
  });
}

function createInitialShoppingList(_listOptions) {
  let shoppingList = {};
  let listOptions = {};
  shoppingList.list = [];
  shoppingList.total = {};
  shoppingList.total.totalPrice = 0;
  shoppingList.total.totalItemNum = 0;
  listOptions.itemId = 1;
  listOptions.price = _listOptions.price;
  listOptions.size = _listOptions.size;
  listOptions.colorId = _listOptions.colorId;
  listOptions.quantity = _listOptions.quantity;
  listOptions.colorName = _listOptions.colorName;
  shoppingList.list.push(listOptions);
  return shoppingList;
}

createAoptions(item);

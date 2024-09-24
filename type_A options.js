//  * clone the node template
//  * extract the dom elements
//  * create color > helper function
//  * create size  > helper function
//  * create orders table > helper function
//  ! if size for oneSize

const productBB = {
  modPrime: true,
  numOfcolors: 4,
  numOfphotos: 4,
  mediaSrc: "/media_assets/test/checks/",
  carrentColor: 3,
  carrentimgNum: 1,
  sizeList: ["1X", "2X", "3X", "4X", "5X", "1X", "2X", "3X"],

  sizeTable: {
    head: ["مقاس", "الصدر", "الخصر", "الطول"],
    rows: [
      ["L", "50 CM", "60 CM", "70 CM"],
      ["XL", "80 CM", "90 CM", "100 CM"],
      ["2XL", "110 CM", "120 CM", "130 CM"],
      ["3XL", "105 CM", "107 CM", "180 CM"],
      ["4XL", "100 CM", "100 CM", "150 CM"],
      ["5XL", "100 CM", "140 CM", "111 CM"],
    ],
  },
  colors: {
    color_1: {
      name: "خراوى",
      colorVal: ["#00ffff", "#ff00bb"],
      colorId: "color_1",
    },
    color_2: {
      name: "خراوى",
      colorVal: ["#00ff5e"],
    },
    color_3: {
      name: "خراوى",
      colorVal: ["#ff00bb"],
    },
    color_4: {
      name: "خراوى",
      colorVal: ["#00ffff"],
    },
    color_5: {
      name: "خراوى",
      colorVal: ["#00ff5e"],
    },
    color_6: {
      name: "خراوى",
      colorVal: ["#ff00bb"],
    },
  },
  details: {
    imgsrc: "media_assets/test/1.png",
    title: "جامب سوت",
    subTitle: "جامب سوت جامب سوت",
    paragraph:
      "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
    crossedPrice: 100,
    price: 570,
  },
  mod: {
    section1: {
      clo1: { type: "sizeTable" },
      clo2: {
        type: "text",
        details: {
          title: "1جامب سوت",
          subTitle: "جامب سوت جامب سوت",
          paragraph:
            "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
        },
      },
    },
    section2: {
      clo1: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/1.png",
        },
      },
      clo2: {
        type: "text",
        details: {
          title: "جامب سوت",
          subTitle: "جامب سوت جامب سوت",
          paragraph:
            "الخامة عشرة على عشرة و شوية كلام تمام بخصوص المنتج وكدة - مع عرض وبتاع و اى حوار فىسطرين والسلام واحنا جايين نعمل قلبان ونمشى وبلاش اندهاش علشان التقيل لسه مجاش اوى هرى وخلاص ",
        },
      },
    },
    section3: {
      clo1: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/sub/1.png",
          isRound: true,
          figcaption: "أنيق -- مريح -- وعملى",
        },
      },
      clo2: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/sub/2.png",
          isRound: true,
          figcaption: "أنيق -- مريح -- وعملى",
        },
      },
      clo3: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/sub/3.png",
          isRound: true,
          figcaption: "أنيق -- مريح -- وعملى",
        },
      },
    },
  },
  cartOptionsDetails: {
    imgSrc: "media_assets/test/1.png",
  },
  initialShoppingListOptions: {
    price: 250,
    size: "--",
    colorId: "",
    quantity: 1,
    colorName: "--",
  },
};

const testSize = splitSizeChunks(productBB.sizeList, 5);
const testcolor = splitColorsChunks(productBB.colors, 4);

function createAoptions(product, temp, parent) {
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
  createColorsOptions(testcolor, colorsContainer);
  createSizeOptions(testSize, sizeContainer);
  const shoppingList = createInitialShoppingList(
    product.initialShoppingListOptions
  );
  createShoppingListTable(shoppingList);
}

function createColorsOptions(colors, colorsContainer) {
  colors.forEach((element) => {
    const nav = document.querySelector(`[data-type="testNav"]`).cloneNode();
    const ul = document.createElement("ul");
    nav.appendChild(ul);
    colorsContainer.appendChild(nav);

    element.forEach((color) => {
      Object.entries(color).forEach(([key, colorObj]) => {
        const li = document.createElement("li");
        const aElem = document.createElement("a");
        li.appendChild(aElem);
        const button = createColorBtn(colorObj.colorVal, {
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

    element.forEach((size) => {
      const li = document.createElement("li");
      const aElem = document.createElement("a");
      aElem.textContent = size;
      li.appendChild(aElem);
      ul.appendChild(li);
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

createAoptions(productBB);

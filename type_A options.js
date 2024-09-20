//  * clone the node template
//  * extract the dom elements
//  * create color > helper function
//  * create size  > helper function
//  * create orders table > helper function
// ! if size for oneSize
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
      colorVal: "#00ffff",
    },
    color_2: {
      name: "خراوى",
      colorVal: "#00ff5e",
    },
    color_3: {
      name: "خراوى",
      colorVal: "#ff00bb",
    },
    color_4: {
      name: "خراوى",
      colorVal: "#00ffff",
    },
    color_5: {
      name: "خراوى",
      colorVal: "#00ff5e",
    },
    color_6: {
      name: "خراوى",
      colorVal: "#ff00bb",
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
    colors: {
      color_1: {
        name: "خراوى",
        colorVal: "#00ffff",
      },
      color_2: {
        name: "خراوى",
        colorVal: "#00ff5e",
      },
      color_3: {
        name: "خراوى",
        colorVal: "#ff00bb",
      },
    },
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
};

function createAoptions(temp, parent) {
  const modTemp = document
    .querySelector(`[data-type="option-a-mod"]`)
    .content.cloneNode(true);

  const modBody = modTemp
    .querySelector(`[data-type="mod-body"]`)
    .content.cloneNode(true);

  const img = modTemp
    .querySelector(`[data-type="img"]`)
    .content.cloneNode(true);
  const crossPrice = modTemp
    .querySelector(`[data-type="crossPrice"]`)
    .content.cloneNode(true);

  const price = modTemp
    .querySelector(`[data-type="price"]`)
    .content.cloneNode(true);

  const priceB = modTemp
    .querySelector(`[data-type="priceB"]`)
    .content.cloneNode(true);

  const colorNavTag = modTemp
    .querySelector(`[data-type="color-nav-tag"]`)
    .content.cloneNode(true);

  const colorName = modTemp
    .querySelector(`[data-type="color-name"]`)
    .content.cloneNode(true);

  const colorsContainer = modTemp
    .querySelector(`[data-type="colors-container"]`)
    .content.cloneNode(true);

  const sizeText = modTemp
    .querySelector(`[data-type="sizeText"]`)
    .content.cloneNode(true);
  const sizeOptions = modTemp
    .querySelector(`[data-type="sizeOptions"]`)
    .content.cloneNode(true);
}

function createColorsOptions(colors) {
  const parent = document.querySelector(`[data-type="colors-container"]`);

  const ul = document.createElement("ul");
  parent.appendChild(ul);

  colors.forEach((element) => {
    const nav = document.querySelector(`[data-type="testNav"]`).cloneNode();
    const ul = document.createElement("ul");
    nav.appendChild(ul);
    parent.appendChild(nav);

    element.forEach((color) => {
      Object.entries(color).forEach(([key, colorObj]) => {
        const li = document.createElement("li");
        const aElem = document.createElement("a");
        li.appendChild(aElem);
        const span = document.createElement("span");
        span.classList.add("tag");
        span.classList.add("is-medium");
        span.textContent = "Normal";
        span.style.color = colorObj.colorVal;
        span.style.backgroundColor = colorObj.colorVal;
        aElem.appendChild(span);
        ul.appendChild(li);
      });
    });
  });
}

function createSizeOptions(sizelList) {
  const parent = document.querySelector(`[data-type="sizeOptions"]`);

  sizelList.forEach((element) => {
    const nav = document.querySelector(`[data-type="testNav"]`).cloneNode();
    const ul = document.createElement("ul");
    nav.appendChild(ul);
    parent.appendChild(nav);

    element.forEach((size) => {
      const li = document.createElement("li");
      const aElem = document.createElement("a");
      aElem.textContent = size;
      li.appendChild(aElem);
      ul.appendChild(li);
    });
  });
}

function splitSizeChunks(arr, step) {
  let result = [];

  if (arr.length >= step) {
    for (let i = 0; i < arr.length; i += step) {
      // Slice the array into chunks of 3 elements and push to result array
      result.push(arr.slice(i, i + step));
    }
  } else {
    // If the array has fewer than 3 elements, return it as the only chunk
    result.push(arr);
  }

  return result;
}

function splitColorsChunks(colors, step) {
  const entries = Object.entries(colors, step); // Convert the object into an array of key-value pairs
  let result = [];

  if (entries.length >= step) {
    for (let i = 0; i < entries.length; i += step) {
      let chunk = {};
      // Get up to 3 color entries at a time and add them to the chunk object
      entries.slice(i, i + step).forEach(([key, value]) => {
        chunk[key] = value;
      });
      result.push([chunk]); // Wrap each chunk object in an array and push to the result
    }
  } else {
    // If the object has fewer than 3 elements, return it as a single chunk object
    let chunk = {};
    entries.forEach(([key, value]) => {
      chunk[key] = value;
    });
    result.push([chunk]);
  }

  return result;
}

const test = splitSizeChunks(productBB.sizeList, 5);
const testcolo = splitColorsChunks(productBB.colors, 3);

createColorsOptions(testcolo);
createSizeOptions(test);

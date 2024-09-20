function renderModPrime(prime, container) {
  // Retrieve templates for the main layout and images
  const template = getTemplateClone(mainUiTemplates, "prime", mainUiTemp);
  const imgTemplate = getTemplateClone(utilsTemplates, "imgfigure", utilsTemp);

  // Error handling: Check if templates exist and log detailed errors if not
  if (!template || !imgTemplate) {
    console.error(
      `Missing template: ${!template ? '"prime"' : '"imgFigure"'} not found.`
    );
    return;
  }

  // Create a DocumentFragment to hold the cloned content and minimize reflows
  const fragment = document.createDocumentFragment();

  // Clone the main template and add the viewType as a class to the first element

  // Select elements within the cloned template for manipulation
  const primeContainer = template.firstElementChild;
  const colorContainer = template.querySelector(`[data-id="ColorsImgDiv"]`);
  const smallImgContainer = template.querySelector(`[data-id="smallImgdiv"]`);
  const mainImg = template.querySelector(`[data-id="mainImg"]`);
  const mainImgFigure = template.querySelector(`[data-id="mainImgFigure"]`);

  // Error handling: Check if essential elements are present in the clone
  if (!primeContainer || !colorContainer || !smallImgContainer || !mainImg) {
    console.error(`Essential elements missing in the template.`);
    return;
  }

  // Populate color images dynamically based on the number of colors in `prime`
  populateModColorImages(prime.numOfcolors, prime.mediaSrc, colorContainer, {
    imgClass: ["coloImgs"],
    imgType: "color",
    dataAttr: "colornum",
    figureClass: ["pl-1", "pr-1", "pb-0", "is-inline-block"],
  });

  // Populate small images dynamically based on the number of photos in `prime`
  populateModSmallImages(prime.numOfphotos, prime.mediaSrc, smallImgContainer, {
    imgClass: ["small_imgs"],
    imgType: "small",
    dataAttr: "imgnum",
    figureClass: ["pl-1", "pr-1", "pb-0", "is-inline-block"],
  });

  // Update content with `prime` data
  updateModPrime(prime, primeContainer);

  // Append the populated clone to the fragment
  fragment.appendChild(primeContainer);
  container.appendChild(fragment);
  // Append the fragment to the body in one operation to minimize reflows
  // Set up event listeners after the content is appended to the DOM

  setupModEventListeners(prime, colorContainer, smallImgContainer, mainImg);
}

// ! //////////////////////Prime helper ///////////////////////////

// Function to dynamically populate images based on the provided parameters
function populateModColorImages(count, imgSrc, container, options) {
  for (let i = 0; i < count; i++) {
    const imgClone = getTemplateClone(utilsTemplates, "imgfigure", utilsTemp);

    if (imgClone) {
      options.figureClass.forEach((element) => {
        imgClone.firstElementChild.classList.add(element);
      });
    } else {
      console.warn(`figure element in ${options.imgType} template not found.`);
    }

    const img = imgClone.querySelector(`[data-id="img"]`);
    if (img) {
      options.imgClass.forEach((element) => {
        img.classList.add(element);
      });

      img.src = `${imgSrc}color_${i + 1}/1.jpg`;

      img.dataset[options.dataAttr] = i + 1;
      container.appendChild(imgClone);
    } else {
      console.warn(`Image element in ${options.imgType} template not found.`);
    }
  }
}

// Function to dynamically populate images based on the provided parameters
function populateModSmallImages(count, imgSrc, container, options) {
  for (let i = 0; i < count; i++) {
    const imgClone = getTemplateClone(utilsTemplates, "imgfigure", utilsTemp);

    if (imgClone) {
      options.figureClass.forEach((element) => {
        imgClone.firstElementChild.classList.add(element);
      });
    } else {
      console.warn(`figure element in ${options.imgType} template not found.`);
    }

    const img = imgClone.querySelector(`[data-id="img"]`);
    if (img) {
      options.imgClass.forEach((element) => {
        img.classList.add(element);
      });

      // img.src = `${imgSrc}${options.imgType}_${i + 1}/1.jpg`;

      img.dataset[options.dataAttr] = i + 1;
      container.appendChild(imgClone);
    } else {
      console.warn(`Image element in ${options.imgType} template not found.`);
    }
  }
}

function updateModPrime(prime, clone) {
  const mainImg = clone.querySelector(`[data-id="mainImg"]`);
  if (!mainImg) {
    console.error(`Main image element with data-id "mainImg" not found.`);
    return;
  }

  // Set the main image source based on the current color and image number
  mainImg.src = `${prime.mediaSrc}color_${prime.carrentColor}/${prime.carrentimgNum}.jpg`;

  // Update small images based on the current color
  const smallImgs = clone.querySelectorAll(`.small_imgs`);
  smallImgs.forEach((img, i) => {
    img.src = `${prime.mediaSrc}color_${prime.carrentColor}/${i + 1}.jpg`;
  });

  // Highlight the current color and image selection
  const currentImg = clone.querySelector(
    `[data-imgnum="${prime.carrentimgNum}"]`
  );
  const currentColor = clone.querySelector(
    `[data-colornum="${prime.carrentColor}"]`
  );
  currentImg.classList.add("bord");
  currentColor.classList.add("bord");

  // Populate the product details dynamically based on the `prime` object
  Object.entries(prime.details).forEach(([key, value]) => {
    const element = clone.querySelector(`[data-id="item_1_${key}"]`);
    if (element) {
      element.textContent =
        key.startsWith("price") || key.startsWith("crossedprice")
          ? `${value}_Egp`
          : value;
    } else if (key.startsWith("imgsrc") || key.startsWith("colors")) {
      return;
    } else {
      console.warn(
        `Element with data-id "item_1_${key}" not found in template.`
      );
    }
  });
}

// Function to set up event listeners on color and small images
function setupModEventListeners(
  prime,
  colorContainer,
  smallImgContainer,
  mainImg
) {
  // Main image click event
  mainImg.addEventListener("click", () => {
    console.log(
      `Main image clicked: Color ${prime.carrentColor}, Image ${prime.carrentimgNum}`
    );
  });

  // Event delegation for color images to reduce event listeners
  colorContainer.addEventListener("click", (e) => {
    const target = e.target.closest(".coloImgs");
    if (!target) return; // Exit if the clicked element is not a color image
    e.preventDefault();
    e.stopPropagation();
    const colorNum = target.dataset.colornum;
    if (colorNum != prime.carrentColor) {
      prime.carrentColor = colorNum;
      prime.carrentimgNum = 1;

      updateModImageSources(prime, mainImg, smallImgContainer);
      modPrimeCurrentSelection(
        target,
        colorContainer,
        "coloImgs",
        prime,
        smallImgContainer
      );
    }
  });

  // Event delegation for small images to reduce event listeners
  smallImgContainer.addEventListener("click", (e) => {
    const target = e.target.closest(".small_imgs");
    if (!target) return; // Exit if the clicked element is not a small image
    const imgNum = target.dataset.imgnum;
    if (imgNum != prime.carrentimgNum) {
      prime.carrentimgNum = imgNum;
      updateModImageSources(prime, mainImg);
      modPrimeCurrentSelection(target, smallImgContainer, "small_imgs", prime);
    }
  });
}

// Function to update main and small images based on the current selection
function updateModImageSources(prime, mainImg, smallImgContainer = null) {
  mainImg.src = `${prime.mediaSrc}color_${prime.carrentColor}/${prime.carrentimgNum}.jpg`;
  if (smallImgContainer) {
    smallImgContainer.querySelectorAll(`.small_imgs`).forEach((img, i) => {
      img.src = `${prime.mediaSrc}color_${prime.carrentColor}/${i + 1}.jpg`;
    });
  }
}

// Function to manage the current selection state by adding/removing classes
function modPrimeCurrentSelection(
  target,
  parent,
  selectClass,
  prime,
  small = null
) {
  // Update the small images class if the color selection is changed
  if (selectClass === "coloImgs" && small) {
    const smalls = small.querySelectorAll(`.small_imgs`);
    smalls.forEach((img) => {
      img.classList.toggle("bord", img.dataset.imgnum == prime.carrentimgNum);
    });
  }

  // Add the selected class to the target element
  target.classList.add("bord");

  // Remove the selected class from other elements within the same container
  parent.querySelectorAll(`.${selectClass}`).forEach((img) => {
    if (img !== target) img.classList.remove("bord");
  });
}

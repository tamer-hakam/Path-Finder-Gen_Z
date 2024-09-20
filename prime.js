function renderPrime(prime, viewType) {
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
  template.firstElementChild.classList.add(viewType);

  // Select elements within the cloned template for manipulation
  const primeContainer = template.firstElementChild;
  const colorContainer = template.querySelector(`[data-id="ColorsImgDiv"]`);
  const smallImgContainer = template.querySelector(`[data-id="smallImgdiv"]`);
  const mainImg = template.querySelector(`[data-id="mainImg"]`);
  const mainImgFigure = template.querySelector(`[data-id="mainImgFigure"]`);
  const bodyContainer = document.querySelector(`[data-type="body-container"]`);

  // Error handling: Check if essential elements are present in the clone
  if (!primeContainer || !colorContainer || !smallImgContainer || !mainImg) {
    console.error(`Essential elements missing in the template.`);
    return;
  }

  // Populate color images dynamically based on the number of colors in `prime`
  populateColorImages(prime.numOfcolors, prime.mediaSrc, colorContainer, {
    imgClass: ["coloImgs"],
    imgType: "color",
    dataAttr: "colornum",
    figureClass: ["pl-1", "pr-1", "pb-0", "is-inline-block"],
  });

  // Populate small images dynamically based on the number of photos in `prime`
  populateSmallImages(prime.numOfphotos, prime.mediaSrc, smallImgContainer, {
    imgClass: ["small_imgs"],
    imgType: "small",
    dataAttr: "imgnum",
    figureClass: ["pl-1", "pr-1", "pb-0", "is-inline-block"],
  });

  // Update content with `prime` data
  updatePrime(prime, primeContainer);

  // Append the populated clone to the fragment
  fragment.appendChild(primeContainer);

  // Append the fragment to the body in one operation to minimize reflows
  bodyContainer.appendChild(fragment);

  // Set up event listeners after the content is appended to the DOM
  setupEventListeners(prime, colorContainer, smallImgContainer, mainImg);
  setupZoomEventListener(mainImgFigure);
}

// ! //////////////////////Prime helper ///////////////////////////

//  Function to dynamically populate images based on the provided parameters
function populateColorImages(count, imgSrc, container, options) {
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

//  Function to dynamically populate images based on the provided parameters
function populateSmallImages(count, imgSrc, container, options) {
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

function updatePrime(prime, clone) {
  const mainImg = clone.querySelector(`[data-id="mainImg"]`);
  if (!mainImg) {
    console.error(`Main image element with data-id "mainImg" not found.`);
    return;
  }

  // Set the main image source based on the current color and image number
  mainImg.src = `${prime.mediaSrc}color_${prime.carrentColor}/${prime.carrentimgNum}.jpg`;
  mainImg.setAttribute(
    "img-path",
    `${prime.mediaSrc}color_${prime.carrentColor}/${prime.carrentimgNum}.jpg`
  );

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
        key.startsWith("price") || key.startsWith("crossedPrice")
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

//  Function to set up event listeners on color and small images
function setupEventListeners(
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

      updateImageSources(prime, mainImg, smallImgContainer);
      primeCurrentSelection(
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
      updateImageSources(prime, mainImg);
      primeCurrentSelection(target, smallImgContainer, "small_imgs", prime);
    }
  });
}

//  Function to update main and small images based on the current selection
function updateImageSources(prime, mainImg, smallImgContainer = null) {
  mainImg.src = `${prime.mediaSrc}color_${prime.carrentColor}/${prime.carrentimgNum}.jpg`;
  mainImg.setAttribute(
    "img-path",
    `${prime.mediaSrc}color_${prime.carrentColor}/${prime.carrentimgNum}.jpg`
  );
  if (smallImgContainer) {
    smallImgContainer.querySelectorAll(`.small_imgs`).forEach((img, i) => {
      img.src = `${prime.mediaSrc}color_${prime.carrentColor}/${i + 1}.jpg`;
    });
  }
}

//  Function to manage the current selection state by adding/removing classes
function primeCurrentSelection(
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

// Function to set up event listeners on zoom icon
function setupZoomEventListener(parent) {
  parent.querySelectorAll(".zoom-icon").forEach((icon) => {
    icon.addEventListener("click", function () {
      // Find the nearest <img> sibling within the same parent (.zoom)
      const img = this.closest(".zoom").querySelector("img");

      // Log the src attribute of the image
      if (img) {
        console.log(img.getAttribute("img-path"));
      } else {
        console.log("No image found.");
      }
    });
  });
}

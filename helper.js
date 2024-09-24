const viewType = "dsk";
// Function to detect view type using a combination of data attributes, CSS classes, and media queries
function getViewType() {
  // Define view types and their associated media queries
  const viewTypes = [
    { type: "view-mob", mediaQuery: "(max-width: 767px)" }, // Mobile
    {
      type: "view-tab",
      mediaQuery: "(min-width: 768px) and (max-width: 1023px)",
    }, // Tablet
    { type: "view-desk", mediaQuery: "(min-width: 1024px)" }, // Desktop
  ];

  // Loop through the view types to find the matching media query
  for (const view of viewTypes) {
    if (window.matchMedia(view.mediaQuery).matches) {
      // If media query matches, update data attribute and class list
      return view.type;
    }
  }

  // Fallback mechanism if no view type is matched
  // updateViewType('default');
  return "default";
}

function getTemplateClone(parentObj, type, parentTemp) {
  // Check if the template is already cached in the templates object
  if (!parentObj[type]) {
    // Query and store the template if it hasn't been fetched yet
    const template = parentTemp.querySelector(`[data-type="${type}"]`);

    if (template) {
      parentObj[type] = template;
    } else {
      console.warn(`Template of type "${type}" not found in the DOM.`);
      return null;
    }
  }

  // Clone the template with deep cloning to include its children
  return parentObj[type].content.cloneNode(true);
}

// body sections
// type A options
function createColorBtn(color, options) {
  const button = document.createElement("button");
  if (options.classes) {
    options.classes.forEach((element) => button.classList.add(element));
  }

  if (color.length == 1) {
    button.style.backgroundColor = color[0];
  } else if (color.length > 1) {
    const linerGradient = `linear-gradient(to right, ${color[0]} 50%, ${color[1]} 50%)`;
    button.style.background = linerGradient;
  }
  return button;
}

// type A options
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

// type A options
function splitColorsChunks(colors, step) {
  // Convert the object into an array of key-value pairs
  const entries = Object.entries(colors, step);
  let result = [];

  if (entries.length >= step) {
    for (let i = 0; i < entries.length; i += step) {
      let chunk = {};
      // Get up to 3 color entries at a time and add them to the chunk object
      entries.slice(i, i + step).forEach(([key, value]) => {
        chunk[key] = value;
      });
      // Wrap each chunk object in an array and push to the result
      result.push([chunk]);
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

function splitArryChunks(arry, step) {
  // Convert the object into an array of key-value pairs
  const entries = Object.entries(arry, step);
  let result = [];

  if (entries.length >= step) {
    for (let i = 0; i < entries.length; i += step) {
      let chunk = {};
      // Get up to 3 color entries at a time and add them to the chunk object
      entries.slice(i, i + step).forEach(([key, value]) => {
        chunk[key] = value;
      });
      // Wrap each chunk object in an array and push to the result
      result.push([chunk]);
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

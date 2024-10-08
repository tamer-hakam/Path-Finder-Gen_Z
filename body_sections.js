// Main render function to handle overall structure
function renderSection(sections, products, viewType) {
  // Batch all DOM updates into a single fragment
  const fragment = document.createDocumentFragment();
  const bodyContainer = document.querySelector(`[data-type="body-container"]`);

  const mainClone = getTemplateClone(
    mainUiTemplates,
    "sectionsContainerTemp",
    mainUiTemp
  );
  if (!mainClone) return;

  const mainContainer = mainClone.firstElementChild;
  mainContainer.classList.add(viewType);
  console.log(screenNum);

  mainContainer.setAttribute("id", `screen_${screenNum}`);

  // Iterate over each section and append items accordingly
  sections.forEach((section) => {
    const tempType = products[section[0].id].type;

    const tempClone = getTemplateClone(mainUiTemplates, tempType, mainUiTemp);

    if (!tempClone) return;

    section.forEach((item, index) => {
      tempClone.firstElementChild.dataset.stagesectionid = item.section;
      tempClone.firstElementChild.classList.add(item.section);
      tempClone.firstElementChild.dataset.stagetype = "section";

      const itemElement = tempClone.querySelector(
        `[data-id="item_${index + 1}"]`
      );
      itemElement.dataset.stagetype = "item";
      itemElement.dataset.stageid = item.id;

      // Iterate over each detail key in the product details
      Object.entries(products[section[index].id].details).forEach(
        ([key, value]) => {
          const currentItem = products[section[index].id];
          // Find the specific element for each detail using its data-id
          const element = tempClone.querySelector(
            `[data-id="item_${index + 1}_${key}"]`
          );

          if (element) {
            // Update the element based on its type
            if (key.startsWith("imgsrc") && element.tagName === "IMG") {
              element.src = value; // Update image source
            } else if (
              key.startsWith("price") ||
              key.startsWith("crossedPrice")
            ) {
              element.textContent = `${value}_Egp`;
            } else if (key.startsWith("color")) {
              currentItem.details.colors.forEach((color) => {
                const button = createColorBtn(color);

                element.appendChild(button);
              });
            } else {
              // Update text content for other elements
              element.textContent = value;
            }
          } else if (!element && key.startsWith("paragraph")) {
            return;
          } else {
            console.warn(
              `Element with data-id "item_${
                index + 1
              }_${key}" not found in template.`
            );
          }
        }
      );
    });

    // Append item to the main container
    mainContainer.appendChild(tempClone);
  });

  // Append the fully populated main container to the fragment
  fragment.appendChild(mainClone);

  // Append the fragment to the body to batch all updates at once
  bodyContainer.appendChild(fragment);
  const itemsContainer = bodyContainer.querySelector(
    `[id="screen_${screenNum}"]`
  );
  addClickListenerToItems(itemsContainer);
  // ? // update ui
  // const viewTypeb = getViewType();
  // updateViewType(viewTypeb);
}

function createColorBtn(color) {
  const button = document.createElement("button");
  button.classList.add("colorIconB");
  if (color.length == 1) {
    button.style.backgroundColor = color[0];
  } else if (color.length > 1) {
    const linerGradient = `linear-gradient(to right, ${color[0]} 50%, ${color[1]} 50%)`;
    button.style.background = linerGradient;
  }
  return button;
}

function addClickListenerToItems(parent) {
  // Select all child elements with dataset.stagetype equal to "item"

  const items = parent.querySelectorAll('[data-stagetype="item"]');

  // Loop through the selected items
  items.forEach((item) => {
    // Add click event listener to each item
    item.addEventListener("click", function (event) {
      // Ensure the click refers to the card element (item) itself, not its child
      const targetItem = event.currentTarget; // 'currentTarget' refers to the element with the listener
      calldetails(targetItem.dataset.stageid);
    });
  });
}

// Placeholder function as mentioned in the prompt
function calldetails(stageId) {
  console.log("Placeholder function called with stageId:", stageId);
  renderMod(products[stageId], stageId);
}

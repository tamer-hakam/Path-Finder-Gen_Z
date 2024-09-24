// Example input array of shopping list items

// Function to check if an item with the same size and color already exists
function addItem(shoppingList, newItem) {
  // Check if an item with the same size and color exists
  const existingItem = shoppingList.list.find(
    (item) => item.size === newItem.size && item.color === newItem.color
  );

  if (existingItem) {
    // If it exists, increase the quantity and price of the existing item
    existingItem.quantity += newItem.quantity;
    existingItem.price += newItem.price;
    updateShoppingListDOMRow(existingItem.itemId, existingItem);
    // console.log("Item exists. Updated quantity:", existingItem);
  } else {
    // Add the new item to the shopping list
    shoppingList.list.push(newItem);
    addToShoppingListDOM(newItem);
    // console.log("New item added:", newItem);
  }

  // Call the update function to handle recalculations and DOM updates
  update(shoppingList);
}

// Helper function to calculate total price, total items, and update itemNum
function update(shoppingList) {
  // Calculate total price and item count
  shoppingList.total.totalPrice = shoppingList.list.reduce(
    (acc, item) => acc + item.price,
    0
  );
  shoppingList.total.totalItemNum = shoppingList.list.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Call the placeholder function to update the DOM
  updateShoppingListDOMTotal(shoppingList.total);
}

// Function to remove an item by its itemNum and update
function removeItemX(itemId) {
  shoppingList.list = shoppingList.list.filter(
    (item) => item.itemId !== itemId
  );

  // Call update to reassign itemNum and recalculate totals

  removeFromShoppingListDOM(itemId);
  update();
  console.log(`Item with itemId ${itemId} removed.`);
}

function removeItem(itemId) {
  // Convert itemId to the appropriate type if necessary (e.g., number)
  const id = Number(itemId); // Assuming itemId in shoppingList is a number

  // Filter out the item with the given itemNum
  shoppingList.list = shoppingList.list.filter((item) => item.itemId !== id);

  // Call update to reassign itemNum and recalculate totals
  removeFromShoppingListDOM(itemId); // Pass the raw itemId here since it's used for DOM
  update();
  console.log(`Item with itemId ${id} removed.`);
}

function createShoppingListTable(shoppingList) {
  const parent = document.querySelector(`[data-id="tbody"]`);
  const row = createShoppingListRow(shoppingList.list[0]);
  parent.appendChild(row);
  update(shoppingList);
  console.log(shoppingList.total);

  updateShoppingListDOMTotal(shoppingList.total);
  addEditListeners(row);
  addDeleteListeners(row);
}

function createShoppingListRow(row) {
  const tbody = document.createElement("tbody");
  const raw = `<tr data-id="${row.itemId}" data-type="tr">
          <td data-id="edit"><span class="icon">
          <i class="fa-regular fa-pen-to-square"></i></span></td>

              <td data-id="price">${row.price}</td>
              <td data-id="size">${row.size}</td>
              <td data-id="color" data-color="color_1">${row.colorName}</td>
              <td data-id="quantity">${row.quantity}</td>
              
          <td data-id="delete"><span class="icon">
          <i class="fa-solid fa-trash-can"></i></span></td>
        </tr>`;
  tbody.innerHTML = raw;
  return tbody.firstElementChild; // Return the first <tr> element from the tbody
}

// Function to add event listeners to all "edit" elements
function addEditListeners(row) {
  // Get all elements with data-id="edit"
  const element = row.querySelector('[data-id="edit"]');

  // Add click event listener to each "edit" element

  element.addEventListener("click", function () {
    // Call the editElement function with the clicked element's parent (tr)
    editElement(row.dataset.id);
  });
}

// Function to add event listeners to all "edit" elements
function addDeleteListeners(row) {
  // Get all elements with data-id="edit"
  const element = row.querySelector('[data-id="delete"]');

  // Add click event listener to each "delete" element
  element.addEventListener("click", function () {
    // Call the removeItem function with the clicked element's parent (tr)
    removeItem(row.dataset.id);
  });
}

// Function that will be called when an "edit" element is clicked
function editElement(parentElement) {
  // Logic for editing the element
  console.log("Editing element:", parentElement); // Just a placeholder
}

function updateShoppingListDOMTotal(total) {
  console.log(`${total.totalPrice}`);

  const totalPrice = document.querySelector(`[data-id="total-price"]`);
  const totalItemsNum = document.querySelector(`[data-id="total-items-num"]`);
  totalPrice.textContent = `${total.totalPrice}`;
  totalItemsNum.textContent = `${total.totalItemNum}`;
}

function updateShoppingListDOMRow(rowElementId, rowObject) {
  const rowElement = document.querySelector(`[data-id="tr_${rowElementId}"]`);
  const price = rowElement.querySelector(`[data-id="price"]`);
  const quantity = rowElement.querySelector(`[data-id="quantity"]`);
  price.textContent = rowObject.price;
  quantity.textContent = rowObject.quantity;
}

function addToShoppingListDOM(row) {
  const parent = document.querySelector(`[data-id="tbody"]`);
  const newrow = createShoppingListRow(row);
  parent.appendChild(newrow);
  addEditListeners(newrow);
  addDeleteListeners(newrow);
  update();
}

function removeFromShoppingListDOM(itemId) {
  const rowElement = document.querySelector(`[data-id="${itemId}"]`);
  rowElement.remove();
}

// Example usage: Adding a new item
const newItem = {
  price: 250,
  size: "3XL",
  color: "color_1",
  quantity: 1,
  itemId: 2,
  colorName: "بنى",
};
const newItemB = {
  price: 250,
  size: "2XL",
  color: "color_1",
  quantity: 1,
  itemId: 3,
  colorName: "بنى",
};
const newItemC = {
  price: 250,
  size: "5XL",
  color: "color_3",
  quantity: 1,
  itemId: 4,
  colorName: "ازرق",
};
const newItemD = {
  price: 250,
  size: "2XL",
  color: "color_2",
  quantity: 1,
  itemId: 5,
  colorName: "خراوى",
};
const newItemE = {
  price: 250,
  size: "3XL",
  color: "color_2",
  quantity: 1,
  itemId: 6,
  colorName: "خراوى",
};

addItem(shoppingList, newItem);

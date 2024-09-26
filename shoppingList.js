// Function to handle adding an item to the shopping list
function addItemToShoppingList(newItem, itemInstance) {
  itemInstance.addItem(newItem);
}

// Function to update the shopping list totals
function updateShoppingListTotals(itemInstance) {
  itemInstance.updateShoppingListTotals();
}

// Function to remove an item by its itemId
function removeItemFromShoppingList(itemId, itemInstance) {
  const filteredList = itemInstance.shoppingList.list.filter(
    (item) => item.itemId !== itemId
  );
  itemInstance.shoppingList.list = filteredList;

  itemInstance.updateShoppingListTotals();

  // Optionally remove the item from the DOM
  removeFromShoppingListDOM(itemId); // This part remains the same
}

// Function to create the shopping list table initially
function createShoppingListTable(itemInstance) {
  const parent = document.querySelector(`[data-id="tbody"]`);

  // Loop through each item in the list and append to the DOM
  itemInstance.shoppingList.list.forEach((item) => {
    const row = createShoppingListRow(item);
    parent.appendChild(row);
    addEditListeners(row); // Keep this to handle editing
    addDeleteListeners(row, itemInstance); // Pass itemInstance to handle deletion logic
  });

  // Update the totals in the DOM
  itemInstance.updateShoppingListTotals();
}

// Function to create a row in the shopping list table
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
  const element = row.querySelector('[data-id="edit"]');
  element.addEventListener("click", function () {
    editElement(row.dataset.id); // Handle edit logic
  });
}

// Function to add event listeners to all "delete" elements
function addDeleteListeners(row, itemInstance) {
  const element = row.querySelector('[data-id="delete"]');
  element.addEventListener("click", function () {
    removeItemFromShoppingList(row.dataset.id, itemInstance); // Call the new remove logic
  });
}

// Function that will be called when an "edit" element is clicked
function editElement(parentElement) {
  // Logic for editing the element (unchanged)
  console.log("Editing element:", parentElement); // Placeholder
}

// Function to update the shopping list totals in the DOM
function updateShoppingListDOMTotal(total) {
  const totalPrice = document.querySelector(`[data-id="total-price"]`);
  const totalItemsNum = document.querySelector(`[data-id="total-items-num"]`);
  totalPrice.textContent = `${total.totalPrice}`;
  totalItemsNum.textContent = `${total.totalItemNum}`;
}

// Function to update a shopping list row in the DOM
function updateShoppingListDOMRow(rowElementId, rowObject) {
  const rowElement = document.querySelector(`[data-id="tr_${rowElementId}"]`);
  const price = rowElement.querySelector(`[data-id="price"]`);
  const quantity = rowElement.querySelector(`[data-id="quantity"]`);
  price.textContent = rowObject.price;
  quantity.textContent = rowObject.quantity;
}

// Function to add a new row to the shopping list in the DOM
function addToShoppingListDOM(row) {
  const parent = document.querySelector(`[data-id="tbody"]`);
  const newRow = createShoppingListRow(row);
  parent.appendChild(newRow);
  addEditListeners(newRow); // Keep the same event listeners for edit
  addDeleteListeners(newRow); // Add event listeners for delete
}

// Function to remove an item from the shopping list DOM
function removeFromShoppingListDOM(itemId) {
  const rowElement = document.querySelector(`[data-id="${itemId}"]`);
  if (rowElement) {
    rowElement.remove();
  }
}

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
// createShoppingListRow(item.shoppingList);
// // createShoppingListTable(item);
// updateShoppingListDOMRow(1, item.shoppingList);
item.addItem(newItem);
// item.addItem(newItemB);
// item.addItem(newItemC);

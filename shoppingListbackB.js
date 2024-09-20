// Example input array of shopping list items
let shoppingList = {
  list: [
    { price: 250, size: "5XL", color: "color_1", quantity: 1, itemNum: 1 },
    { price: 250, size: "3XL", color: "color_1", quantity: 1, itemNum: 2 },
  ],
  total: {
    totalPrice: 0,
    totalItemNum: 0,
  },
};

// Function to check if an item with the same size and color already exists
function addItem(shoppingList, newItem) {
  // Check if an item with the same size and color exists
  const existingItem = shoppingList.list.find(
    (item) => item.size === newItem.size && item.color === newItem.color
  );

  if (existingItem) {
    // If it exists, increase the quantity of the existing item
    existingItem.quantity += newItem.quantity;
    existingItem.price += newItem.price; // Add the new price to the existing price
    console.log("Item exists. Updated quantity:", existingItem);
  } else {
    // If it doesn't exist, add the new item to the shopping list
    shoppingList.list.push(newItem);
    console.log("New item added:", newItem);
  }

  // Call the update helper function to handle DOM and recalculations
  update();
}

// Helper function to calculate total price and number of items
function update() {
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
  updateDOMWithShoppingList();

  // Log the updated total
  console.log("Total Price:", shoppingList.total.totalPrice);
  console.log("Total Item Count:", shoppingList.total.totalItemNum);
}

// Placeholder function for DOM updates
function updateDOMWithShoppingList() {
  console.log(
    "This is where you'd update the DOM with the shopping list data."
  );
  console.log("list:", shoppingList);
}

// Example usage: Adding a new item
const newItem = {
  price: 250,
  size: "5XL",
  color: "color_1",
  quantity: 1,
  itemNum: 2,
};
addItem(shoppingList, newItem);

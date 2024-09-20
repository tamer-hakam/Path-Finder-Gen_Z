// Example input array of shopping list items
let shoppingList = {
  list: [
    { price: 250, size: "5XL", color: "color_1", quantity: 1 },
    { price: 250, size: "3XL", color: "color_1", quantity: 1 },
  ],
  total: {
    totalPrice: 0,
    totalItemNum: 0, // Corrected typo
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
    existingItem.price += newItem.price;
    console.log("Item exists. Updated quantity:", existingItem);
  } else {
    // If it doesn't exist, add the new item to the shopping list
    shoppingList.list.push(newItem);
    console.log("New item added:", newItem);
  }

  // Call a placeholder function to update the DOM
  updateDOMWithShoppingList(); // Placeholder
}

// Placeholder function for DOM updates
function updateDOMWithShoppingList() {
  console.log(
    "This is where you'd update the DOM with the shopping list data."
  );
  console.log("list:", shoppingList);
}

// Example usage: Adding a new item
const newItem = { price: 250, size: "5XL", color: "color_1", quantity: 1 };
addItem(shoppingList, newItem);

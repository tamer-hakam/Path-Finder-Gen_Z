class Item {
  constructor(params = {}) {
    // Initialize properties based on params
    Object.assign(this, params);

    // Set currentColor using color.id if provided
    this.currentColor = null;

    // Assign currentColor if colorId is provided in params
    if (params.currentColorId && Array.isArray(params.colors)) {
      this.currentColor =
        params.colors.find((color) => color.id === params.currentColorId) ||
        null;
    }

    // Filter and assign colors if available
    if (params.colors && Array.isArray(params.colors)) {
      this.colors = params.colors
        .filter((color) => !color.isDisabled) // Keep colors where isDisabled is false or undefined
        .sort((a, b) => a.rank - b.rank); // Sort by rank in ascending order
    }

    // Filter and assign sizes if available
    if (params.sizes && Array.isArray(params.sizes)) {
      this.sizes = params.sizes
        .filter((size) => !size.isDisabled) // Keep sizes where isDisabled is false or undefined
        .sort((a, b) => a.sizeOrder - b.sizeOrder); // Sort by sizeOrder in ascending order
    }

    // Initialize sizeTable for further use
    this.sizeTable = {
      head: params.sizeTable.head || [],
      rows: [],
    };
  }

  getSizeTable() {
    if (!this.currentColor || !this.sizes) return this.sizeTable;

    const { disabledSizes } = this.currentColor;

    // Create a new sizeTable object each time to avoid state persistence
    const newSizeTable = {
      head: this.sizeTable.head, // Keep the same head
      rows: this.sizes
        .filter((size) => !disabledSizes?.includes(size.name)) // Filter based on current color's disabled sizes
        .map((size) => size.table), // Map the valid sizes to rows
    };

    return newSizeTable;
  }

  // Private method: Split array into chunks
  #splitArryChunks(arry, step) {
    const entries = Object.entries(arry);
    let result = [];

    if (entries.length >= step) {
      for (let i = 0; i < entries.length; i += step) {
        let chunk = [];
        entries.slice(i, i + step).forEach(([key, value]) => {
          chunk.push(value);
        });
        result.push([chunk]);
      }
    } else {
      let chunk = [];
      entries.forEach(([key, value]) => {
        chunk.push(value);
      });
      result.push([chunk]);
    }

    return result;
  }

  // Method to get sizes split into chunks
  getSizes(step) {
    return this.#splitArryChunks(this.sizes, step);
  }

  // Method to get colors split into chunks
  getColors(step) {
    return this.#splitArryChunks(this.colors, step);
  }

  setCurrentColor(colorId) {
    // Find the color in this.colors array by the given colorId
    const color = this.colors.find((c) => c.id === colorId);

    // If the color exists, set currentColor and update numOfphotos
    if (color) {
      this.currentColor = color;
    }
  }

  // Generic setter method
  set(propertyName, value) {
    this[propertyName] = value;
  }

  // Generic getter method
  get(propertyName) {
    return this[propertyName];
  }
}

// Example usage

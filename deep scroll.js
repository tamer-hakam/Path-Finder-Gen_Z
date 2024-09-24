// Global toggle for infinite scrolling
var infiniteScroll = true; // Set to true to enable infinite scrolling
var screenNum = 0;
var screenNumLimt = 1;

// Function to simulate loading the next chunk (without actual logic)
function loadNextChunk() {
  console.log("Loading next chunk..."); // Placeholder logic
  const currentSections = `sections${screenNum}`;

  // console.log(screenNum);
  // console.log(screenNumLimt);
  // console.log(currentSections);

  // Placeholder calls for rendering sections - adjust as needed
  renderPrime(products.idA1, getViewType());
  renderSection(sections[currentSections], products, getViewType());

  // Reposition the sentinel at the bottom after loading content
  repositionSentinel();
}

// Function to reposition the sentinel element at the bottom
function repositionSentinel() {
  const sentinel = document.querySelector(".scroll-sentinel");
  if (sentinel) {
    document.body.appendChild(sentinel); // Moves the sentinel to the bottom of the content
  }
}

// Initialize infinite scroll with a customizable root margin

// initInfiniteScroll();

// Global variable to keep track of the observer instance
let observer = null;

// Function to stop infinite scrolling
function stopInfiniteScroll() {
  // Set infiniteScroll to false to prevent further scroll triggers
  infiniteScroll = false;

  // Unobserve the sentinel and clean up the observer instance
  if (observer) {
    const sentinel = document.querySelector(".scroll-sentinel");
    if (sentinel) {
      observer.unobserve(sentinel); // Stop observing the sentinel element
      sentinel.remove(); // Optionally remove the sentinel from the DOM
    }
    observer.disconnect(); // Fully disconnect the observer
    observer = null; // Clear the observer reference
  }

  console.log("Infinite scrolling stopped.");
  createMainFooter({});
}

// Updated initInfiniteScroll function to assign the observer to the global variable
function initInfiniteScroll(rootMargin = "100px") {
  // If infinite scroll is disabled, do nothing
  if (!infiniteScroll) return;

  // Create the Intersection Observer to handle the scroll event
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Trigger loadNextChunk() when the sentinel is visible
        if (entry.isIntersecting) {
          if (screenNumLimt >= screenNum) {
            screenNum++;
            loadNextChunk();
          } else if (screenNumLimt < screenNum) {
            stopInfiniteScroll();
          }
        }
      });
    },
    {
      rootMargin: rootMargin, // Load content before reaching the end
    }
  );

  // Create a sentinel element that will trigger loading when visible
  const sentinel = document.createElement("div");
  sentinel.className = "scroll-sentinel";
  document.body.appendChild(sentinel); // Append the sentinel at the end of your scrollable container

  // Start observing the sentinel element
  observer.observe(sentinel);
}

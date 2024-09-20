const viewType ='dsk'
// Function to detect view type using a combination of data attributes, CSS classes, and media queries
function getViewType() {
    // Define view types and their associated media queries
    const viewTypes = [
        { type: 'view-mob', mediaQuery: '(max-width: 767px)' },  // Mobile
        { type: 'view-tab', mediaQuery: '(min-width: 768px) and (max-width: 1023px)' },  // Tablet
        { type: 'view-desk', mediaQuery: '(min-width: 1024px)' }  // Desktop
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
    return 'default';
}

function getTemplateClone(parentObj,type,parentTemp) {
    
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
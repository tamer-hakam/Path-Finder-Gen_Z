// Main render function to handle overall structure
function renderModSection(product, _modBody, _modTemp) {
  const sectionsobj = product.mod;
  const sectionsContainer = _modBody.querySelector(
    `[data-type="sections-container"]`
  );
  const originalSectionTemplate = _modTemp.querySelector(
    `[data-type="section"]`
  );
  const originalTxtElement = _modTemp
    .querySelector(`[data-type="text"]`)
    .cloneNode(true);
  const originalImgElement = _modTemp
    .querySelector(`[data-type="img"]`)
    .cloneNode(true);
  const originalTableElementTemp = _modTemp
    .querySelector(`[data-type="size-table"]`)
    .cloneNode(true);
  // Iterate over each section and append items accordingly
  // Object.entries(sectionsobj).forEach(([section, secData],index) => {
  //     const sectionElement = originalSectionTemplate.cloneNode(true);
  //     const colContainer = _modTemp.querySelector(`[data-type="col-container"]`).cloneNode(true);

  //    var colSize;

  //    var secDataEntries = Object.entries(secData);
  //    if (secDataEntries.length <= 2) {
  //        colSize = "is-6-desktop";
  //    } else {
  //        colSize = "is-4-desktop";
  //    }

  //     Object.entries(secData).forEach(([col,val],i) => {
  //         const txtElement = originalTxtElement.cloneNode(true);
  //         const imgElement = originalImgElement.cloneNode(true);
  //         const tableElementTemp = originalTableElementTemp.cloneNode(true);

  //         const currentCol = val

  //         if (currentCol.type === "text") {
  //             const textElem  = createTxtCol(colSize,currentCol.details,txtElement.cloneNode(true))
  //             colContainer.appendChild(textElem)
  //         }
  //         if (currentCol.type === "img") {

  //             const imgElem  = createImgCol(colSize,currentCol.details,imgElement.cloneNode(true));
  //             colContainer.appendChild(imgElem)
  //         }
  //         if (currentCol.type === "sizeTable") {

  //             const table =  createTable(colSize,product.sizeTable,tableElementTemp.cloneNode(true));
  //             colContainer.appendChild(table)

  //         }
  //         sectionElement.firstElementChild.appendChild( colContainer)
  //     })
  //     sectionsContainer.appendChild(sectionElement)
  // });

  _modBody.appendChild(sectionsContainer);
}

function createTable(colSize, table, parent) {
  parent.classList.add(colSize);
  const tableElement = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const headRow = document.createElement("tr");
  const orderdHead = table.head.reverse();
  orderdHead.forEach((cell) => {
    const th = document.createElement("th");
    th.textContent = cell;
    headRow.appendChild(th);
  });
  tableHead.appendChild(headRow);
  tableElement.appendChild(tableHead);

  orderdRows = table.rows.forEach((row) => {
    const Row = document.createElement("tr");
    const orderdRows = row.reverse();
    orderdRows.forEach((val) => {
      const tdElement = document.createElement("td");
      (tdElement.textContent = val), Row.appendChild(tdElement);
    });
    tableBody.appendChild(Row);
  });
  tableElement.appendChild(tableBody);
  parent.firstElementChild.appendChild(tableElement);

  return parent;
}

function createTxtCol(colSize, details, elementTemp) {
  elementTemp.classList.add(colSize);

  Object.entries(details).forEach(([key, val]) => {
    if (key === "title") {
      const title = document.createElement("p");
      title.classList.add("title");
      title.textContent = details.title;
      elementTemp.firstElementChild.appendChild(title);
    } else if (key === "subTitle") {
      const subTitle = document.createElement("p");
      subTitle.classList.add("subtitle");
      subTitle.textContent = details.subTitle;
      elementTemp.firstElementChild.appendChild(subTitle);
    } else if (key === "paragraph") {
      const paragraph = document.createElement("p");
      // subtitle.classList.add("subtitle")
      paragraph.textContent = details.paragraph;
      elementTemp.firstElementChild.appendChild(paragraph);
    }
  });

  return elementTemp;
}

function createImgCol(colSize, details, elementTemp) {
  elementTemp.classList.add(colSize);
  const figure = elementTemp.querySelector(`[data-type="figure-element"]`);
  const img = elementTemp.querySelector(`[data-type="img-element"]`);
  img.src = details.imgsrc;
  if (details.isRound) {
    img.classList.add("is-rounded");
  }
  if (details.figcaption) {
    figcaption = document.createElement("figcaption");
    figcaption.textContent = details.figcaption;
    figure.appendChild(figcaption);
  }
  return elementTemp;
}

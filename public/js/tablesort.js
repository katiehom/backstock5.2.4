// param {HTML Table Element} table The table to sort
// param {number} column The index of the column to sort
// param {boolean} asc Determines if the sorting will be ascending
function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody?.querySelectorAll('tr'));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        if (isNaN(parseFloat(aColText)) && isNaN(parseFloat(bColText))) {
            return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
        } else if (aColText.includes('/') && bColText.includes('/')) {
            const [aMonth, aDay, aYear] = aColText.split('/');
            const [bMonth, bDay, bYear] = bColText.split('/');
            const aDate = new Date(`${aYear}-${aMonth}-${aDay}`);
            const bDate = new Date(`${bYear}-${bMonth}-${bDay}`);
            if (aDate < bDate) {
              return -1 * dirModifier;
            } else if (aDate > bDate) {
              return 1 * dirModifier;
            } else {
              return 0;
            }
          }
          return (+aColText - +bColText) * dirModifier;
        });

    // Remove all existing TRs from the table
    while(tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    };

    // Add newly sorted rows
    tBody.append(...sortedRows);

    // Remember current column sorting direction
    table.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle('th-sort-asc', asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle('th-sort-desc', !asc);
};

sortTableByColumn(document.querySelector('table'), 1);

document.querySelectorAll('.table-sortable th.sort')?.forEach(headerCell => {
    headerCell.addEventListener('click', () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains('th-sort-asc');

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    })
});


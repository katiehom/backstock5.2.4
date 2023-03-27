document.addEventListener('DOMContentLoaded', function() {
  const backstockSearchInput = document.querySelector('#backstockSearchInput');
  const restockSearchInput = document.querySelector('#restockSearchInput');
  const table1Rows = document.querySelectorAll('#backstockTable tbody tr');
  const table2Rows = document.querySelectorAll('#restockTable tbody tr');

  const table1RowData = Array.from(table1Rows).map(row => {
    const cells = row.querySelectorAll('td span');
    const rowData = [];
    cells.forEach((cell, index) => {
      if (index < cells.length - 1) {
        rowData.push(cell.textContent.trim().toLowerCase());
      }
    });
    const rowString = rowData.join(', ');
    console.log(rowString);

    backstockSearchInput?.addEventListener('keyup', function() {
      const query = backstockSearchInput.value.toLowerCase();

      if (rowString.includes(query)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });  
  });

  const table2RowData = Array.from(table2Rows).map(row => {
    const cells = row.querySelectorAll('td span');
    const rowData = [];
    cells.forEach((cell) => {
        rowData.push(cell.textContent.trim().toLowerCase());
    });
    const rowString = rowData.join(', ');
    console.log(rowString);

    restockSearchInput?.addEventListener('keyup', function() {
      const query = restockSearchInput.value.toLowerCase();

      if (rowString.includes(query)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    })
  })
})

///////////////////// Original Filter Code  ////////////////////////////
// If testing, remember to add `onkeyup="<functionName>"` in each input
// within `backstock.ejs` and `restock.ejs`

// function searchTable() {
//   let input, filter, found, table, tr, td, i, j;
//   input = document.getElementById("backstockSearchInput");
//   filter = input.value.toLowerCase();
//   table = document.getElementById("backstockTable");
//   tr = table.getElementsByTagName("tr");
//   for (i = 1; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td");
//     for (j = 0; j < td.length; j++) {
//       if (td[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
//         found = true;
//       }
//     }
//     if (found) {
//       tr[i].style.display = "";
//       found = false;
//     } else {
//       tr[i].style.display = "none";
//     }
//   }
// }

// function searchRestockTable() {
//   let input, filter, found, table, tr, td, i, j;
//   input = document.getElementById("restockSearchInput");
//   filter = input.value.toLowerCase();
//   table = document.getElementById("restockTable");
//   tr = table.getElementsByTagName("tr");
//   for (i = 1; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td");
//     for (j = 0; j < td.length; j++) {
//       if (td[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
//         found = true;
//       }
//     }
//     if (found) {
//       tr[i].style.display = "";
//       found = false;
//     } else {
//       tr[i].style.display = "none";
//     }
//   }
// }


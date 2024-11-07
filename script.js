function insert_Row() {
  let table = document.querySelector('#sampleTable');
  let newRow = document.createElement('tr');
  newRow.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";
  
  table.insertBefore(newRow, table.firstChild); // Insert the new row before the first child of the table
}

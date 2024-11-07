function insert_Row() {
  // Get the table element
  let table = document.querySelector('#sampleTable');
  
  // Create a new row and define its content
  let newRow = document.createElement('tr');
  newRow.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";
  
  // Insert the new row at the top of the table
  table.insertBefore(newRow, table.firstElementChild);
}

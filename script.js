function insert_Row() {
  let table = document.querySelector('#sampleTable');
  
  // Create a new row and define its content
  let newRow = document.createElement('tr');
  newRow.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";
  
  // Insert the new row before the first row of the table
  table.insertBefore(newRow, table.firstChild);
}

function insert_Row() {
  // Get the table body element
  let tbody = document.querySelector('#sampleTable tbody');
  
  // Create a new row and define its content
  let newRow = document.createElement('tr');
  newRow.innerHTML = "<td>New Cell1</td><td>New Cell2</td>";
  
  // Insert the new row at the top of the table body
  tbody.insertBefore(newRow, tbody.firstElementChild);
}

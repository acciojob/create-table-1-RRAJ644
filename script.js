function insert_Row() {
    //Write your code here

	let table = document.querySelector('#sampleTable')
	let newRow = document.createElement('tr')
	let cell1 = document.createElement('td')
	cell1.textContent='New Cell1'
	let cell2 = document.createElement('td')
	cell1.textContent='New Cell2'

	newRow.appendChild(cell1);
    newRow.appendChild(cell2);

	table.insertBefore(newRow, table.firstChild)
	
  
}

function insert_Row() {
    var table = document.getElementById("sampleTable");
    

     // Gets the current number of rows
    var rowCount = table.rows.length;
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "Row " + (rowCount + 1) + ", Cell 1. ";
    cell2.innerHTML = "Row " + (rowCount + 1) + ", Cell 2. ";
}
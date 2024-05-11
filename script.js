var rowCount = 1; // Initialize the row count

function row() {
    var mytable = document.getElementById("mytable");
    var rows = mytable.rows.length;
    var r = mytable.insertRow(rows);
    var c1 = r.insertCell(0);
    var c2 = r.insertCell(1);
    var c3 = r.insertCell(2);
    var c4 = r.insertCell(3);
    var c5 = r.insertCell(4);
    var c6 = r.insertCell(5);
    
    var checkbox = document.createElement("input");
    var numberColumn = document.createElement("span");
    var boxContents = document.createElement("input");
    var dateRange = document.createElement("input");
    var retentionPeriod = document.createElement("input");
    var forDestruction = document.createElement("input");
    
    checkbox.type = "checkbox";
    boxContents.type = "text";
    boxContents.className = "wider-input"; // Add a class for styling consistency
    dateRange.type = "text";
    retentionPeriod.type = "text";
    forDestruction.type = "text";
    
    c1.appendChild(checkbox);
    c2.appendChild(numberColumn); // Add the number column to the new row
    c3.appendChild(boxContents);
    c4.appendChild(dateRange);
    c5.appendChild(retentionPeriod);
    c6.appendChild(forDestruction);
    
    rowCount++; // Increment the row count
    updateRowNumbers(); // Update row numbers after adding a new row
}

function del() {
    var mytable = document.getElementById("mytable");
    var rows = mytable.rows.length;
    var deletedCount = 0; // Initialize the deleted row count
    for (var i = rows - 1; i > 0; i--) {
        if (mytable.rows[i].cells[0].children[0].checked) {
            mytable.deleteRow(i);
            deletedCount++;
        }
    }
    if (deletedCount > 0) {
        updateRowNumbers(); // Update row numbers after deletion
    }
}

function updateRowNumbers() {
    var rows = document.querySelectorAll("#mytable tr:not(:first-child)");
    rows.forEach((row, index) => {
        var rowNumber = index + 1;
        row.cells[1].querySelector("span").textContent = rowNumber;
    });
}

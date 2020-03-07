// from data.js
const tableData = data;

// Get a reference to the table body
const tbody = d3.select("tbody");

// Build table
function buildTable(data) {
    tbody.html(" ");
    data.forEach((dataRow) => {
        const row = tbody.append("tr");
        Object.values(dataRow).forEach(function(value) {
// //   Append a cell to the row for each value in sighting report
        let cell = row.append("td");
        cell.text(value)
        });
    });
}
buildTable(tableData);

// // Event that Triggers a Function When the Button is Clicked
function handleClick() {
    var date = d3.select("#datetime").property("value");
    var filterData = tableData
    if (date) {
        filterData = filterData.filter(row => row.datetime === date);
    }
    buildTable(filterData);
}

// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);
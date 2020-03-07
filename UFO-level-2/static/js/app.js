// from data.js
const tableData = data;

// Get a reference to the table body
const tbody = d3.select("tbody");
//const tbody = d3.select("#state");
//const tbody = d3.select("#city");
//const tbody = d3.select("#country");
//const tbody = d3.select("#shape");

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
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");

    //Filter on date
    if (date) {
        filterData = filterData.filter(row => row.datetime === date);
    }
    else { tableData };

    // Filter on city
    if (city) {
        filterData = filterData.filter(row => row.city === city);
    }
    else { tableData };

    // Filter on state
    if (state) {
        filterData = filterData.filter(row => row.state === state);
    }
    else { tableData };

    // Filter on country
    if (country) {
        filterData = filterData.filter(row => row.country === country);
    }
    else { tableData };

    // Filter on shape
    if (shape) {
        filterData = filterData.filter(row => row.shape === shape)
    }
    else { tableData };
    buildTable(filterData);
}

// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);



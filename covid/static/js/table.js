$(document).ready(function () {
    $('#dateDeaths').DataTable({
        "loading": false,
        "paging":   false,
        "ordering": false,
        "info":     false,
        "filter":   false,
        ajax: {
            url: "https://ivizri.com/covid/static/api/values/daily_death_dates.json",
            dataSrc: '',
            method: "GET",
            dataType: 'json'
        },
        columns: [
            { data: "date" },
            { data: "deaths", className: "text-center" }
        ]
    });

    $('#capacity').DataTable({
        "loading": false,
        "paging":   false,
        "ordering": false,
        "info":     false,
        "filter":   false,
        ajax: {
            url: "https://ivizri.com/covid/static/api/values/capacity.json",
            dataSrc: '',
            method: "GET",
            dataType: 'json'
        },
        columns: [
            { data: "metric" },
            { data: "%_capacity_covid", className: "text-right" }
        ]
    });
    
    $("#schoolsTable").DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "order": [[ 1, "desc" ]],
        columns: [
            { data: "school" },    
            { data: "cases", className: "text-right" },
            { data: "new-cases", className: "text-right" }
        ],
    });   

    $("#nursingHome").DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "filter":   false,
        "order": [[ 0, "asc" ]],
        columnDefs: [
            { orderable: true, className: 'reorder', targets: 0 },
            { orderable: false, targets: '_all' }
        ],
        columns: [
            { data: "week-end", type: "date" },    
            { data: "all-deaths", className: "text-right" },
            { data: "covid-deaths", className: "text-right" },
            { data: "pct-covid", className: "text-right" }
        ]
    });   
});


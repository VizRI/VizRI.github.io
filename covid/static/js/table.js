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

    $("#nursingHomeCases").DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "filter":   false,
        "order": [[ 0, "desc" ]],
        columnDefs: [
            { targets: [ 0 ], className: "dt-head-left reorder", orderable: true, type: "date" },
            { targets: [ 1, 2 ], className: "dt-head-right dt-body-right", orderable: false }
        ]
    });   

    $("#nursingHomeDeaths").DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "filter":   false,
        "order": [[ 0, "desc" ]],
        columnDefs: [
            { targets: [ 0 ], className: "dt-head-left reorder", orderable: true, type: "date" },
            { targets: [ 1, 2, 3 ], className: "dt-head-right dt-body-right", orderable: false }
        ]
    });   
    $("#nursingHomePPE").DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "filter":   false,
        "order": [[ 0, "desc" ]],
        columnDefs: [
            { targets: [ 0 ], className: "dt-head-left reorder", orderable: true, type: "date" },
            { targets: [ 1, 2, 3, 4, 5, 6, 7 ], className: "dt-head-right dt-body-right", orderable: false }
        ]
    });   
    $("#nursingHomeProvDeaths").DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "order": [[ 1, "desc" ]],
        columnDefs: [
            { targets: [ 0 ], className: "dt-head-left reorder", orderable: true },
            { targets: [ 1, 2, 3, 4 ], className: "dt-head-right dt-body-right", orderable: true }
        ]
    });   
    $("#nursingHomeProvPPE").DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "order": [[ 7, "desc" ]],
        columnDefs: [
            { targets: [ 0 ], className: "dt-head-left reorder", orderable: true },
            { targets: [ 1, 2, 3, 4, 5, 6, 7 ], className: "dt-head-right dt-body-right", orderable: true }
        ]
    });
    $("#nursingHomeProvStaff").DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "order": [[ 5, "desc" ]],
        columnDefs: [
            { targets: [ 0 ], className: "dt-head-left reorder", orderable: true },
            { targets: [ 1, 2, 3, 4, 5 ], className: "dt-head-right dt-body-right", orderable: true }
        ]
    });
    $("#nursingHomeProvPct").DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "order": [[ 3, "desc" ]],
        columnDefs: [
            { targets: [ 0 ], className: "dt-head-left reorder", orderable: true },
            { targets: [ 1, 2, 3 ], className: "dt-head-right dt-body-right", orderable: true }
        ]
    });
});


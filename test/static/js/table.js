$(document).ready(function () {
    $('#dateDeaths').DataTable({
        "loading": false,
        "paging":   false,
        "ordering": false,
        "info":     false,
        "filter":   false,
        ajax: {
            url: "https://ivizri.com/test/data/death-dates/",
            dataSrc: '',
            method: "GET",
            dataType: 'json'
        },
        columns: [
            { data: "date" },
            { data: "deaths", className: "text-center" }
        ]
    });
});


$(document).ready(function () {
    $('#capacity').DataTable({
        "loading": false,
        "paging":   false,
        "ordering": false,
        "info":     false,
        "filter":   false,
        ajax: {
            url: "https://ivizri.com/test/data/capacity/",
            dataSrc: '',
            method: "GET",
            dataType: 'json'
        },
        columns: [
            { data: "name" },
            { data: "percent_full", className: "text-right" }
        ]
    });
});


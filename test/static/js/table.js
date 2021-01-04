$(document).ready(function () {
    $('#dateDeaths').DataTable({
        "loading": false,
        "paging":   false,
        "ordering": false,
        "info":     false,
        "filter":   false,
        ajax: {
            url: "http://127.1.2.3:5000/data/death-dates",
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
            url: "http://127.1.2.3:5000/data/capacity",
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


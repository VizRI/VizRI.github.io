$(document).ready(function () {
    $('#dateDeaths').DataTable({
        "loading": false,
        "paging":   false,
        "ordering": false,
        "info":     false,
        "filter":   false,
        ajax: {
            url: "https://ivizri.com/covid/static/api/daily_death_dates.json",
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
            url: "https://ivizri.com/covid/static/api/capacity.json",
            dataSrc: '',
            method: "GET",
            dataType: 'json'
        },
        columns: [
            { data: "metric" },
            { data: "%_capacity_covid", className: "text-right" }
        ]
    });
});


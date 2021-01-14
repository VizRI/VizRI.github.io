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

    $('#nursingHome').DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        ajax: {
            url: "http://127.1.2.3:5000/static/api/nursing_home_table.json",
            dataSrc: '',
            method: "GET",
            dataType: 'json'
        },
        columns: [
            { data: "city_town" },
            { data: "facility_name" },
            { data: "cases_avg", className: "text-right" },
            { data: "fatalities_avg", className: "text-right" }
        ]
    });    
    
});

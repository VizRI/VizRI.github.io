$(document).ready(function () {
    $('#nursingHome').DataTable({
        ajax: {
            url: "http://127.1.2.3:5000/static/api/nursing_home_table.json",
            dataSrc: '',
            method: "GET",
            dataType: 'json'
        },
        columns: [
            { data: "city_town" },
            { data: "facility_name" },
            { data: "cases (avg)", className: "text-center" },
            { data: "deaths (avg)", className: "text-center" }
        ]
    });    
});


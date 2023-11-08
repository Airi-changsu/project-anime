// Reservation_guide
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.ot_bt').addEventListener('click', function() {
    var selectedOption = document.querySelector('.cls_seat').value;
    hideAllTables();
    showTable(selectedOption);
    });


    function hideAllTables() {
    var tables = document.querySelectorAll('.tb_page1, .tb_page2, .tb_page3');
    tables.forEach(function(table) {
        table.style.display = 'none';
    });
    }

    function showTable(selectedOption) {
    var table = document.querySelector('.tb_page' + selectedOption);
    if (table) {
        table.style.display = 'block';
    }
    }
});
// Reservation_Domestic 
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.ot_bt').addEventListener('click', function() {
    var selectedOption = document.querySelector('.cls_seat').value;
    hideAllTables();
    showTable(selectedOption);
    });


    function hideAllTables() {
    var tables = document.querySelectorAll('.ft_container_box1, .ft_container_box2, .ft_container_box3, .ft_container_box4, .ft_container_box5');
    tables.forEach(function(table) {
        table.style.display = 'none';
    });
    }

    function showTable(selectedOption) {
    var table = document.querySelector('.ft_container_box' + selectedOption);
    if (table) {
        table.style.display = 'block';
    }
    }
});
function initializeTable() {

    $('#createLink').on('click', createCountry)

    addCountry('Bulgaria', 'Sofia');
    addCountry('Germany', 'Berlin');
    addCountry('Russia', 'Moscow');

    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        addCountry(country.val(), capital.val());
        country.val("");
        capital.val("");
    }

    function addCountry(country, capital) {
        let link1 =$('<a href="#">[Up]</a>').on('click', up);
        let link2 =$('<a href="#">[Down]</a>').on('click', down);
        let link3 =$('<a href="#">[Delete]</a>').on('click', del);
        let actions = $('<td>').append(link1).append(link2).append(link3);
        let tr = $('<tr>').append($(`<td>${country}</td>`)).append($(`<td>${capital}</td>`)).append(actions).appendTo($('#countriesTable'));
        fixLinks();
    }

    function up() {
        let row = $(this).parent().parent();
        row.insertBefore($(row).prev());
        fixLinks();
    }
    
    function down() {
        let row = $(this).parent().parent();
        row.insertAfter($(row).next());
        fixLinks();
    }
    
    function del() {
        let row = $(this).parent().parent();
        row.remove();
        fixLinks();
    }

    function fixLinks() {
        $('a').show();
        $('#countriesTable').find('tr:eq(2) td a:contains("Up")').hide();
        $('#countriesTable').find('tr:last-child td a:contains("Down")').hide();
    }
}
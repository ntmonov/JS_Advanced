function search() {
    let target = $('#searchText').val();
    let towns = $('#towns li');
    let matches = 0;
    for (let town of towns) {
        if ($(town).text().includes(target)) {
            $(town).css('font-weight', 'bold');
            matches++;
        } else {
            $(town).css('font-weight', '');
        }
    }
    $('#result').text(`${matches} matches found.`)
}
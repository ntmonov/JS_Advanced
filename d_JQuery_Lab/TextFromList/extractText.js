function extractText() {
    let items = $('#items li');
    let result = items.toArray().map(item => $(item).text()).join(', ');
    $('#result').text(result);
}
function addItem() {
    let text = $('#newItemText');
    let value = $('#newItemValue');

    let option = $('<option>');
    option.text(text.val());
    option.prop('value', value.val());

    $('#menu').append(option);
    text.val('');
    value.val('');

}
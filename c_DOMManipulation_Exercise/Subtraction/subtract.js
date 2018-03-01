function subtract() {
    let field1 = $('#firstNumber').val();
    let field2 = $('#secondNumber').val();

    let result = Number(field1) - Number(field2);

    $('#result').text(result);
}
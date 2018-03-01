function attachEvents() {
    $('a').on('click', handler);
    function handler() {
        $('a').removeClass('selected');
        let button = $(this);
        button.addClass('selected');
    }
}
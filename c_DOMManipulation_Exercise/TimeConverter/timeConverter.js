function attachEventsListeners() {
    $('#daysBtn').on('click', days);
    $('#hoursBtn').on('click', hours);
    $('#minutesBtn').on('click', minutes);
    $('#secondsBtn').on('click', seconds);

    function days() {
        let days = $('#days').val();
        $('#hours').val(Number(days) * 24);
        $('#minutes').val(Number(days) * 24 * 60);
        $('#seconds').val(Number(days) * 24 * 60 * 60);
    }

    function hours() {
        let hours = $('#hours').val();
        $('#days').val(Number(hours) / 24);
        $('#minutes').val(Number(hours) * 60);
        $('#seconds').val(Number(hours) * 60 * 60);
    }

    function minutes() {
        let minutes = $('#minutes').val();
        $('#days').val(Number(minutes) / 24 / 60);
        $('#hours').val(Number(minutes) / 60);
        $('#seconds').val(Number(minutes) * 60);
    }

    function seconds() {
        let seconds = $('#seconds').val();
        $('#days').val(Number(seconds) / 60 / 60 / 24);
        $('#hours').val(Number(seconds) / 60 / 60);
        $('#minutes').val(Number(seconds) / 60);

    }
}
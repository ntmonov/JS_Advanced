function attachGradientEvents() {
    $('#gradient').on('mousemove', move);
    $('#gradient').on('mouseout', out);

    function move(event) {

        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        $('#result').text(power + "%");
    }

    function out() {
        $('#result').text("");
    }
}
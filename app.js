$(document).ready(function() {
    let secretNumber;
    let attempts;

    function startGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        $('#result').text('');
        $('#attempts').text('');
        $('#guess').val('').prop('disabled', false);
        $('#submit-guess').prop('disabled', false);
        $('#reset').hide();
        $('#guess').focus();
    }

    $('#submit-guess').click(function() {
        const guess = Number($('#guess').val());
        if (!guess || guess < 1 || guess > 100) {
            $('#result').text('⚠️ Masukkan angka valid antara 1 dan 100!');
            return;
        }
        attempts++;

        if (guess === secretNumber) {
            $('#result').html(`🎉 <strong>Selamat! Tebakan benar: ${secretNumber}</strong>`);
            $('#attempts').text(`Jumlah percobaan: ${attempts}`);
            $('#guess').prop('disabled', true);
            $('#submit-guess').prop('disabled', true);
            $('#reset').show();
        } else if (guess < secretNumber) {
            $('#result').text('⬆️ Terlalu kecil! Coba lagi.');
            $('#attempts').text(`Jumlah percobaan: ${attempts}`);
        } else {
            $('#result').text('⬇️ Terlalu besar! Coba lagi.');
            $('#attempts').text(`Jumlah percobaan: ${attempts}`);
        }
        $('#guess').val('').focus();
    });

    $('#reset').click(function() {
        startGame();
    });

    $('#dark-toggle').click(function() {
        $('body').toggleClass('dark');

        if ($('body').hasClass('dark')) {
            $('#dark-toggle').text('☀️ Light Mode');
        } else {
            $('#dark-toggle').text('🌙 Dark Mode');
        }
    });

    startGame();
});
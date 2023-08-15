$(document).ready(function() {
    let intervalId;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function updateTimerDisplay() {
        $('#timer').text(
            ('0' + hours).slice(-2) + ':' +
            ('0' + minutes).slice(-2) + ':' +
            ('0' + seconds).slice(-2)
        );
    }

    function startTimer() {
        intervalId = setInterval(function() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateTimerDisplay();
        }, 1000);
    }

    function stopTimer() {
        clearInterval(intervalId);
    }

    $('#startButton').click(function() {
        startTimer();
    });

    $('#stopButton').click(function() {
        stopTimer();
    });
});

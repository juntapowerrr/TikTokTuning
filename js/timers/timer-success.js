// Set the date we're counting down to
var countDownDate = new Date("Oct 16, 2023 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="timer"
    document.getElementById("timerSuccess").innerHTML = `${days}дн <span class="dots">:</span> ${hours}год <span class="dots">:</span> ${minutes}хв <span class="dots">:</span> ${seconds}с`;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timerSuccess").innerHTML = `0дн <span class="dots">:</span> 0год <span class="dots">:</span> 0хв <span class="dots">:</span> 0с`;
    }
}, 1000);
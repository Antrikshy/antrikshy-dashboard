var tempGetUrl = "http://antrikshy.is.my:5000/temp";

$(document).ready(function() {
    $.get(tempGetUrl, function(data) {
        displayTempHumd(data.temperature, data.humidity);
    });
});

function displayTempHumd(temp, humd) {
    $("#temp-value").text(temp + " C");
    $("#humd-value").text(humd + "%");
}

$(function() {
    var TOP_PANEL_SELECTOR = '#alpha1_panel';
    var checkNotUndefined = function(data) {
        return (typeof data === 'undefined') ? false : true;
    }
    var addCode = function(selector, htmlCode, after) {
        var element = $(selector);
        if(checkNotUndefined(after) === true && after === true) {
            element.append(htmlCode);
        } else {
            element.prepend(htmlCode);
        }
    };

    var updateClock = function() {
        var now = new Date();
			
        var kirillTime = now.toLocaleTimeString("en-US", {timeZone: "America/New_York", hour12: false});
        var ivanTime = now.toLocaleTimeString("en-US", {timeZone: "Europe/London", hour12: false});
        var antonTime = now.toLocaleTimeString("en-US", {timeZone: "Asia/Tokyo", hour12: false});
        var asanovTime = now.toLocaleTimeString("en-US", {timeZone: "Australia/Sydney", hour12: false});
        var yuriiShTime = now.toLocaleTimeString("en-US", {timeZone: "Europe/Berlin", hour12: false});
        var ruslanTime = now.toLocaleTimeString("en-US", {timeZone: "Europe/Moscow", hour12: false});

        $('#kirill-time').text('Кирилл: ' + kirillTime);
        $('#ivan-time').text('Иван: ' + ivanTime);
        $('#anton-time').text('Антон: ' + antonTime);
        $('#asanov-time').text('Юрий А.: ' + asanovTime);
        $('#yuriiSh-time').text('Юрий Ш.: ' + yuriiShTime);
        $('#ruslan-time').text('Руслан: ' + ruslanTime);
        
    };
	
    setInterval(updateClock, 1000);
    var timeIndicatorsHTML = `
    <div id="time-indicators" style="font-size: 10px;/* max-height: 20px; */height: 27px;display: flex;flex-wrap: nowrap;max-width: 600px;color: #bcc0c7;align-content: center;justify-content: space-evenly;align-items: center;flex-direction: row;">
    <span id="kirill-time" style="margin-right: 5px;"></span>
    <span id="ivan-time" style="margin-right: 5px;"></span>
    <span id="anton-time" style="margin-right: 5px;"></span>
    <span id="asanov-time" style="margin-right: 5px;"></span>
    <span id="yuriiSh-time" style="margin-right: 5px;"></span>
    <span id="ruslan-time" style="margin-right: 5px;"></span>
    </div>
    `;
    addCode(TOP_PANEL_SELECTOR, timeIndicatorsHTML, true);
});

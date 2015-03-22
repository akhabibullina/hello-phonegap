// https://github.com/alunny/stopgap/blob/master/lib/stopgap.js

function StopGap() {
    function deviceready() {
        // fire off deviceready
        var e = document.createEvent('Events'); 
        e.initEvent('deviceready');
        document.dispatchEvent(e);
    }

    window.PhoneGap = {};
    deviceready();
}
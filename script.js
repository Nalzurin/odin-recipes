document.getElementById('knock_button').addEventListener('click', function() {
    var button = document.getElementById('knock_button');
    var audio = document.getElementById('knocking_sound');
    var overlay = document.getElementById('overlay');
    var entrance = document.getElementById('entrance');
    audio.play();
    button.parentNode.removeChild(button);
    // Play door opening audio source after 1 second
    setTimeout(function() {
        audio = document.getElementById('door_open_sound');
        audio.play();
        setTimeout(function() {
        overlay.style.opacity = 1;
        overlay.style.pointerEvents = 'auto';
        }, 1000);

        setTimeout(function() {
            entrance.style.zIndex = 0;
            setTimeout(function() {
                overlay.style.opacity = 0;
            }, 1000);
        }, 1700);

        
    }, 1500);

});
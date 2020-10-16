var lengthofdrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < lengthofdrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var xx = this.innerHTML;
        sound(xx);
        Animate(xx);
    });
}
// var audio = new Audio('sounds/kick-bass.mp3');
// audio.play();
document.addEventListener('keypress', function(event) {
    var alpha = event.key;
    sound(alpha);
    Animate(alpha);
})

function sound(x) {

    switch (x) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;

    }
}

function Animate(x) {
    var y = document.querySelector("." + x);
    y.classList.add("pressed");
    setTimeout(function() {
        y.classList.remove("pressed");
    }, 100);
}
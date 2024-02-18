function App1() {}

window.onload = function (event1) {
    const app1 = new App1();
    window.app1 = app1;
};

App1.prototype.processingButton = function(event1) {
    const btn1 = event1.currentTarget;
    const slickList1 = event1.currentTarget.parentNode;
    const track1 = event1.currentTarget.parentNode.querySelector('#track1');
    const slick1 = track1.querySelectorAll('.slick1');

    const slickWidth = slick1[0].offsetWidth;
    
    const trackWidth = track1.offsetWidth;
    const listWidth = slickList1.offsetWidth;

    track1.style.left == ""  ? leftPosition = track1.style.left = 0 : leftPosition = parseFloat(track1.style.left.slice(0, -2) * -1);

    btn1.dataset.button == "button-prev1" ? prevAction1(leftPosition,slickWidth,track1) : nextAction1(leftPosition,trackWidth,listWidth,slickWidth,track1)
}

let prevAction1 = (leftPosition,slickWidth,track1) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track1.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction1 = (leftPosition,trackWidth,listWidth,slickWidth,track1) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track1.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
window.onload = function () {
    sliderOne();
    sliderTwo();
};

let slider1 = document.getElementById('slider1');
let slider2 = document.getElementById('slider2');
let value1 = document.getElementById('rangvalue1');
let value2 = document.getElementById('rangvalue2');
let minGap = 2000000;
let maxSliderValue = slider1.max;
let minSliderValue = slider1.min;
let sliderTrack = document.getElementById('sliderTrack');

function sliderOne() {
    if (
        parseInt(slider2.value) - parseInt(slider1.value) <=
        minGap
    ) {
        slider1.value = parseInt(slider2.value) - minGap;
    }
    value1.textContent = moneyFormat(
        parseInt(slider1.value),
    );
    fillColor();
}

function sliderTwo() {
    if (
        parseInt(slider2.value) - parseInt(slider1.value) <=
        minGap
    ) {
        slider2.value = parseInt(slider1.value) + minGap;
    }
    value2.textContent = moneyFormat(
        parseInt(slider2.value),
    );
    fillColor();
}

function fillColor() {
    percent1 =
        ((slider1.value - minSliderValue) /
            (maxSliderValue - minSliderValue)) *
        100;
    percent2 =
        ((slider2.value - minSliderValue) /
            (maxSliderValue - minSliderValue)) *
        100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264f2 ${percent1}%, #3264f2 ${percent2}%, #dadae5 ${percent2}%)`;
}

function moneyFormat(money) {
    let result = 'đ';
    while (money > 0) {
        let remainder = money % 1000;
        money = (money - remainder) / 1000;
        result =
            (money > 0 ? '.' : '') +
            (money > 0
                ? '000'.substring(
                      0,
                      3 - remainder.toString().length,
                  )
                : '') +
            remainder +
            result;
    }
    return result;
}

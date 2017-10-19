var level = 3;

function energyReducer() {
    console.log('ne haber', level);
    if (level >= 0) {
        $('div > div:eq(' + (3 - level) + ')').css('background-color', 'white');
        level = level == 0 ? 0 : level - 1;
    }
};
$('#reduceEnergy').on('click', energyReducer);

function energyProducer() {
    if (level <= 3) {
        $('div > div:eq(' + (3 - level) + ')').css('background-color', 'red');
        level = level == 3 ? 3 : level + 1
    }
};
$('#produceEnergy').on('click', energyProducer);

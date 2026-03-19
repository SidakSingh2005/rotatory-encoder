let Num = 5
let lastMove = 0

RotaryEncoder.init(DigitalPin.P2, DigitalPin.P1, DigitalPin.P0)

music.setVolume(Num * 25)
basic.showNumber(Num)

// rotate right
RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {

    if (input.runningTime() - lastMove > 150) {

        if (Num < 10) {
            Num += 1
        }

        music.setVolume(Num * 25)

        basic.showNumber(Num)

        lastMove = input.runningTime()
    }

})

// rotate left
RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {

    if (input.runningTime() - lastMove > 150) {

        if (Num > 0) {
            Num -= 1
        }

        music.setVolume(Num * 25)

        basic.showNumber(Num)

        lastMove = input.runningTime()
    }

})

// play melody
input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 E G C5", 120)
})

input.onButtonPressed(Button.B, function () {
    music.playMelody("G F E D C", 120)
})
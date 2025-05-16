input.onPinPressed(TouchPin.P0, function () {
    datalogger.log(datalogger.createCV("tlacidlo", 0))
})
function update_pad (diff: number) {
    led.toggle(x, 4)
    x = mod(x + diff, 5)
    led.toggle(x, 4)
}
input.onButtonPressed(Button.A, function () {
    datalogger.log(datalogger.createCV("tlacidlo", "A"))
    update_pad(-1)
})
function mod (up: number, down: number) {
    if (up < 0) {
        return down - Math.abs(up) % down
    } else {
        return up % down
    }
}
input.onPinPressed(TouchPin.P2, function () {
    datalogger.log(datalogger.createCV("tlacidlo", 2))
})
input.onButtonPressed(Button.AB, function () {
    datalogger.log(datalogger.createCV("tlacidlo", "A + B"))
})
input.onButtonPressed(Button.B, function () {
    datalogger.log(datalogger.createCV("tlacidlo", "B"))
    update_pad(1)
})
input.onPinPressed(TouchPin.P1, function () {
    datalogger.log(datalogger.createCV("tlacidlo", 1))
})
let x = 0
datalogger.setColumnTitles("tlacidlo")
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
x = 2
led.toggle(2, 4)
basic.forever(function () {
	
})

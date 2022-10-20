let count = 0
let tmp = 0
input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
})
input.onButtonPressed(Button.AB, function () {
    tmp = count
    while (tmp >= 0) {
        basic.showNumber(tmp)
        tmp += -1
    }
})
input.onButtonPressed(Button.B, function () {
    count += 10
    basic.showNumber(count)
})

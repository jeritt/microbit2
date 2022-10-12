blockytalky.onReceivedNumber(function (key, value) {
    if (value == 1) {
        basic.showIcon(IconNames.Happy)
    }
    if (value == 0) {
        basic.showIcon(IconNames.Sad)
    }
})

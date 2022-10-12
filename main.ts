blockytalky.onReceivedNumber(function (key, value) {
    if (value == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (value == 2) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.No)
    }
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})

def on_received_number(key, value):
    if value == 0:
        basic.show_icon(IconNames.HEART)
blockytalky.on_received_number(on_received_number)

def on_bluetooth_connected():
    basic.show_icon(IconNames.HAPPY)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_icon(IconNames.SAD)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

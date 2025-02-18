let spd = 0
spd += 5
MiniCar.motor(Motorlist.M1, Direction1.Forward, spd)
basic.forever(function () {
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    basic.pause(500)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
    basic.pause(500)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
})

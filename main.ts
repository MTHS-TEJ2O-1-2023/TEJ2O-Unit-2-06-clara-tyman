/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Clara Tyman
 * Created on: Sep 2023
 * This program Lights LED with pin 16
*/

// On start
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)

// Light on
input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Yes)
  pins.digitalWritePin(DigitalPin.P16, 1)
})

// Light off
input.onButtonPressed(Button.B, function () {
  basic.showIcon(IconNames.No)
  pins.digitalWritePin(DigitalPin.P16, 0)
})

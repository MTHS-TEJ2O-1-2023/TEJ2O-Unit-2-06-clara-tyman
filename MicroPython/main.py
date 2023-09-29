"""
Created by: Clara
Created on: Sep 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *


display.clear
display.Icon.HAPPY
pin16.write_digital(0)


"Light On"
display.scroll(str(button_a.get_presses()))
display.Icon.YES
pin16.write_digital(1)

"Light off"
display.scroll(str(button_b.get_presses()))
display.Icon.NO
pin16.write_digital(0)

input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 1; index++) {
        led.plot(4, 2)
        if (led.point(2, 0) && Bob) {
            basic.clearScreen()
            game.addScore(1)
            Wall_13.delete()
            Bob.turn(Direction.Right, 180)
            Bob.move(2)
            Wall_13 = game.createSprite(2, 0)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    Bob.move(1)
})
input.onPinPressed(TouchPin.P2, function () {
    for (let index = 0; index < 1; index++) {
        led.plot(0, 2)
        if (led.point(2, 4) && Bob) {
            basic.clearScreen()
            game.addScore(1)
            Wall_6.delete()
            Bob.turn(Direction.Right, 180)
            Bob.move(2)
            Wall_6 = game.createSprite(2, 4)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Bob.turn(Direction.Right, 90)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 1; index++) {
        led.plot(2, 4)
        if (led.point(2, 4) && Bob) {
            basic.clearScreen()
            game.addScore(1)
            Wall_2.delete()
            Bob.turn(Direction.Right, 180)
            Bob.move(2)
            Wall_2 = game.createSprite(4, 2)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 1; index++) {
        led.plot(2, 0)
        if (led.point(4, 2) && Bob) {
            basic.clearScreen()
            game.addScore(1)
            Wall_15.delete()
            Bob.turn(Direction.Right, 180)
            Bob.move(2)
            Wall_15 = game.createSprite(0, 2)
            Wall_16 = game.createSprite(1, 2)
        }
    }
})
let Wall_16: game.LedSprite = null
let Wall_15: game.LedSprite = null
let Wall_13: game.LedSprite = null
let Wall_6: game.LedSprite = null
let Wall_2: game.LedSprite = null
let Bob: game.LedSprite = null
Bob = game.createSprite(2, 2)
game.setLife(1)
let Wall = game.createSprite(4, 4)
let Wall_1 = game.createSprite(3, 4)
Wall_2 = game.createSprite(2, 4)
let Wall_3 = game.createSprite(1, 4)
let Wall_4 = game.createSprite(0, 4)
let Wall_5 = game.createSprite(0, 3)
Wall_6 = game.createSprite(0, 2)
let Wall_7 = game.createSprite(0, 1)
let Wall_8 = game.createSprite(0, 0)
let Wall_9 = game.createSprite(4, 3)
let Wall_10 = game.createSprite(3, 0)
let Wall_11 = game.createSprite(4, 0)
let Wall_12 = game.createSprite(4, 1)
Wall_13 = game.createSprite(4, 2)
let Wall_14 = game.createSprite(1, 0)
Wall_15 = game.createSprite(1, 0)
Wall_16 = game.createSprite(1, 0)
let Coin_1 = game.createSprite(1, 0)
let Coin_2 = game.createSprite(1, 0)
let Coin_3 = game.createSprite(1, 0)
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_9)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_11)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_4)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_14)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_8)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_3)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_2)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_5)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_13)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_7)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_1)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_6)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_12)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_15)) {
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Play again")
        game.gameOver()
    }
})
loops.everyInterval(500, function () {
    if (Bob.isTouching(Wall_16)) {
        basic.pause(500)
        basic.clearScreen()
        Wall.delete()
        Wall_1.delete()
        Wall_2.delete()
        Wall_3.delete()
        Wall_4.delete()
        Wall_5.delete()
        Wall_6.delete()
        Wall_7.delete()
        Wall_8.delete()
        Wall_9.delete()
        Wall_10.delete()
        Wall_11.delete()
        Wall_12.delete()
        Wall_13.delete()
        Wall_14.delete()
        Wall_15.delete()
        Wall_16.delete()
        Wall_16.delete()
        Coin_1 = game.createSprite(randint(0, 4), randint(0, 4))
        Coin_2 = game.createSprite(randint(0, 4), randint(0, 4))
        Coin_3 = game.createSprite(randint(0, 4), randint(0, 4))
        basic.pause(15000)
        Coin_1.delete()
        Coin_2.delete()
        Coin_3.delete()
        basic.pause(100)
        basic.clearScreen()
        Bob.delete()
        Bob = game.createSprite(2, 2)
    } else {
        game.addLife(0)
    }
})
basic.forever(function () {
    if (Bob.isTouching(Coin_2)) {
        game.addScore(5)
        Coin_2.delete()
    }
})
basic.forever(function () {
    if (Bob.isTouching(Coin_3)) {
        game.addScore(5)
        Coin_3.delete()
    }
})
basic.forever(function () {
    if (Bob.isTouching(Coin_1)) {
        game.addScore(5)
        Coin_1.delete()
    }
})
basic.forever(function () {
    music.setVolume(70)
    music.playMelody("E B C5 A F B C5 D ", 120)
    basic.pause(200)
    music.playMelody("E B C5 G E A B C5 ", 120)
    basic.pause(500)
})

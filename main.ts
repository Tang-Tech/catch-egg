input.onButtonPressed(Button.A, function () {
    if (basket.get(LedSpriteProperty.X) > 0) {
        basket.move(-1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (basket.get(LedSpriteProperty.X) < 4) {
        basket.move(1)
    }
})
let basket: game.LedSprite = null
let egg = game.createSprite(randint(0, 4), 0)
basket = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    if (egg.isTouching(basket)) {
        game.addScore(1)
        basic.showIcon(IconNames.Happy)
        egg.set(LedSpriteProperty.X, randint(0, 4))
        egg.set(LedSpriteProperty.Y, 0)
    } else {
        egg.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
})

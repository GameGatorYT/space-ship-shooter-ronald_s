namespace SpriteKind {
    export const background = SpriteKind.create()
    export const asteroid = SpriteKind.create()
    export const asteroid_2 = SpriteKind.create()
}
/**
 * It happened when I added the rest of ghe metor code
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Laser`, mySprite, 100, 0)
})
let Obstical: Sprite = null
let choose = 0
let stars: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Space Ship`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
mySprite.setVelocity(76, 150)
game.onUpdate(function () {
    stars = sprites.createProjectileFromSide(assets.image`Star`, randint(-100, -10), 0)
    stars.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    stars.setKind(SpriteKind.background)
})
/**
 * Maybe it has to do with the x cordinate. It could also be the "screen hight"
 */
game.onUpdateInterval(2000, function () {
    choose = randint(1, 2)
    if (choose == 1) {
        Obstical = sprites.createProjectileFromSide(, -50, 0)
    } else if (choose == 2) {
        Obstical = sprites.createProjectileFromSide(assets.image`Asteriod 2`, -50, 0)
    }
    Obstical.y = randint(10, 10)
})

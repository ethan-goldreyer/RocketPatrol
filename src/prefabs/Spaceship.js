// space ship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super (scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
    }

    update() {
        // move ship left
        this.x -= this.moveSpeed;
        // wrap around
        if (this.x <= 0 - this.width) {
            this.reset();
        }
    }

    // reset function
    reset() {
        this.x = game.config.width;
    }
}
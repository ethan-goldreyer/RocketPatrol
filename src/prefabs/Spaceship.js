// space ship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, sort) {
        super (scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.myType = sort;
    }

    update() {
        // move ship left
        if (this.myType == 0) {
            this.x -= this.moveSpeed;
        }
        if (this.myType == 1) {
            this.x -= this.moveSpeed*2;
        }

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
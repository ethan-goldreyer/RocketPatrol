// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, player) {
      super(scene, x, y, texture, frame, player);
  
      // add object to existing scene
      scene.add.existing(this);
      this.isFiring = false;
      this.moveSpeed = 2;
      this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
      this.myPlayer = player;
    }

    update() {
        // left/right movement
        if (this.myPlayer == 1) {
            //if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <=game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        
            if (Phaser.Input.Keyboard.JustDown(keyF)) {
                if (!this.isFiring) {
                    this.isFiring = true;
                    this.sfxRocket.play();  // play sfx
                }
            }
        } 

        if (this.myPlayer == 2) {
            var mousePos = this.scene.input.activePointer;
            this.x = mousePos.x;
        
            if (!this.isFiring && this.myPlayer == 2) {
                if (mousePos.leftButtonDown()) {
                    this.isFiring = true;
                    this.sfxRocket.play();  // play sfx
                }
        
            }
        }


        //fire button
        //if (Phaser.Input.Keyboard.JustDown(keyF)) {

        // if fire, move up
        if (this.isFiring && this.y >= borderUISize*3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if (this.y <= borderUISize*3 + borderPadding) {
            this.reset();

        }
    }

    //reset to ground
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    } 
  
}
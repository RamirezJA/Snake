class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
      super(scene, x, y, key);
      this.scene = scene;
      this.scene.add.existing(this);
      this.scene.physics.world.enableBody(this, 0);
    }
  }

  class Wall extends Entity {
    constructor(scene, x, y, color) {
      super(scene, x, y, "sprTile");
      this.body.setImmovable(true);
      this.setTint(color);
      this.setOrigin(0);
    }
  }

  class Food extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, "sprTile");
      this.body.setImmovable(true);
      this.setOrigin(0);
      this.setTint(0xff0000);
    }
  }
  
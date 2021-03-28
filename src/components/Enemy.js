import Phaser from 'phaser';
import MatterEntity from "./matterEntity.js";
import enemiesPng from '../assets/images/enemies.png';
import enemiesAtlas from '../assets/images/enemies_atlas.json';
import enemiesAnimation from '../assets/images/enemies_anim.json';
import bearVoice from '../assets/sound/bear.wav'
import wolfVoice from '../assets/sound/wolf.wav'
import entVoice from '../assets/sound/ent.wav'

export default class Enemy extends MatterEntity {
  static preload(scene) {
    scene.load.atlas('enemies', enemiesPng, enemiesAtlas);
    scene.load.animation('enemies_anim', enemiesAnimation);
    scene.load.audio('bear', bearVoice);
    scene.load.audio('wolf', wolfVoice);
    scene.load.audio('ent', entVoice);

  }

  constructor(data) {
    let { scene, enemy } = data;
    let drops = JSON.parse(enemy.properties.find(p => p.name == 'drops').value);
    let health = enemy.properties.find(p => p.name == 'health').value;
    super({ scene, x: enemy.x, y: enemy.y, texture: 'enemies', frame: `${enemy.name}_idle_1`, drops, health, name: enemy.name });

    const { Body, Bodies } = Phaser.Physics.Matter.Matter;
    let enemyCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'enemyCollider' });
    let enemySensor = Bodies.circle(this.x, this.y, 80, { isSensor: true, label: 'enemySensor' });
    const compundBody = Body.create({
      parts: [enemyCollider, enemySensor],
      frictionAir: 0.35,
    });
    this.setExistingBody(compundBody);
    this.setFixedRotation();
    this.scene.matterCollision.addOnCollideStart({
      objectA: [enemySensor],
      callback: other => {
        if (other.gameObjectB && other.gameObjectB.name == 'player') {
          this.attacking = other.gameObjectB;
        }
      },
      context: this.scene,
    });
  }

  attack(target) {
    if (target.dead || this.dead) {
      clearInterval(this.attacktimer);
      return;
    }
    target.hit();
  }

  update() {
    if (this.dead) return;
    if (this.attacking) {
      let direction = this.attacking.position.subtract(this.position);
      if (direction.length() > 24) {
        let v = direction.normalize();
        this.setVelocityX(direction.x);
        this.setVelocityY(direction.y);
        if (this.attacktimer) {
          clearInterval(this.attacktimer);
          this.attacktimer = null;
        }
      }
      else {
        if (this.attacktimer == null) {
          this.attacktimer = setInterval(this.attack, 500, this.attacking);
        }
      }
    }
    this.setFlipX(this.velocity.x < 0);
    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
      this.anims.play(`${this.name}_walk`, true);
    }
    else {
      this.anims.play(`${this.name}_idle`, true);
    }

  }
}
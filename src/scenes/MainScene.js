import Enemy from '../components/Enemy';
import Player from '../components/player';
import Resource from '../components/Resource';
import mapImage from '../assets/images/RPG Nature Tileset.png';
import mapJSON from '../assets/images/map.json';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
    this.enemies = [];
  }

  preload() {
    Player.preload(this);
    Enemy.preload(this);
    Resource.preload(this);
    this.load.image('tiles', mapImage);
    this.load.tilemapTiledJSON('map', mapJSON);
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    this.map = map;
    const tileset = map.addTilesetImage('RPG Nature Tileset', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
    const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);
    layer1.setCollisionByProperty({ collides: true });
    this.matter.world.convertTilemapLayer(layer1);
    this.map.getObjectLayer('MyResources').objects.forEach((resource) => new Resource({ scene: this, resource }));
    this.map.getObjectLayer('Enemies').objects.forEach((enemy) => this.enemies.push(new Enemy({ scene: this, enemy })));
    this.player = new Player({
      scene: this, x: 100, y: 80, texture: 'male', frame: 'townsfolk_m_idle_1',
    });
    this.player.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.UP,
      down: Phaser.Input.Keyboard.KeyCodes.DOWN,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
    });
    this.score = this.add.text(10, 470, '');
  }

  update() {
    this.enemies.forEach((enemy) => enemy.update());
    this.player.update();
    this.score.setText(`SCORE:${this.player.score}`);
  }
}
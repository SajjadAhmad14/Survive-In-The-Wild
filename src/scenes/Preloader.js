import Phaser from 'phaser';
import mapImage from '../assets/images/RPG Nature Tileset.png';
import mapJSON from '../assets/images/map.json';
import playerPng from '../assets/images/male.png';
import playerAtlas from '../assets/images/male_atlas.json';
import playerAnimation from '../assets/images/male_anim.json';
import items from '../assets/images/items.png';
import enemiesPng from '../assets/images/enemies.png';
import enemiesAtlas from '../assets/images/enemies_atlas.json';
import enemiesAnimation from '../assets/images/enemies_anim.json';
import resourcesPng from '../assets/images/resources.png';
import resourcesAtlas from '../assets/images/resources_atlas.json';
import treeSound from '../assets/sound/tree.wav';
import rockSound from '../assets/sound/rock.wav';
import bushSound from '../assets/sound/bush.wav';
import bearVoice from '../assets/sound/bear.wav';
import wolfVoice from '../assets/sound/wolf.wav';
import entVoice from '../assets/sound/ent.wav';
import playerSound from '../assets/sound/player.wav';
import collectSound from '../assets/sound/pick.wav';
import backgroundSound from '../assets/sound/dark-forest.mp3';
import instructionsPng from '../assets/images/instructions.png';
import playPng from '../assets/images/play.png';
import helpPng from '../assets/images/help.png';
import scorePng from '../assets/images/score.png';
import musicOnPng from '../assets/images/music_on.png';
import musicOffPng from '../assets/images/music_off.png';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloadScene');
  }

  preload() {
    const percentage = this.add.text(100, 175, '');
    const fileloading = this.add.text(100, 190, '');
    this.load.image('tiles', mapImage);
    this.load.image('play', playPng);
    this.load.image('help', helpPng);
    this.load.image('score', scorePng);
    this.load.image('music_on', musicOnPng);
    this.load.image('music_off', musicOffPng);
    this.load.image('instructions', instructionsPng);
    this.load.tilemapTiledJSON('map', mapJSON);
    this.load.atlas('male', playerPng, playerAtlas);
    this.load.atlas('enemies', enemiesPng, enemiesAtlas);
    this.load.animation('male_anim', playerAnimation);
    this.load.animation('enemies_anim', enemiesAnimation);
    this.load.spritesheet('items', items, { frameWidth: 32, frameHeight: 32 });
    this.load.atlas('resources', resourcesPng, resourcesAtlas);
    this.load.audio('tree', treeSound);
    this.load.audio('rock', rockSound);
    this.load.audio('bush', bushSound);
    this.load.audio('pick', collectSound);
    this.load.audio('bear', bearVoice);
    this.load.audio('wolf', wolfVoice);
    this.load.audio('ent', entVoice);
    this.load.audio('background', backgroundSound);
    this.loading = this.add.graphics();
    this.load.on('progress', (progress) => {
      this.loading.fillStyle(0x0000ff, 1);
      this.loading.fillRect(100, 150, 300 * progress, 25);
      percentage.setText(`${parseInt(progress * 100)}%`);
    });
    this.load.on('fileprogress', (file) => {
      fileloading.setText(file.key);
    });
    this.load.on('complete', () => {
      percentage.destroy();
      fileloading.destroy();
      this.add.text(100, 175, 'Loading Complete.');
    });
  }

  create() {
    this.scene.start('titleScene');
  }
}
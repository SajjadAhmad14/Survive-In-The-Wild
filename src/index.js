import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';
import MainScene from './scenes/mainScene.js'
import Preloader from './scenes/preloader.js';
import Title from './scenes/title.js';
import ScoreBoard from './scenes/scoreBoard.js';
import helpScene from './scenes/helpMe.js';
import UserName from './scenes/userName.js';

const config = {
width: 515,
height: 512,
backgroundColor: '#333',
type: Phaser.AUTO,
parent: 'survival-game',
scene: [Preloader, Title, ScoreBoard, MainScene, UserName],
scale: {
  zoom: 1
},
physics: {
  default: 'matter',
  matter: {
    debug: false,
    gravity: { y: 0 }
  }
},
plugins: {
  scene: [
    {
      plugin: PhaserMatterCollisionPlugin,
      key: 'matterCollision',
      mapping: 'matterCollision'
    }
  ]
}

}
let game = new Phaser.Game(config)
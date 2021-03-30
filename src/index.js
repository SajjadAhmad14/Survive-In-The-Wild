import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';
import MainScene from './scenes/MainScene.js'
import Preloader from './scenes/Preloader.js';
import Title from './scenes/Title.js';
// import ScoreBoard from './scenes/ScoreBoard.js';
import helpMe from './scenes/helpMe.js';
import GetUserName from './scenes/getUserName.js';

const config = {
  width: 515,
  height: 512,
  backgroundColor: '#333',
  type: Phaser.AUTO,
  parent: 'survival-game',
  dom: {
    createContainer: true
},
  scene: [Preloader, Title, MainScene, GetUserName, helpMe],
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

let game = new Phaser.Game(config);

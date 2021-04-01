import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';
import MainScene from './scenes/MainScene'
import Preloader from './scenes/Preloader';
import Title from './scenes/Title';
import helpMe from './scenes/helpMe';
import GetUserName from './scenes/getUserName';
import ScoreBoard from './scenes/ScoreBoard';

const config = {
  width: 515,
  height: 512,
  backgroundColor: '#333',
  type: Phaser.AUTO,
  parent: 'survival-game',
  dom: {
    createContainer: true
},
  scene: [Preloader, Title, MainScene, GetUserName, helpMe, ScoreBoard],
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

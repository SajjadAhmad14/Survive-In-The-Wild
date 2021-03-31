import Phaser from 'phaser';
import APIHandler from '../APIs/api.js';

export default class ScoreBoard extends Phaser.Scene {
  constructor() {
    super('ScoreBoard');
  }

  create() {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6UO8hpWkneCSx6cYRvlC/scores';
    
    APIHandler.getData(url)
      .then(data => {
        this.space = 0;

        data.result.sort((a, b) => b.score - a.score).slice(0, 10).forEach((obj, index) => {
          this.add.text(
            150,
            170 + this.space,
            `${index + 1}. ${obj.user} : ${obj.score}`,
            {
              font: '19px monospace',
              fill: '#0000ff',
            },
          );
          this.space += 30;
        });
      });

    this.submit = this.add.dom(240, 100, 'button', 'padding:10px;background-color:white;', 'Go Back');

    this.btn = document.querySelector('button');
    this.btn.addEventListener('click', () => {
      this.scene.start('titleScene');
    });
  }
}
import Phaser from 'phaser';
import DataRequester from '../APIs/api.js';

export default class ScoreBoard extends Phaser.Scene {
  constructor() {
    super('scoreboard');
  }

  create() {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nJMvjp5o0e7RhCRrNWFM/scores';
    const score = JSON.parse(localStorage.getItem('score:'));
    const username = JSON.parse(localStorage.getItem('username:'));
    const obj = { 
      user: username,
      score,
    };


    DataRequester.receiveData(url)
      .then(data => {
        this.space = 0;
        data.result.sort((a, b) => b.score - a.score).slice(0, 10).forEach((userObj, index) => {
          this.add.text(
            150,
            170 + this.space,
            `${index + 1}. ${userObj.user} | ${userObj.score}`,
            {
              font: '19px monospace',
              fill: '#0000ff',
            },
          );
          this.space += 30;
        });
      });

    this.submit = this.add.dom(240, 100, 'button', 'padding:20px;background-color:gray;', 'Go Back');

    this.btn = document.querySelector('button');
    this.btn.addEventListener('click', () => {
      this.scene.start('titleScene');
    });
  }
}
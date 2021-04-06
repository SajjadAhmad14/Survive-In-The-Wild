import Phaser from 'phaser';

export default class HelpMe extends Phaser.Scene {
  constructor() {
    super('helpScene');
  }

  create() {
    this.add.image(250, 100, 'instructions');
    this.submit = this.add.dom(250, 300, 'button', 'padding:10px;background-color:white;', 'Go Back');

    this.btn = document.querySelector('button');
    this.btn.addEventListener('click', () => {
      this.scene.start('titleScene');
    });
  }
}
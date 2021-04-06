import Phaser from 'phaser';

export default class GetUserName extends Phaser.Scene {
  constructor() {
    super('getUserName');
  }

  create() {
    this.add.text(150, 100, 'Please Enter Your Name:');
    this.input = this.add.dom(250, 150, 'input', 'border-radius:-1px;');
    this.submit = this.add.dom(250, 200, 'button', 'padding:10px;background-color:white;', 'Play');
    this.btn = document.querySelector('button');
    this.btn.addEventListener('click', () => {
      this.inputValue = document.querySelector('input').value;
      if (this.inputValue == null || this.inputValue === '') {
        alert('Player name should be valid!');
      } else {
        localStorage.setItem('username:', JSON.stringify(this.inputValue));
        this.scene.start('MainScene');
      }
    });
  }

  update() { } // eslint-disable-line
}
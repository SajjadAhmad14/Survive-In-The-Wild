/* eslint-disable no-undef */
import Preloader from '../src/scenes/Preloader';

test('Preloader is a subclass of Phaser.Scene', () => {
  expect(Preloader).toBeSubclassOf(Phaser.Scene);
});
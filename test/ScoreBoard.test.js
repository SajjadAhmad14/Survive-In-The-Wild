/* eslint-disable no-undef */

import ScoreBoard from '../src/scenes/ScoreBoard';

test('ScoreBoard is a subclass of Phaser.Scene', () => {
  expect(ScoreBoard).toBeSubclassOf(Phaser.Scene);
});
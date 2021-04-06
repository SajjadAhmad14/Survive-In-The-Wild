import Phaser from 'phaser';
import Enemy from '../src/components/Enemy';

test('Enemy is a subclass of MatterEntity', () => {
  expect(Enemy).toBeSubclassOf(Phaser.Physics.Matter.Sprite);
});
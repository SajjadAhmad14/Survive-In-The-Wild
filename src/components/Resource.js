import Phaser from 'phaser';
import MatterEntity from './matterEntity';
import treeSound from '../assets/sound/tree.wav';
import rockSound from '../assets/sound/rock.wav';
import bushSound from '../assets/sound/bush.wav';
import collectSound from '../assets/sound/pick.wav';
import resourcesPng from '../assets/images/resources.png';
import resourceAtlas from '../assets/images/resources_atlas.json';

export default class Resource extends MatterEntity {
  static preload(scene) {
    scene.load.atlas('resources', resourcesPng, resourceAtlas);
    scene.load.audio('tree', treeSound);
    scene.load.audio('rock', rockSound);
    scene.load.audio('bush', bushSound);
    scene.load.audio('pick', collectSound);
  }

  constructor(data) {
    const { scene, resource } = data;
    const drops = JSON.parse(resource.properties.find((p) => p.name === 'drops').value);
    const depth = resource.properties.find((p) => p.name === 'depth').value;
    super({
      scene, x: resource.x, y: resource.y, texture: 'resources', frame: resource.type, drops, depth, health: 5, name: resource.type,
    });
    const yOrigin = resource.properties.find((p) => p.name === 'yOrigin').value;
    this.y += this.height * (yOrigin - 0.5);
    const { Bodies } = Phaser.Physics.Matter.Matter;
    const circleCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'collider' });
    this.setExistingBody(circleCollider);
    this.setStatic(true);
    this.setOrigin(0.5, yOrigin);
  }
}
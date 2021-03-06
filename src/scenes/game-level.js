import { Scene } from '../scene';
import { SpriteSheet } from '../sprite-sheet';
import { CharacterSheet } from '../character-sheet';
import { Player } from '../player';
import { Camera } from '../camera';
import { Collider } from '../collider';

export class GameLevel extends Scene {
  constructor(game) {
    super(game);
    this.tiles = new SpriteSheet({ //лист стпрайта нашей картинки 
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    this.tree = this.tiles.getSprite(7);
    this.tree.setXY(10, 10);
    this.orcTiles = new CharacterSheet({ imageName: "orc" });
    this.orc = this.orcTiles.getAnimation("stab_down");
    this.orc.setXY(100, 10);

    this.player = new Player(this.game.control);
    this.player.x = 100;
    this.player.y = 100;

    this.collider = new Collider();
  }

  init() {
    super.init();
    const mapData = require('../maps/level1.json');
    this.map = this.game.screen.createMap("level1", mapData, this.tiles);
    this.mainCamera = new Camera({
      width: this.game.screen.width,
      height: this.game.screen.height,
      limitX: this.map.width - this.game.screen.width,
      limitY: this.map.height - this.game.screen.height
    });
    this.mainCamera.watch(this.player);
    this.game.screen.setCamera(this.mainCamera);

    this.collider.addStaticShapes(mapData);
    this.collider.addKinematicBody(this.player);
  }

  update(time) {
    this.orc.update(time);
    this.player.update(time);
    this.collider.update(time);
    this.mainCamera.update(time);
  }

  render(time) {
    this.update(time);
    this.game.screen.fill('#000000');
    this.game.screen.drawSprite(this.map);
    //this.game.screen.drawSprite(this.tree);
    this.game.screen.drawSprite(this.orc);
    this.game.screen.drawSprite(this.player.view);
    super.render(time);
  }
}
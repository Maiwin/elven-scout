import { Scene } from '../scene';

export class Loading extends Scene {
  constructor(game) {
    super(game);
    this.nextScene = "menu";
  }

  init() {
     super.init();
     this.loadedAt = 0; 
  }

  update(time) { //зажержка между сцен для загрузки графики   
    if(this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
      this.loadedAt = true;
    }
    if(this.loadedAt != 0 && (time - this.loadedAt) > 500) {
      this.finish(Scene.LOADED);
    }
  }

  render(time) {
    this.update(time);
    this.game.screen.fill("#000000");
    this.game.screen.print(50,70,"Загрузка...");
    super.render(time);
  }
}
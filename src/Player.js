import { Body } from "./body";

export class Player extends Body {
  //в конструктоор передаем управление клавиатурой 
  constructor(control) { 
    super({imageName: "player", speed: 50});
    this.control = control;
  }

  //управление персонажем
  update(time) {
    if(this.control.up) {
      this.walk("up");
    } else if(this.control.down) {
      this.walk("down");
    } else if(this.control.left) {
      this.walk("left");
    } else if(this.control.right) {
      this.walk("right");
    } else {
      this.stand(this.velocity.direction);
    }

    super.update(time);
  }
}

import { Vector } from "./vector";
import { CharacterSheet } from "./character-sheet";

export class Body {
  constructor({imageName, speed}) {
    this.x = 0;                              //положение нашего объекта
    this.y = 0;                              //положение нашего объекта
    this.speed = speed;                     //скорость премежения 
    this.velocity = new Vector("down", 0);  //вектор перемещения
    this.lastTime = 0;                      //время посленего кадра 
    this.animations = {};                    //контейнер для хранения анимаций 

    //анимация ходьбы для всех героев
    const animationSheet = new CharacterSheet({imageName: imageName});
    "walk_down,walk_up,walk_left,walk_right".split(",").forEach(name => {
      this.animations[name] = animationSheet.getAnimation(name);
    });
    this.stand("down");                        //положение по умолчанию 
  }

  //ходьба, текущую анимацию хранить во view 
  walk(direction) {
    this.velocity.setDirection(direction, this.speed); //задали скорость 
    this.view = this.animations["walk_" + direction]; // выбрали анимацию 
    this.view.run;                                   // запустили её
  }

  //что бы персонаж стоял на месте обнулили скорость и остновили анимацию
  stand(direction) {
    this.velocity.setDirection(direction, 0);
    this.view = this.animations["walk_" + direction];
    this.view.stop();
  }

  update(time) {
    if(this.lastTime == 0) {
      this.lastTime = time;
      return;
    }

    //считаем перемещение, скорость делим на 1000, координаты для анимаций 
    this.x += ( time - this.lastTime) * (this.velocity.x / 1000);
    this.y += ( time - this.lastTime) * (this.velocity.y / 1000);
    this.lastTime = true;
    this.view.setXY(Math.trunc(this.x),Math.trunc(this.y));
    this.view.update(time);
  }
}
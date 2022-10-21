import Model from "../models/model";
import View from "../views/view";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();

    this.view.playEvent.addListener((move) => {
      this.model.play(move);
    });

    this.model.updateCellEvent.addListener((data) => {
      this.view.updateCell(data);
    });
    this.model.victoryEvent.addListener((winner) => {
      this.view.victory(winner);
    });
    this.model.drawEvent.addListener(() => {
      this.view.draw();
    });
  }

  run() {
    this.view.render();
  }
}

export default Controller;

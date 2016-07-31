import template from './game.html';

/* ngInject */
class GameController {
    constructor(GameService) {
        this.GameService = GameService;
        this._game = this.GameService.active;
    }

    get game() { return this._game; }
}

export const GameComponent = {
    name: 'game',
    controller: GameController,
    template,
};

declare function require(module: string): any;

class GameController {
    private parent: any;

    $onInit() {
        // If the game is paused when entering the component, resume it.
        if (this.game.isPaused) {
            this.game.resume();
        }
    }

    get game() { return this.parent.game; }
}

export const GameComponent = {
    name: 'boomjsGame',
    controller: GameController,
    require: {
        parent: '^boomjsApp',
    },
    template: require('./game.html'),
};
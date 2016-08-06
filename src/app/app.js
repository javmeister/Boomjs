// Import the styles
import '../index.scss';

// Import angular
import angular from 'angular';

// Import uiRouter
import uiRouter from 'angular-ui-router';

// Import Angular config files
import Config from './config';
import Run from './run';

// Import main App Component
import { AppComponent } from './components/app/app.component';

// Import Components
import { HomeComponent } from './components/home/home.component';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';
import { GameComponent } from './components/game/game.component';

// Import Services
import GameService from './services/game.service';
import StatsService from './services/stats.service';

// Import Model Factories
import Guid from './models/guid.model';
import Game from './models/game.model';
import Board from './models/board.model';
import Tile from './models/tile.model';

// Declare the angular app name
const appName = 'com.javierlerones.minesweeper';

// Set up the angular app object with its dependencies
const app = angular.module(appName, [
    uiRouter,
]);

// Configure the Angular App
app.config(Config);
app.run(Run);

// Main app component
app.component(AppComponent.name, AppComponent);

// Components
app.component(HomeComponent.name, HomeComponent);
app.component(BoardComponent.name, BoardComponent);
app.component(TileComponent.name, TileComponent);
app.component(GameComponent.name, GameComponent);

// Services
app.service(GameService.name, GameService);
app.service(StatsService.name, StatsService);

// Models
app.factory('Game', Game);
app.factory('Guid', Guid);
app.factory('Tile', Tile);
app.factory('Board', Board);

// Bootstrap the Angular app when the document is ready
angular.element(document).ready(() => {
    angular.bootstrap(document, [appName]);
});

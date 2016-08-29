// Import the styles
import '../index.scss';

// Import angular
import angular from 'angular';

// Import firebase stuff
import firebase from 'firebase'; // eslint-disable-line no-unused-vars
import angularfire from 'angularfire';

// Import uiRouter
import uiRouter from 'angular-ui-router';

// Import Angular MAterial
import ngMaterial from 'angular-material';

// Import Angular config files
import Config from './config';
import Run from './run';

// Import main App Component
import { AppComponent } from './components/app/app.component';

// Import Components
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MeComponent } from './components/me/me.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';
import { GameComponent } from './components/game/game.component';
import { SuccessComponent } from './components/success/success.component';
import { DefeatComponent } from './components/defeat/defeat.component';
import { MyGamesComponent } from './components/my-games/my-games.component';
import { GameStatsComponent } from './components/game-stats/game-stats.component';
import { FlagCountComponent } from './components/flag-count/flag-count.component';
import { GameTimerComponent } from './components/game-timer/game-timer.component';
import { NewGameButtonComponent } from './components/new-game-button/new-game-button.component';
import { FireworksComponent } from './components/fireworks/fireworks.component';
import { SigninComponent } from './components/signin/signin.component';

// Import Services
import LogService from './services/log.service';
import GameService from './services/game.service';
import UtilsService from './services/utils.service';

// Import Filters
import StartFromFilter from './filters/startfrom.filter';

// Import Model Factories
import Game from './models/game.model';
import Board from './models/board.model';
import Tile from './models/tile.model';

// Declare the angular app name
const appName = 'com.javierlerones.boomjs';

// Set up the angular app object with its dependencies
const app = angular.module(appName, [uiRouter, ngMaterial]);

// Configure the Angular App
app.config(Config);
app.run(Run);

// Main app component
app.component(AppComponent.name, AppComponent);

// Components
app.component(HomeComponent.name, HomeComponent);
app.component(MeComponent.name, MeComponent);
app.component(HeaderComponent.name, HeaderComponent);
app.component(SidenavComponent.name, SidenavComponent);
app.component(BoardComponent.name, BoardComponent);
app.component(TileComponent.name, TileComponent);
app.component(GameComponent.name, GameComponent);
app.component(SuccessComponent.name, SuccessComponent);
app.component(DefeatComponent.name, DefeatComponent);
app.component(MyGamesComponent.name, MyGamesComponent);
app.component(GameStatsComponent.name, GameStatsComponent);
app.component(FlagCountComponent.name, FlagCountComponent);
app.component(GameTimerComponent.name, GameTimerComponent);
app.component(NewGameButtonComponent.name, NewGameButtonComponent);
app.component(FireworksComponent.name, FireworksComponent);
app.component(SigninComponent.name, SigninComponent);

// Services
app.service(LogService.name, LogService);
app.service(GameService.name, GameService);
app.service(UtilsService.name, UtilsService);

// Filters
app.filter(StartFromFilter.name, StartFromFilter.filter);

// Models
app.factory('Game', Game);
app.factory('Tile', Tile);
app.factory('Board', Board);

// Constants
app.constant('environment', 'dev');

// Bootstrap the Angular app when the document is readyeslint
angular.element(document).ready(() => {
    angular.bootstrap(document, [appName]);
});

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyAbzHwkEl8UBu6A42XzfN_WmietUOc5AXE',
    authDomain: 'boomjs-5abad.firebaseapp.com',
    databaseURL: 'https://boomjs-5abad.firebaseio.com',
    storageBucket: 'boomjs-5abad.appspot.com',
};
firebase.initializeApp(config);

// import CSS styles
import './style.css';
import profile from './profilepic.jpeg';
import createCard from './card.js';
import todo from './todo.png';
import battleship from './battleship.png';
import wthr from './wthr.png';
import tictactoe from './tictactoe.png';
import calculator from './calculator.png';

const profilePic = new Image();
profilePic.src = profile;

const todoThumb = new Image();
todoThumb.src = todo;

const battleshipThumb = new Image();
battleshipThumb.src = battleship;

const wthrThumb = new Image();
wthrThumb.src = wthr;

const tictactoeThumb = new Image();
tictactoeThumb.src = tictactoe;

const calculatorThumb = new Image();
calculatorThumb.src = calculator;

const grid = document.querySelector('.grid');

document.querySelector('.headshot').appendChild(profilePic);

// create project cards
grid.appendChild(createCard(todoThumb, 'To-Do', 'A simple to do app similar to the Microsoft to-do website.', 'https://github.com/benl12337/todo2', 'https://youtube.com'));
grid.appendChild(createCard(battleshipThumb, 'Battleship', 'A simple turn-based web version of the classic Battleship game.', 'https://github.com/benl12337/todo2', 'https://youtube.com'));
grid.appendChild(createCard(wthrThumb, 'WTHR.', 'A simple weather app built on the the weather API.', 'https://github.com/benl12337/todo2', 'https://youtube.com'));
grid.appendChild(createCard(tictactoeThumb, 'Tic-Tac-Toe', 'A simple turn-based web version of the classic Tic Tac Toe game.', 'https://github.com/benl12337/todo2', 'https://youtube.com'));
grid.appendChild(createCard(calculatorThumb, 'Calculator', 'A calculator in the style of the IOS calculator app.', 'https://github.com/benl12337/todo2', 'https://youtube.com'));
# John ~~Conway~~ Forster's Game of Life
An implementation of [Conway's game of life](https://en.wikipedia.org/wiki/Conway's_game_of_life) in Javascript
and React, by John Forster as part of the Makers' Academy course. This was my first solo project in React, and was written in two days.

## The rules
The game consists of a grid of cells, which can be either alive or dead. After setting up the initial state,
the next turn can be calculated by following a set of rules:
1. An alive cell stays alive if it has 2 or 3 alive neighbours (adjacent in the 8 cardinal directions)
2. An alive cell dies if it has fewer than 2 alive neighbours (as if by starvation)
3. An alive cell dies if it has 4 or more alive neighbours (as if by overcrowding)
4. A dead cell comes to life if it has exactly 3 neighbours (as if by reproduction)

## How to use this project
1. Clone this repo.
2. Navigate to the directory and run `npm install` (requires node to be installed)
3. Run `npm start`
4. Visit http://localhost:3000

*Note:* the size of the generated grid can be changed by altering the constants at the top of the App.js file.

## Technologies
The UI is written in react, where the grid is made up of button elements, allowing the user to easily set up
the initial state.

The logic behind the cells is written in pure javascript.

## Limitations
Using buttons as cells has a number of advantages and drawbacks. It allows quick and easy setup of the initial
state, and was quick and easy to program. However, this leads to a very large number of elements on screen,
and so at grid sizes larger than ~100x50, significant slowdown occurs.

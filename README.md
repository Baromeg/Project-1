# Project-1 - Frogger The Game
## Overview

I decided to build the game Frogger as my very first independently made Project as part of the Software Engineering Immersive course at General Assembly.

I was tasked to choose from a set of grid-based game and develop a fully functional game, putting in practice all the concepts learned in this first part of the course.

The main objective of the game is to guide the frog to the safety of a lily leave, avoiding the moving obstacles of a dangerously busy road and a strong current river.

## Brief:
- Render a game in the browser
- Design logic for winning & visually display which player won
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use Javascript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML and CSS (adhere to best practices)
- For this project "Frogger" has specific requirements
    - The game should be playable for one player.
    - The obstacles should be auto-generated.

Technologies Used:

* HTML5
* CSS
* JavaScript (ES6)
* Git
* GitHub
* Google Fonts

## Approach taken:
### - Grid layout:
The grid was created in JavaScript using a for loop based on the desired width, created a div per cell and appended it to the grid container, correctly position in a square grid using Flexbox in CSS. This allows a much easier resizing if necessary in a later stage.

```
for (let index = 0; index < width ** 2; index++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  // div.innerHTML = index /*Adds index to each cell if necessary*/
  cells.push(div)
}
```
The different sections of the game (grass, roads and rivers) as well as moving parts (cars, water, logs, lily leaves) were positioned in the grid by defining their initial index in an array., using intervals to create the notion of movement.

```
const grass = [9, 10, 11, 12, 13, 14, 15, 16, 17, 36, 37, 38, 39, 40, 41, 42, 43, 44, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80]
// Grass
grass.forEach((grass) => {
  cells[grass].classList.add('grass')
})
[...]
```


### Functionality:
### - Frog Movement:
The game can be played by pressing the keyboard arrows, as well as the ASDW keys, using an event listener to move the frog across the grid. The frog original position is changed +/- width for up and down movement and +/- 1 for left and right.

```
  // Arrow Up
  if (key === 'ArrowUp' && !(frog < width)) {
    if (cells[frog].classList.contains('lilyLeave')) {
      cells[frog].classList.add('frogWins')
    }
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    cells[frog].classList.remove('frogTop')
    cells[frog].classList.remove('frogBottom')

    frog -= width
    cells[frog].classList.add('frog')
    [...]
```

### - Moving obstacles

Each row of obstacles are moving independently, some towards the right or the left, using `setInterval()` and `forEach()` methods per row to give the moving effect. The most challenging moving part was the logs in the water, as they were meant to carry the frog safely, in this case, the water was the obstacle. 

To achieve this, I added in the same interval, the `forEach()` for the array of water and the array of logs, alternating positions, to ensure they move at the same pace. 

* If the frog jumps on top of the logs, it will be carried with the log until reaching the edge
* In this example, the interval will reset the position of the moving parts once they reach the edge of the grid.
* The interval also will detect collisions, either by the frog falling to the water or remaining in the log when it reaches the edge, using the statement `if`, populating a message with specific collision, that will be displayed in the alert.


```
//Trunks and water moving independently to the left
setInterval(() => {
  //Movement of water
  waterBottom.forEach((water1, i) => {
    if (frog === water1) {
      deadStopGame('You drowned!')
    } if (water1 === 27) {
      cells[water1].classList.remove('water')
      waterBottom[i] = 35
    } else {
      cells[water1].classList.remove('water')
      waterBottom[i] -= 1
      water1 -= 1
      cells[water1].classList.add('water')
    }
  })
  //Movement of trunks
  trunksArrayLeft.forEach((element, i) => {
    if (frog === element) {
      if (element === 27) {
        cells[element].classList.add('trunks')
        trunksArrayLeft[i] = 35
        cells[element].classList.remove('frogWater')
        deadStopGame('You did not jump in time and drowned!')
      } else {
        cells[element].classList.remove('frog')
        cells[element].classList.remove('frogWater')
        frog -= 1
        trunksArrayLeft[i] -= 1
        element -= 1
        cells[element].classList.add('frogWater')
      }
    } else if (element === 27) {
      cells[element].classList.remove('frogWater')
      cells[element].classList.remove('trunks')
      trunksArrayLeft[i] = 35
    } else {
      cells[element].classList.remove('trunks')
      trunksArrayLeft[i] -= 1
      element -= 1
      cells[element].classList.add('trunks')
      cells[element].classList.remove('frogWater')
    }
  })
}, 1000)
[...]
```

### The crocodile feature

This was added as an enhancement of the game, using the `Math.random()` method, that randomly places the biting crocodile across the grass.

```
//* Generates a random index to place the crocodile across the array of grass
setInterval(() => {
  if (cells[frog].classList.contains('crocodile')) {
    cells[frog].classList.remove('frogGrass')
    deadStopGame('A crocodile ate you!')
  }
  cells[crocodilePosition].classList.remove('crocodile')
  crocodilePosition = grass[Math.floor(Math.random() * grass.length)]
  cells[crocodilePosition].classList.add('crocodile')
}, 1000)
```

### Winning or Losing
When the frog is hit by an obstacle, either by a car, falling in the water or bitten by the crocodile, a function will be called that removes 1 life from the counter and resets the frog's position to the starting point.

When the player loses the 3 lives, the game will prompt a `confirm` message to restart the game

The player will win when reaches the lily leave and reach the edge of the river. A function will then add up 50 points to the counter and will ask the player if would like to play again.

```
const deadStopGame = (message) => {
  if (displayLives.innerHTML <= 1) {
    confirm(`${message}.You lost all your lives. Would you like to play again?`)
    startGame()
  } else {
    alert(`${message}.You lost one life. Try again!'`)
    displayLives.innerHTML -= 1
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogBottom')

    frog = 76
    cells[frog].classList.add('frog')
  }
}
```

## Screenshots
![Game layout](/images/Screenshot.png)

## Potential Future Features
- Mobile Compatability
- Different difficulty levels
- High score board with `localStorage`

## Challenges
* Working with background pictures meant that the frog have different backgrounds to swap along with the section it found itself in, this was fixed by removing all frog skins within the keyboard event listener
* When generating the movement of the logs and the water, I had to place the water at the beginning of the interval, as the last part of the log would pop as a drowned otherwise

## Lessons learned
- Working on this game has allowed me to understand better the hierarchy of the elements, as in many cases, the solution was in placing the elements in the correct order.
- The project has also help me process transition from very lengthy coding to spotting repetition and simplifying the code.
//* DOM Elements
const displayScore = document.querySelector('#displayScore')
const displayLives = document.querySelector('#displayLives')
const startButton = document.querySelector('.startButton')
const grid = document.querySelector('.grid')
const cell = document.querySelector('.cell')
const frogStyle = document.querySelector('.frog')
const lilyLeave = document.querySelector('.lilyLeave')
const water = document.querySelector('.water')
const cars = document.querySelector('.cars')
const trunks = document.querySelector('.trunks')
const grass = document.querySelector('.grass')

const cells = []
const width = 9

//*Array/Locations of items in the grid
const trunksArrayRight = [24, 23, 20, 19, 18]
const trunksArrayLeft = [27, 28, 29, 32, 33]
const waterTop = [26, 25, 22, 21]
const waterBottom = [30, 31, 34, 35]
const carsArrayRight = [53, 50, 47]
const carsArrayLeft = [61, 58, 55]
const topRoad = [45, 46, 47, 48, 49, 50, 51, 52, 53]
const bottomRoad = [54, 55, 56, 57, 58, 59, 60, 61, 62]
const lilyLeavePosition = [0, 2, 4, 6, 8]
const waterFront = [0, 1, 3, 5, 7]
const crocodile = [9, 10, 11, 12, 13, 14, 15, 16, 17, 36, 37, 38, 39, 40, 41, 42, 43, 44, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80]

let frog = 76
let crocodilePosition = 67

//* Creates the grid based on the width
for (let index = 0; index < width ** 2; index++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  // div.innerHTML = index /*Adds index to each cell*/
  cells.push(div)
}

//* Fixed position of items
cells[frog].classList.add('frogGrass')
cells[76].classList.add('grass')
cells[18].classList.add('water18')
cells[35].classList.add('water18')
cells[8].classList.add('water18')
cells[80].classList.add('cell81')

//* Start of the game / reset frog position. Could be improved resetting the board
startButton.addEventListener('click', () => {
  cells[frog].classList.remove('frog')
  cells[frog].classList.remove('frogGrass')
  cells[frog].classList.remove('frogWater')
  frog = 76
  cells[frog].classList.add('frog')
  startGame()

})




//* Event listener to the arrows of the keybord to control the movement of the frog
document.addEventListener('keydown', (event) => {
  const key = event.key
  console.log(key)

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

    //Arrow Down
  } else if (key === 'ArrowDown' && !(frog > (width ** 2) - width - 1)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    frog += width
    cells[frog].classList.add('frog')

    //Arrow Left
  } else if (key === 'ArrowLeft' && !(frog % width === 0)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    frog -= 1
    cells[frog].classList.add('frog')

    //Arrow Right
  } else if (key === 'ArrowRight' && !(frog % width === width - 1)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    frog += 1
    cells[frog].classList.add('frog')
  }
  if (key === 'w' && !(frog < width)) {
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

    //Arrow Down
  } else if (key === 's' && !(frog > (width ** 2) - width - 1)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    frog += width
    cells[frog].classList.add('frog')

    //Arrow Left
  } else if (key === 'a' && !(frog % width === 0)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    frog -= 1
    cells[frog].classList.add('frog')

    //Arrow Right
  } else if (key === 'd' && !(frog % width === width - 1)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    frog += 1
    cells[frog].classList.add('frog')
  }
})

//* Layout of fixed items
//*The items are placed based on their arrays
// Grass
crocodile.forEach((grass) => {
  cells[grass].classList.add('grass')
})
// Top and bottom road
topRoad.forEach((tile) => {
  cells[tile].classList.add('top-road')
})
bottomRoad.forEach((tile) => {
  cells[tile].classList.add('bottom-road')
})

//* Intervals to create the movement of items in the grid
//Cars moving to the left
setInterval(() => {
  carsArrayLeft.forEach((element, i) => {
    if (frog === element) {
      deadStopGame('A car run over you!')
    } else if ((element === 54)) {
      cells[element].classList.remove('cars')
      carsArrayLeft[i] = 62
    } else {
      cells[element].classList.remove('cars')
      carsArrayLeft[i] -= 1
      element -= 1
      cells[element].classList.add('cars')
    }
  })
}, 800)

//Cars moving to the right
setInterval(() => {
  carsArrayRight.forEach((element, i) => {
    if (frog === element) {
      deadStopGame('A car run over you!')
    } else if ((element === 53)) {
      cells[element].classList.remove('cars2')
      carsArrayRight[i] = 45
    } else {
      cells[element].classList.remove('cars2')
      carsArrayRight[i] += 1
      element += 1
      cells[element].classList.add('cars2')
    }
  })
}, 400)

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
}, 600)

//Trunks and water moving independently to the left
setInterval(() => {
  //Movement of water
  waterTop.forEach((element, i) => {
    if (frog === element) {
      deadStopGame('You drowned!')
    } if (element === 26) {
      cells[element].classList.remove('water')
      waterTop[i] = 18
    } else {
      cells[element].classList.remove('water')
      waterTop[i] += 1
      element += 1
      cells[element].classList.add('water')
    }
  })

  //Movement of trunks
  trunksArrayRight.forEach((element, i) => {
    if (frog === element) {
      if (element === 26) {
        cells[element].classList.add('trunks')
        trunksArrayRight[i] = 18
        cells[element].classList.remove('frogWater')
        deadStopGame('You did not jump in time and drowned!')
      } else {
        cells[element].classList.remove('frog')
        cells[element].classList.remove('frogWater')
        frog += 1
        trunksArrayRight[i] += 1
        element += 1
        cells[element].classList.add('frogWater')
      }
    } else if (element === 26) {
      cells[element].classList.remove('frogWater')
      cells[element].classList.remove('trunks')
      trunksArrayRight[i] = 18
    } else {
      cells[element].classList.remove('trunks')
      trunksArrayRight[i] += 1
      element += 1
      cells[element].classList.add('trunks')
      cells[element].classList.remove('frogWater')
    }
  })
}, 400)

setInterval(() => {
  if (cells[frog].classList.contains('grass')) {
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogTop')
    cells[frog].classList.add('frogGrass')
  }

}, 100)

setInterval(() => {

  if (cells[frog].classList.contains('bottom-road')) {
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    cells[frog].classList.add('frogBottom')
  }

}, 100)

setInterval(() => {
  if (cells[frog].classList.contains('top-road')) {
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogBottom')
    cells[frog].classList.add('frogTop')
  }
}, 100)

//Movement of the top row with water and lilies
setInterval(() => {
  // Movement of water
  waterFront.forEach((water2, i) => {
    if (frog === water2) {
      deadStopGame('You drowned!')
    } if (water2 === 0) {
      cells[water2].classList.remove('water')
      waterFront[i] = 8
    } else {
      cells[water2].classList.remove('water')
      waterFront[i] -= 1
      water2 -= 1
      cells[water2].classList.add('water')
    }
  })
  // Movement of Lilies
  lilyLeavePosition.forEach((element, i) => {
    if (frog === element) {
      //Winner message when the frog reaches the lily leave
      //Could be improved if the player is unable to move the frog. As it wins when the frog reaches cell 0.
      if (element === 0) {
        cells[element].classList.add('lilyLeave')
        lilyLeavePosition[i] = 8
        displayScore.innerHTML = Number(displayScore.innerHTML) + 50
        confirm('You win! Do you want to play again?')
        cells[frog].classList.add('lilyLeave')
        startGame()
      } else {
        cells[element].classList.remove('frog')
        cells[element].classList.remove('frogWater')
        cells[element].classList.remove('frogWins')
        frog -= 1
        lilyLeavePosition[i] -= 1
        element -= 1
        cells[element].classList.add('frogWins')
      }
    } else if (element === 0) {
      // cells[element].classList.remove('frogWater')
      cells[element].classList.remove('lilyLeave')
      lilyLeavePosition[i] = 8
    } else {
      cells[element].classList.remove('lilyLeave')
      lilyLeavePosition[i] -= 1
      element -= 1
      cells[element].classList.add('lilyLeave')
    }
  })
}, 600)

//* Generates a random index to place the crocodile across the array of grass
setInterval(() => {
  if (cells[frog].classList.contains('crocodile')) {
    cells[frog].classList.remove('frogGrass')
    deadStopGame('A crocodile ate you!')
  }
  cells[crocodilePosition].classList.remove('crocodile')
  crocodilePosition = crocodile[Math.floor(Math.random() * crocodile.length)]
  cells[crocodilePosition].classList.add('crocodile')
}, 1000)

//Start function that places the frog in the starting position.
//Can be improved by resetting the lives and score better
const startGame = () => {
  cells[frog].classList.remove('frog')
  cells[frog].classList.remove('frogWins')
  frog = 76
  cells[frog].classList.add('frog')
  displayLives.innerHTML = 3
  // displayScore.innerHTML = 0
}

//When the player loses, a life is taken and the frog is placed in the starting position
const deadStopGame = (message) => {
  if (displayLives.innerHTML <= 1) {
    confirm(`${message}.You lost all your lives. Would you like to play again?`)
    startGame()
  } else {
    alert(`${message}.You lost one life. Try again!'`)
    displayLives.innerHTML -= 1
    cells[frog].classList.remove('frog')
    frog = 76
    cells[frog].classList.add('frog')
  }
}

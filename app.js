const displayScore = document.querySelector('#displayScore')
// let score = 0
displayScore.innerHTML = Number(displayScore.innerHTML)
const displayLives = document.querySelector('#displayLives')

const startButton = document.querySelector('.startButton')

const grid = document.querySelector('.grid')

const cell = document.querySelector('.cell')
const cells = []
const width = 9

const frogStyle = document.querySelector('.frog')
const lilyLeave = document.querySelector('.lilyLeave')
const water = document.querySelector('.water')
const cars = document.querySelector('.cars')
const trunks = document.querySelector('.trunks')
const trunks2 = document.querySelector('.trunks2')
const trunks3 = document.querySelector('.trunks3')
const grass = document.querySelector('.grass')

// const trunksArray = [30, 29, 28, 24, 23, 22, 20, 19, 18]
const trunksArrayRight = [24, 23, 20, 19, 18]
const trunksArrayLeft = [27, 28, 29, 32, 33]


const waterTop = [26, 25, 22, 21]
const waterBottom = [30, 31, 34, 35]
const carsArrayRight = [53, 50, 47]
const carsArrayLeft = [61, 58, 55]
const topRoad = [45, 46, 47, 48, 49, 50, 51, 52, 53]
const bottomRoad = [54, 55, 56, 57, 58, 59, 60, 61, 62]

const crocodile = [9, 10, 11, 12, 13, 14, 15, 16, 17, 36, 37, 38, 39, 40, 41, 42, 43, 44, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80]

// cells[18].classList.add('water')

let frog = 76
let crocodilePosition = 67
const lilyLeavePosition = [0, 1, 3, 5, 7]
const waterFront = [0, 2, 4, 6, 8]
// let carsPosition1 = 8
// let carsPosition2 = 0
// let carsPosition3 = 5



//* Creates the grid based on the width
for (let index = 0; index < width ** 2; index++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  // div.innerHTML = index
  cells.push(div)
}

//* Initial position of the frog
cells[frog].classList.add('frogGrass')
cells[76].classList.add('grass')
cells[18].classList.add('water18')
cells[35].classList.add('water18')
cells[8].classList.add('water18')
cells[80].classList.add('cell81')

//* Start of the game / reset frog position
startButton.addEventListener('click', () => {
  cells[frog].classList.remove('frog')
  cells[frog].classList.remove('frogGrass')
  cells[frog].classList.remove('frogWater')


  frog = 76
  cells[frog].classList.add('frog')
  startGame()

})



// waterFront.forEach((waterPosition) => {

//   cells[waterPosition].classList.add('water')



// })
//* Initial position of the lilyleaves
// lilyLeavePosition.forEach((lily) => {

//   cells[lily].classList.add('lilyLeave')
//   cells[lily].classList.remove('water')
// })

crocodile.forEach((grass) => {
  cells[grass].classList.add('grass')
})


//* Creates the movement of the frog
document.addEventListener('keydown', (event) => {
  const key = event.key
  console.log(key)
  if (key === 'ArrowUp' && !(frog < width)) {
    if (cells[frog].classList.contains('lilyLeave')) {
      cells[frog].classList.remove('lilyLeave')
      cells[frog].classList.remove('frog')
      cells[frog].classList.add('frogWins')

    }

    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    frog -= width
    cells[frog].classList.add('frog')
  } else if (key === 'ArrowDown' && !(frog > (width ** 2) - width - 1)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    frog += width
    cells[frog].classList.add('frog')
  } else if (key === 'ArrowLeft' && !(frog % width === 0)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')
    frog -= 1
    cells[frog].classList.add('frog')
  } else if (key === 'ArrowRight' && !(frog % width === width - 1)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    cells[frog].classList.remove('frogGrass')

    frog += 1
    cells[frog].classList.add('frog')
  }
})

//! Movement of the cars
//*Created individual arrays for each car to loop through
// const firstCarArray = cells.slice(54, 63)
// firstCarArray[carsPosition1].classList.add('cars')

topRoad.forEach((element, i) => {
  cells[element].classList.add('top-road')
})

bottomRoad.forEach((element, i) => {
  cells[element].classList.add('bottom-road')
})

cells[crocodilePosition].classList.remove('crocodile')
crocodilePosition = crocodile[Math.floor(Math.random() * crocodile.length)]

cells[crocodilePosition].classList.add('crocodile')

// const secondCarArray = cells.slice(45, 54)
// secondCarArray[carsPosition2].classList.add('cars2')

// for (let index = 0; index < secondCarArray.length; index++) {
//   secondCarArray[index].classList.add('road')

// }

// // const thirdCarArray = cells.slice(36, 45)
// firstCarArray[carsPosition3].classList.add('cars')

//* Each car has it's own interval to avoid conflicts in the loops
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
      // cells[element].classList.remove('frogWater')

    }
  })
}, 800)

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
      // cells[element].classList.remove('frogWater')

    }
  })
}, 400)

// setInterval(() => {
//   if ((carsPosition2 % width === width - 1)) {
//     secondCarArray[carsPosition2].classList.remove('cars2')
//     carsPosition2 = 0
//     secondCarArray[carsPosition2].classList.add('cars2')
//   }
//   if (secondCarArray[carsPosition2].classList.contains('frog')) {
//     deadStopGame('A car run over you!')
//   }
//   carCycle2()
// }, 500)

// setInterval(() => {
//   if ((carsPosition3 % width === 0)) {
//     firstCarArray[carsPosition3].classList.remove('cars')
//     carsPosition3 = 5
//     firstCarArray[carsPosition3].classList.add('cars')
//   }
//   if (firstCarArray[carsPosition3].classList.contains('frog')) {
//     deadStopGame('A car run over you!')
//   }
//   carCycle3()
// }, 800)

//*Each car has it's own function, as when I created a function which you could input (array, position) came up as undefined, I believe it was because of the -= operation
// const carCycle1 = () => {
//   firstCarArray[carsPosition1].classList.remove('cars')
//   carsPosition1 -= 1
//   firstCarArray[carsPosition1].classList.add('cars')
// }
// const carCycle2 = () => {
//   secondCarArray[carsPosition2].classList.remove('cars2')
//   carsPosition2 += 1
//   secondCarArray[carsPosition2].classList.add('cars2')
// }
// const carCycle3 = () => {
//   firstCarArray[carsPosition3].classList.remove('cars')
//   carsPosition3 -= 1
//   firstCarArray[carsPosition3].classList.add('cars')
// }

//! Movement of the trunks
// //*Created individual arrays for each car to loop through
// const firstTrunkArray = cells.slice(18, 27)

// for (let index = 0; index < firstTrunkArray.length; index++) {
//   firstTrunkArray[index].classList.add('water')

// }

// firstTrunkArray[trunkPosition1].classList.add('trunks')
// firstTrunkArray[trunkPosition2].classList.add('trunks2')
// firstTrunkArray[trunkPosition3].classList.add('trunks3')

// const secondTrunkArray = cells.slice(27, 36)

// for (let index = 0; index < secondTrunkArray.length; index++) {
//   secondTrunkArray[index].classList.add('water')

// }

// secondTrunkArray[trunkPosition4].classList.add('trunks')
// secondTrunkArray[trunkPosition5].classList.add('trunks2')
// secondTrunkArray[trunkPosition6].classList.add('trunks3')



// //* Intervals to create the movement of objects
setInterval(() => {
  waterTop.forEach((element, i) => {
    // element += index
    if (frog === element) {
      deadStopGame('You drowned 3 !')


    } if (element === 26) {
      cells[element].classList.remove('water')
      waterTop[i] = 18
      // else if (frog === 35) {
      //   deadStopGame()
      // } 


    } else {
      cells[element].classList.remove('water')
      waterTop[i] += 1
      element += 1
      cells[element].classList.add('water')
    }
  })
  if (cells[frog].classList.contains('grass')) {
    cells[frog].classList.remove('frog')
    cells[frog].classList.add('frogGrass')
  }
  trunksArrayRight.forEach((element, i) => {
    // element += index
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


  // if (cells[frog].classList.contains('lilyLeave')) {

  // }
  // else if (cells[frog].classList.contains('water')) {
  //   deadStopGame('You drowned 2 !')
  //   cells[element].classList.add('trunks')

  // }

}, 400)

setInterval(() => {
  waterBottom.forEach((water1, i) => {
    // element += index
    if (frog === water1) {
      deadStopGame('You drowned 1 !')


    } if (water1 === 27) {
      cells[water1].classList.remove('water')
      waterBottom[i] = 35
      // else if (frog === 35) {
      //   deadStopGame()
      // } 


    } else {
      cells[water1].classList.remove('water')
      waterBottom[i] -= 1
      water1 -= 1
      cells[water1].classList.add('water')
    }
  })
  trunksArrayLeft.forEach((element, i) => {
    // element += index
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

    }
    // else if (cells[frog].classList.contains('water')) {
    //   deadStopGame('You drowned 4 !')
    //   cells[element].classList.add('trunks')

    // } 
    else {
      cells[element].classList.remove('trunks')
      trunksArrayLeft[i] -= 1
      element -= 1
      cells[element].classList.add('trunks')
      cells[element].classList.remove('frogWater')

    }
  })

}, 600)


setInterval(() => {
  // displayScore.innerHTML += 50

  waterFront.forEach((water2, i) => {
    // element += index
    if (frog === water2) {
      deadStopGame('You drowned 1 !')


    } if (water2 === 0) {
      cells[water2].classList.remove('water')
      waterFront[i] = 8
      // else if (frog === 35) {
      //   deadStopGame()
      // } 


    } else {
      cells[water2].classList.remove('water')
      waterFront[i] -= 1
      water2 -= 1
      cells[water2].classList.add('water')
    }
  })
  lilyLeavePosition.forEach((element, i) => {
    // element += index
    if (frog === element) {
      if (element === 0) {

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
      // cells[element].classList.remove('frogWater')

    }
  })

}, 600)

// //*Each car has it's own function, as when I created a function which you could input (array, position) came up as undefined, I believe it was because of the -= operation

//! Random crocodile
setInterval(() => {
  if (cells[frog].classList.contains('crocodile')) {

    cells[frog].classList.remove('frogGrass')
    deadStopGame('A crocodile ate you!')

  }
  cells[crocodilePosition].classList.remove('crocodile')
  crocodilePosition = crocodile[Math.floor(Math.random() * crocodile.length)]

  cells[crocodilePosition].classList.add('crocodile')





}, 1000)


const startGame = () => {
  cells[frog].classList.remove('frog')
  cells[frog].classList.remove('frogWins')
  frog = 76
  cells[frog].classList.add('frog')
  displayLives.innerHTML = 3
  // displayScore.innerHTML = 0
}

//* Player wins if reaches the lilyleaves


// || cells[frog] === cells[3] || cells[frog] === cells[5] || cells[frog] === cells[7]))
// {
//   confirm('You win! Do you want to play again?')
//   displayScore.innerHTML += 50
// } else if (cells[frog] === 1 || cells[frog] === 3 || cells[frog] === 5 || cells[frog] === 7) {
//   deadStopGame()
// }



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

// console.log(e)
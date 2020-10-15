const displayScore = document.querySelector('#displayScore')

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

const trunksArray = [30, 29, 28, 24, 23, 22, 20, 19, 18]
const waterWithoutTrunks = [35, 34, 33, 32, 31, 27, 26, 25, 21]

const carsArrayRight = [53, 52, 51, 50, 49, 48, 47, 46, 45]
const carsArrayLeft = [54, 55, 56, 57, 58, 59, 60, 61, 62]
const crocodile = [9, 10, 11, 12, 13, 14, 15, 16, 17, 36, 37, 38, 39, 40, 41, 2, 43, 44, 63, 64, 65, 66, 67, 68, 69, 70, 71]

// cells[18].classList.add('water')

let frog = 76
const lilyLeavePosition = [1, 3, 5, 7]
const waterFront = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let carsPosition1 = 8
let carsPosition2 = 0
let carsPosition3 = 5
let trunkPosition1 = 18



//* Creates the grid based on the width
for (let index = 0; index < width ** 2; index++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  div.innerHTML = index
  cells.push(div)
}

//* Initial position of the frog
cells[frog].classList.add('frog')

//* Start of the game / reset frog position
startButton.addEventListener('click', () => {
  startGame()
  cells[frog].classList.remove('frog')
  frog = 76
  cells[frog].classList.add('frog')
})



waterFront.forEach((waterPosition) => {

  cells[waterPosition].classList.add('water')



})
//* Initial position of the lilyleaves
lilyLeavePosition.forEach((lily) => {

  cells[lily].classList.add('lilyLeave')
  cells[lily].classList.remove('water')
})



//* Creates the movement of the frog
document.addEventListener('keydown', (event) => {
  const key = event.key
  console.log(key)
  if (key === 'ArrowUp' && !(frog < width)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    frog -= width
    cells[frog].classList.add('frog')
  } else if (key === 'ArrowDown' && !(frog > (width ** 2) - width - 1)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    frog += width
    cells[frog].classList.add('frog')
  } else if (key === 'ArrowLeft' && !(frog % width === 0)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    frog -= 1
    cells[frog].classList.add('frog')
  } else if (key === 'ArrowRight' && !(frog % width === width - 1)) {
    cells[frog].classList.remove('frogWater')
    cells[frog].classList.remove('frog')
    frog += 1
    cells[frog].classList.add('frog')
  }
})

//! Movement of the cars
//*Created individual arrays for each car to loop through
const firstCarArray = cells.slice(54, 63)
firstCarArray[carsPosition1].classList.add('cars')

for (let index = 0; index < firstCarArray.length; index++) {
  firstCarArray[index].classList.add('road')

}


const secondCarArray = cells.slice(45, 54)
secondCarArray[carsPosition2].classList.add('cars2')

for (let index = 0; index < secondCarArray.length; index++) {
  secondCarArray[index].classList.add('road')

}

// const thirdCarArray = cells.slice(36, 45)
firstCarArray[carsPosition3].classList.add('cars')

//* Each car has it's own interval to avoid conflicts in the loops
setInterval(() => {
  if ((carsPosition1 % width === 0)) {
    firstCarArray[carsPosition1].classList.remove('cars')
    carsPosition1 = 8
    firstCarArray[carsPosition1].classList.add('cars')
  }
  carCycle1()
}, 800)

setInterval(() => {
  if ((carsPosition2 % width === width - 1)) {
    secondCarArray[carsPosition2].classList.remove('cars2')
    carsPosition2 = 0
    secondCarArray[carsPosition2].classList.add('cars2')
  }
  if (secondCarArray[carsPosition2].classList.contains('frog')) {
    deadStopGame()
  }
  carCycle2()
}, 500)

setInterval(() => {
  if ((carsPosition3 % width === 0)) {
    firstCarArray[carsPosition3].classList.remove('cars')
    carsPosition3 = 5
    firstCarArray[carsPosition3].classList.add('cars')
  }
  if (firstCarArray[carsPosition3].classList.contains('frog')) {
    deadStopGame()
  }
  carCycle3()
}, 800)

//*Each car has it's own function, as when I created a function which you could input (array, position) came up as undefined, I believe it was because of the -= operation
const carCycle1 = () => {
  firstCarArray[carsPosition1].classList.remove('cars')
  carsPosition1 -= 1
  firstCarArray[carsPosition1].classList.add('cars')
}
const carCycle2 = () => {
  secondCarArray[carsPosition2].classList.remove('cars2')
  carsPosition2 += 1
  secondCarArray[carsPosition2].classList.add('cars2')
}
const carCycle3 = () => {
  firstCarArray[carsPosition3].classList.remove('cars')
  carsPosition3 -= 1
  firstCarArray[carsPosition3].classList.add('cars')
}

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

  trunksArray.forEach((element, i) => {
    // element += index
    if (frog === element) {
      if (element === 35 || element === 26) {
        cells[35].classList.remove('trunks')
        trunksArray[i] = 18
        cells[element].classList.remove('frogWater')
        deadStopGame()
      } else {
        cells[element].classList.remove('frog')
        cells[element].classList.remove('frogWater')
        frog += 1
        trunksArray[i] += 1
        element += 1
        cells[element].classList.add('frogWater')
      }
    } else if (element === 35) {
      cells[35].classList.remove('trunks')
      trunksArray[i] = 18

    } else if (firstCarArray[carsPosition1].classList.contains('frog')) {
      deadStopGame()
    } else if (cells[frog].classList.contains('lilyLeave')) {
      displayScore.innerHTML += 50
      confirm('You win! Do you want to play again?')
      startGame()
    } else if (cells[frog].classList.contains('water')) {
      deadStopGame()
    } else {
      cells[element].classList.remove('trunks')
      trunksArray[i] += 1
      element += 1
      cells[element].classList.add('trunks')
    }
  })

  waterWithoutTrunks.forEach((element, i) => {
    // element += index
    if (frog === element) {
      deadStopGame()


    } if (element === 35) {
      cells[35].classList.remove('water')
      waterWithoutTrunks[i] = 18
      // else if (frog === 35) {
      //   deadStopGame()
      // } 


    } else {
      cells[element].classList.remove('water')
      waterWithoutTrunks[i] += 1
      element += 1
      cells[element].classList.add('water')
    }
  })
}, 400)



// //*Each car has it's own function, as when I created a function which you could input (array, position) came up as undefined, I believe it was because of the -= operation



const startGame = () => {
  cells[frog].classList.remove('frog')
  frog = 76
  cells[frog].classList.add('frog')
  displayLives.innerHTML = 3
  displayScore.innerHTML = 0
}

//* Player wins if reaches the lilyleaves

console.log(cells[frog] === cells[1])

// || cells[frog] === cells[3] || cells[frog] === cells[5] || cells[frog] === cells[7]))
// {
//   confirm('You win! Do you want to play again?')
//   displayScore.innerHTML += 50
// } else if (cells[frog] === 1 || cells[frog] === 3 || cells[frog] === 5 || cells[frog] === 7) {
//   deadStopGame()
// }



const deadStopGame = () => {
  if (displayLives.innerHTML <= 1) {
    confirm('You lost all your lives. Would you like to play again?')
    startGame()
  } else {
    alert('You lost one life. Try again!')
    displayLives.innerHTML -= 1
    cells[frog].classList.remove('frog')
    frog = 76
    cells[frog].classList.add('frog')
  }
}

// console.log(e)
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

const trunksRight = [18, 19, 20, 21, 22, 23, 24, 25, 26]

let frog = 76
let lilyLeavePosition = 1
let waterFront = 0
let carsPosition1 = 8
let carsPosition2 = 0
let carsPosition3 = 5
let trunkPosition1 = 0
let trunkPosition2 = trunkPosition1 + 1
let trunkPosition3 = trunkPosition2 + 1
let trunkPosition4 = trunkPosition3 + 1
let trunkPosition5 = trunkPosition4 + 1
let trunkPosition6 = trunkPosition5 + 1


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

})

//* Initial position of the lilyleaves
cells[lilyLeavePosition].classList.add('lilyLeave')
cells[3].classList.add('lilyLeave')
cells[5].classList.add('lilyLeave')
cells[7].classList.add('lilyLeave')

cells[waterFront].classList.add('water')
cells[2].classList.add('water')
cells[4].classList.add('water')
cells[6].classList.add('water')
cells[8].classList.add('water')

console.log(cells)

//* Creates the movement of the frog
document.addEventListener('keydown', (event) => {
  const key = event.key
  console.log(key)
  if (key === 'ArrowUp' && !(frog < width)) {
    cells[frog].classList.remove('frog')
    frog -= width
    cells[frog].classList.add('frog')
  } else if (key === 'ArrowDown' && !(frog > (width ** 2) - width - 1)) {
    cells[frog].classList.remove('frog')
    frog += width
    cells[frog].classList.add('frog')
  } else if (key === 'ArrowLeft' && !(frog % width === 0)) {
    cells[frog].classList.remove('frog')
    frog -= 1
    cells[frog].classList.add('frog')
  } else if (key === 'ArrowRight' && !(frog % width === width - 1)) {
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
  if (firstCarArray[carsPosition1].classList.contains('frog')) {
    deadStopGame()
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
const firstTrunkArray = cells.slice(18, 27)

for (let index = 0; index < firstTrunkArray.length; index++) {
  firstTrunkArray[index].classList.add('water')

}

firstTrunkArray[trunkPosition1].classList.add('trunks')
firstTrunkArray[trunkPosition2].classList.add('trunks2')
firstTrunkArray[trunkPosition3].classList.add('trunks3')

const secondTrunkArray = cells.slice(27, 36)

for (let index = 0; index < secondTrunkArray.length; index++) {
  secondTrunkArray[index].classList.add('water')

}

secondTrunkArray[trunkPosition4].classList.add('trunks')
secondTrunkArray[trunkPosition5].classList.add('trunks2')
secondTrunkArray[trunkPosition6].classList.add('trunks3')



// //* Each trunk has it's own interval to avoid conflicts in the loops
setInterval(() => {
  // console.log(trunkPosition1 === frog)
  console.log(trunkPosition1)
  console.log((frog - 18))
  if ((frog - 18) === trunkPosition1) {

    frogOnTrunk()



  }
  if ((trunkPosition1 % width === width - 1)) {
    firstTrunkArray[trunkPosition1].classList.remove('trunks')
    trunkPosition1 = 0
    firstTrunkArray[trunkPosition1].classList.add('trunks')
  }

  trunkCycle1()
}, 400)

const trunkInt1 = setInterval(() => {

  if ((trunkPosition2 % width === width - 1)) {

    firstTrunkArray[trunkPosition2].classList.remove('trunks2')
    trunkPosition2 = 0
    firstTrunkArray[trunkPosition2].classList.add('trunks2')
  }
  // if (firstTrunkArray[trunkPosition1].classList.contains('frog')) {
  //   deadStopGame()
  // }
  trunkCycle2()
}, 400)

const trunkInt2 = setInterval(() => {

  if ((trunkPosition3 % width === width - 1)) {

    firstTrunkArray[trunkPosition3].classList.remove('trunks3')
    trunkPosition3 = 0
    firstTrunkArray[trunkPosition3].classList.add('trunks3')
  }

  trunkCycle3()
}, 400)
//* 2nd array of trunks
const trunkInt3 = setInterval(() => {

  if ((trunkPosition4 % width === width - 1)) {
    secondTrunkArray[trunkPosition4].classList.remove('trunks')
    trunkPosition4 = 0
    secondTrunkArray[trunkPosition4].classList.add('trunks')
  }
  trunkCycle4()
}, 700)

setInterval(() => {

  if ((trunkPosition5 % width === width - 1)) {

    secondTrunkArray[trunkPosition5].classList.remove('trunks2')
    trunkPosition5 = 0
    secondTrunkArray[trunkPosition5].classList.add('trunks2')
  }
  trunkCycle5()
}, 700)

setInterval(() => {

  if ((trunkPosition6 % width === width - 1)) {

    secondTrunkArray[trunkPosition6].classList.remove('trunks3')
    trunkPosition6 = 0
    secondTrunkArray[trunkPosition6].classList.add('trunks3')
  }
  trunkCycle6()
}, 700)



// //*Each car has it's own function, as when I created a function which you could input (array, position) came up as undefined, I believe it was because of the -= operation
const frogOnTrunk = () => {
  firstTrunkArray[frog].classList.remove('frog')
  firstTrunkArray[frog].classList.add('frogWater')
  trunkPosition1 += 1
  firstTrunkArray[frog].classList.add('frogWater')
  firstTrunkArray[frog].classList.add('frog')
}
const trunkCycle1 = () => {
  firstTrunkArray[trunkPosition1].classList.remove('trunks')
  trunkPosition1 += 1
  firstTrunkArray[trunkPosition1].classList.add('trunks')

}
const trunkCycle2 = () => {
  firstTrunkArray[trunkPosition2].classList.remove('trunks2')
  trunkPosition2 += 1
  firstTrunkArray[trunkPosition2].classList.add('trunks2')
}
const trunkCycle3 = () => {
  firstTrunkArray[trunkPosition3].classList.remove('trunks3')
  trunkPosition3 += 1
  firstTrunkArray[trunkPosition3].classList.add('trunks3')
}

const trunkCycle4 = () => {
  secondTrunkArray[trunkPosition4].classList.remove('trunks')
  trunkPosition4 += 1
  secondTrunkArray[trunkPosition4].classList.add('trunks')

}
const trunkCycle5 = () => {
  secondTrunkArray[trunkPosition5].classList.remove('trunks2')
  trunkPosition5 += 1
  secondTrunkArray[trunkPosition5].classList.add('trunks2')
}
const trunkCycle6 = () => {
  secondTrunkArray[trunkPosition6].classList.remove('trunks3')
  trunkPosition6 += 1
  secondTrunkArray[trunkPosition6].classList.add('trunks3')
}

const startGame = () => {
  cells[frog].classList.remove('frog')
  frog = 76
  cells[frog].classList.add('frog')
  displayLives.innerHTML = 3
  displayScore.innerHTML = 0
}

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
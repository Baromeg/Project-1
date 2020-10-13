const displayScore = document.querySelector('#displayScore')

const displayLives = document.querySelector('#displayLives')

const startButton = document.querySelector('.startButton')

const grid = document.querySelector('.grid')

const cell = document.querySelector('.cell')
const cells = []
const width = 9

const frogStyle = document.querySelector('.frog')
const lilyLeave = document.querySelector('.lilyLeave')
const cars = document.querySelector('.cars')
const trunks = document.querySelector('.trunks')
const trunks2 = document.querySelector('.trunks2')


let frog = 76
let lilyLeavePosition = 1
let carsPosition1 = 8
let carsPosition2 = 7
let carsPosition3 = 8
let trunkPosition1 = 0
let trunkPosition2 = 1



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
  cells[frog].classList.remove('frog')
  frog = 76
  cells[frog].classList.add('frog')
})

//* Initial position of the lilyleaves
cells[lilyLeavePosition].classList.add('lilyLeave')
cells[3].classList.add('lilyLeave')
cells[5].classList.add('lilyLeave')
cells[7].classList.add('lilyLeave')


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

const secondCarArray = cells.slice(45, 54)
secondCarArray[carsPosition2].classList.add('cars')

const thirdCarArray = cells.slice(36, 45)
thirdCarArray[carsPosition3].classList.add('cars')

//* Each car has it's own interval to avoid conflicts in the loops
setInterval(() => {
  if ((carsPosition1 % width === 0)) {
    firstCarArray[carsPosition1].classList.remove('cars')
    carsPosition1 = 8
    firstCarArray[carsPosition1].classList.add('cars')
  }
  if (firstCarArray[carsPosition1].classList.contains('frog')) {
    console.log('you are dead!')
  }
  carCycle1()
}, 1000)

setInterval(() => {
  if ((carsPosition2 % width === 0)) {
    secondCarArray[carsPosition2].classList.remove('cars')
    carsPosition2 = 8
    secondCarArray[carsPosition2].classList.add('cars')
  }
  carCycle2()
}, 1000)

setInterval(() => {
  if ((carsPosition3 % width === 0)) {
    thirdCarArray[carsPosition3].classList.remove('cars')
    carsPosition3 = 8
    thirdCarArray[carsPosition3].classList.add('cars')
  }
  carCycle3()
}, 1000)

//*Each car has it's own function, as when I created a function which you could input (array, position) came up as undefined, I believe it was because of the -= operation
const carCycle1 = () => {
  firstCarArray[carsPosition1].classList.remove('cars')
  carsPosition1 -= 1
  firstCarArray[carsPosition1].classList.add('cars')
}
const carCycle2 = () => {
  secondCarArray[carsPosition2].classList.remove('cars')
  carsPosition2 -= 1
  secondCarArray[carsPosition2].classList.add('cars')
}
const carCycle3 = () => {
  thirdCarArray[carsPosition3].classList.remove('cars')
  carsPosition3 -= 1
  thirdCarArray[carsPosition3].classList.add('cars')
}

//! Movement of the trunks
// //*Created individual arrays for each car to loop through
const firstTrunkArray = cells.slice(18, 27)
firstTrunkArray[trunkPosition1].classList.add('trunks')
// firstTrunkArray[trunkPosition2].classList.add('trunks2')

// const secondCarArray = cells.slice(45, 54)
// secondCarArray[carsPosition2].classList.add('cars')

// const thirdCarArray = cells.slice(36, 45)
// thirdCarArray[carsPosition3].classList.add('cars')

// //* Each trunk has it's own interval to avoid conflicts in the loops
setInterval(() => {
  if ((trunkPosition1 % width === width - 1)) {
    firstTrunkArray[trunkPosition1].classList.remove('trunks')
    trunkPosition1 = 0
    firstTrunkArray[trunkPosition1].classList.add('trunks')
  }
  trunkCycle1()
}, 1000)

// setInterval(() => {
//   if ((trunkPosition2 % width === width - 1)) {

//     firstTrunkArray[trunkPosition2].classList.remove('trunks2')
//     trunkPosition2 = 1
//     firstTrunkArray[trunkPosition2].classList.add('trunks2')
//   }
//   trunkCycle2()
// }, 1000)

// setInterval(() => {
//   if ((carsPosition2 % width === 0)) {
//     secondCarArray[carsPosition2].classList.remove('cars')
//     carsPosition2 = 8
//     secondCarArray[carsPosition2].classList.add('cars')
//   }
//   carCycle2()
// }, 1000)

// setInterval(() => {
//   if ((carsPosition3 % width === 0)) {
//     thirdCarArray[carsPosition3].classList.remove('cars')
//     carsPosition3 = 8
//     thirdCarArray[carsPosition3].classList.add('cars')
//   }
//   carCycle3()
// }, 1000)

// //*Each car has it's own function, as when I created a function which you could input (array, position) came up as undefined, I believe it was because of the -= operation
const trunkCycle1 = () => {
  firstTrunkArray[trunkPosition1].classList.remove('trunks')
  trunkPosition1 += 1
  firstTrunkArray[trunkPosition1].classList.add('trunks')

}
// const trunkCycle2 = () => {
//   firstTrunkArray[trunkPosition2].classList.remove('trunk2')
//   trunkPosition2 += 1
//   firstTrunkArray[trunkPosition2].classList.add('trunks2')
// }
// const carCycle2 = () => {
//   secondCarArray[carsPosition2].classList.remove('cars')
//   carsPosition2 -= 1
//   secondCarArray[carsPosition2].classList.add('cars')
// }
// const carCycle3 = () => {
//   thirdCarArray[carsPosition3].classList.remove('cars')
//   carsPosition3 -= 1
//   thirdCarArray[carsPosition3].classList.add('cars')
// }


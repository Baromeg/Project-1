const displayScore = document.querySelector('.displayScore')

const displayMovesLeft = document.querySelector('.displayMovesLeft')

const startButton = document.querySelector('.startButton')

const grid = document.querySelector('.grid')

const cells = []
let score = 0
let candy = 8
let movesLeft = 10

const candies = ['candy1', 'candy2', 'candy3']
const randomCandy = () => {
  return candies[Math.floor(Math.random() * candies.length)]
}

const width = 6

//*Creating the grid
for (let i = 0; i < width ** 2; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  grid.appendChild(div)
  div.innerHTML = i
  cells.push(div)
}

console.log((Array.isArray(cells)))
//* Starting the game
startButton.addEventListener('click', () => {
  setInterval(() => {

  }, 2000)
  cells.forEach((cell) => {
    console.log(cell)
    cell.classList.add(randomCandy())
  })
  console.log(typeof (cells.forEach))



})
console.log((Array.isArray(cells)))







console.log(randomCandy())

//*Typical pattern = not needed
cells[candy].classList.remove('candy1')
candy -= 1
cells[candy].classList.add('candy1')

//* Movement across the grid test - Interested in the down movement
document.addEventListener('keypress', (event) => {
  const key = event.key
  console.log(key)
  if (key === 'w' && !(candy < width)) {
    cells[candy].classList.remove('candy1')
    candy -= width
    cells[candy].classList.add('candy1')
  } else if (key === 's' && !(candy > (width ** 2) - width - 1)) {
    cells[candy].classList.remove('candy1')
    candy += width
    cells[candy].classList.add('candy1')
  } else if (key === 'a' && !(candy % width === 0)) {
    cells[candy].classList.remove('candy1')
    candy -= 1
    cells[candy].classList.add('candy1')
  } else if (key === 'd' && !(candy % width === width - 1)) {
    cells[candy].classList.remove('candy1')
    candy += 1
    cells[candy].classList.add('candy1')
  }
})

// cells[2].classList.add('candy1')
// cells[3].classList.add('candy1')
// cells[4].classList.add('candy1')
// cells[8].classList.add('candy2')
// cells[9].classList.add('candy2')
// cells[1].classList.add('candy2')
// cells[0].classList.add('candy3')
// cells[5].classList.add('candy3')
// cells[16].classList.add('candy3')
console.log(cells)


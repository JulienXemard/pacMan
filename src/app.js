//? DOM events fires once initial HTML = loaded & Parsed
function init() {
  // ------------------------------ DOM elements ------------------------------ //
  const docBody = document.querySelector('body')
  const grid = document.querySelector('.grid')

  // ------------------------------ Variables ------------------------------ // 
  // gameBoard creation
  // 0 = blank | 1 = wall
  // 2 = pellet | 3 = safe

  const firsLevel = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,3,2,2,2,2,1,1,2,2,2,2,2,2,3,1],
    [1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1],
    [1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,1,0,0,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,1,1,4,4,1,1,2,2,2,2,2,1],
    [1,1,1,1,1,2,1,1,0,0,1,1,2,1,1,1,1,1],
    [1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1],
    [1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1],
    [1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,1],
    [1,2,1,0,1,2,1,2,1,1,2,1,2,1,0,1,2,1],
    [1,2,1,0,1,2,1,2,2,2,2,1,2,1,0,1,2,1],
    [1,2,2,2,2,2,1,2,1,1,2,1,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1],
    [1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]

  const gameBoard = []
  const gridCount = 18

  function gameGrid() {
    for (let y = 0; x < gridCount; i++) {
      const rows = []
      for (let x = 0; i < gridCount; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        grid.appendChild(cell)
        rows.push(cell)
      }
      gameBoard.push(rows)
    }
  }
  console.log(cells)
  gameGrid()


}
document.addEventListener('DOMContentLoaded', init)
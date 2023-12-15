const gridEtch = document.querySelector('.sketch-container');
let rowsAndColumns = 16;

for(let rows = 1; rows <= rowsAndColumns; rows++) {
  for(let columns = 1; columns <= rowsAndColumns; columns++) {
    let squareEtch = document.createElement('div');
    squareEtch.style.cssText = 'border: 1px solid black; z-index: 100';
    squareEtch.style.width = 100/rowsAndColumns +'%';
    squareEtch.style.height = 100/rowsAndColumns +'%';
    gridEtch.appendChild(squareEtch);
  }
}
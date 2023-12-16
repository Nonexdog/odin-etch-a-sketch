const gridEtch = document.querySelector('.sketch-container');
const colorList = ['colorBlack','colorCoral', 'colorGreenYellow', 'colorViolet'];
const buttonNewGrid = document.querySelector('#newGrid');
const buttonClearGrid = document.querySelector('#clearGrid');
const checkboxColorful = document.querySelector('#color-toggle');
checkboxColorful.checked = false;
let modeColorful = false;

function generateGrid(size) {
  for(let rows = 1; rows <= size; rows++) {
    for(let columns = 1; columns <= size; columns++) {
      const squareEtch = document.createElement('div');
      squareEtch.style.cssText = 'z-index: 100';
      squareEtch.addEventListener('mouseover', () => {
        addColor(squareEtch, modeColorful);
      })
      squareEtch.style.width = 100/size +'%';
      squareEtch.style.height = 100/size +'%';
      gridEtch.appendChild(squareEtch);
    }
  }
}
function addColor(target, colorful) {
  if (colorful) {
    let randomColor = Math.floor(Math.random() * (colorList.length - 1));
    console.log(randomColor);
    target.setAttribute('class', colorList[randomColor + 1])
  } else {
    target.setAttribute('class', colorList[0]);
  }
}

buttonClearGrid.addEventListener('click', () => {
  if (askToClear()) {
    for (child of gridEtch.children) {
      child.className = '';
    }
  }
})
function askToClear() {
  return confirm('Do you want to erase your current board?');
}

buttonNewGrid.addEventListener('click', () => {
  let newGridSize = Number(prompt('How big do you want your grid to be? Max size: 100', '16'));
  if (newGridSize > 100) {
    alert('That is too high!!');
  } else {
    while (gridEtch.firstChild){
      gridEtch.removeChild(gridEtch.firstChild);
    }
    generateGrid(newGridSize);
  }
  
})

checkboxColorful.addEventListener('change', () => {
  if (checkboxColorful.checked) {
    modeColorful = true;
  } else {
    modeColorful = false;
  }
})


generateGrid(16);
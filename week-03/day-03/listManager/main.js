'use strict';

const items = ['bread', 'milk', 'orange', 'tomato'];
const buttons = ['Up', '>', 'X', 'Down'];

const leftSelection = document.createElement('select');
leftSelection.setAttribute('size', items.length);
const rightSelection = document.createElement('select');
rightSelection.setAttribute('size', items.length);
leftSelection.className = 'selectField';
rightSelection.className = 'selectField';

items.forEach((item) => {
  const newOption = document.createElement('option');
  newOption.textContent = item;
  newOption.setAttribute('value', item);
  leftSelection.appendChild(newOption);
});

const buttonDiv = document.createElement('div');
buttonDiv.className = 'buttonGroup';
buttons.forEach((item, index) => {
  const newButton = document.createElement('button');
  newButton.textContent = item;
  newButton.className = 'my-button '.concat(' btn-').concat(index);
  buttonDiv.appendChild(newButton);
});

const myTable = document.createElement('table');
const myRow = document.createElement('tr');
document.body.appendChild(myTable);
myTable.appendChild(myRow);

let cel = document.createElement('td');
cel.appendChild(leftSelection);
myRow.appendChild(cel);
cel = document.createElement('td');
cel.appendChild(buttonDiv);
myRow.appendChild(cel);
cel = document.createElement('td');
cel.appendChild(rightSelection);
myRow.appendChild(cel);


function orderChange(before, after) {
  const targetIdx = leftSelection.selectedIndex;
  const opts = leftSelection.options;
  leftSelection.insertBefore(opts[targetIdx + before], opts[targetIdx + after]);
}

document.querySelector('.btn-0').addEventListener('click', () => {
  if (leftSelection.selectedIndex <= 0) {
    return;
  }
  orderChange(0, -1);
});

document.querySelector('.btn-3').addEventListener('click', () => {
  if (leftSelection.selectedIndex < 0 || leftSelection.selectedIndex >= (items.length - 1)) {
    return;
  }
  orderChange(1, 0);
});

function shift(source, dest) {
  const targetIdx = source.selectedIndex;
  const target = source.options[targetIdx];
  target.parentElement.removeChild(target);
  dest.appendChild(target);
}

document.querySelector('.btn-1').addEventListener('click', () => {
  if (leftSelection.selectedIndex < 0) {
    return;
  }
  shift(leftSelection, rightSelection);
});

document.querySelector('.btn-2').addEventListener('click', () => {
  if (rightSelection.selectedIndex < 0) {
    return;
  }
  shift(rightSelection, leftSelection);
});

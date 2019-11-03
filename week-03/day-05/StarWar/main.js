'use strict';

function appendMoive(parent, moive) {
  const mv = document.createElement('li');
  mv.textContent = `${moive.title}(${moive.release_date})`;
  parent.appendChild(mv);
}

function searchMoive(e) {
  fetch(e.target.dataset.url)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      throw Error(response.statusText);
    })
    .then((result) => Promise.all(result.films.map((film) => fetch(film))))
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((responses) => {
      const rightList = document.querySelector('.right-list');
      responses.map((response) => appendMoive(rightList, response));
    })
    .catch((msg) => alert(msg));
}

function appendCharacter(parent, char) {
  const name = document.createElement('li');
  name.textContent = char.name;
  name.setAttribute('data-url', char.url);
  name.addEventListener('click', searchMoive);
  parent.appendChild(name);
}

function searchPeople(name) {
  fetch(`https://swapi.co/api/people?search=${name}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      throw Error(response.statusText);
    })
    .then((results) => {
      if (results.count === 0) {
        throw Error('Not Fouind');
      }
      return results;
    })
    .then((results) => {
      const leftList = document.querySelector('.left-list');
      results.results.forEach((char) => appendCharacter(leftList, char));
    })
    .catch((msg) => alert(msg));
}

document.querySelector('input[type="submit"]').addEventListener('click', () => {
  const key = document.querySelector('input[type="text"]').value;
  if (!key) {
    return;
  }
  document.querySelector('.left-list').innerHTML = '';
  document.querySelector('.right-list').innerHTML = '';
  searchPeople(key);
});

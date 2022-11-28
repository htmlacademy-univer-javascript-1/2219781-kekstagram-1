import {photos} from './data.js';

// Взято с сайта MDN: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#parameters
// eslint-disable-next-line no-unused-vars
function getRandomIntInclusive(min, max) {
  if (min < 0 || max < min) {
    throw new SyntaxError('Введены некорректные значения диапазона');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// eslint-disable-next-line no-unused-vars
function isLessThanMax(string, maxLength) {
  return string.length <= maxLength;
}

const isEscapeBut = (evt) => evt.key === 'Escape';

const picture = document.querySelector('.pictures');
const template = document.querySelector('#picture').content;
const templatePicture = template.querySelector('.picture');
const newFragment = document.createDocumentFragment();

const renderPhoto = (photo) => {
  const item = templatePicture.cloneNode(true);
  const img = item.querySelector('.picture__img');
  img.src = photo.url;
  const likes = item.querySelector('.picture__likes');
  likes.textContent = photo.likes;
  const comment = item.querySelector('.picture__comments');
  comment.textContent = photo.comment.length;
  return item;
};

const renderPhotos = () => {
  photos.forEach((photo) => {
    newFragment.appendChild(renderPhoto(photo));
  });
  picture.appendChild(newFragment);
};
renderPhotos();

export {getRandomIntInclusive};
export {isLessThanMax};
export {isEscapeBut};

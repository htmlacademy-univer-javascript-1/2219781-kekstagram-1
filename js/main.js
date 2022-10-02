// Взято с сайта MDN: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#parameters
function getRandomIntInclusive(min, max) {
  if (min < 0 || max < min) {
    throw new SyntaxError('Введены некорректные значения диапазона');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isLessThanMax(string, maxLength) {
  return string.length <= maxLength;
}

getRandomIntInclusive(1, 10);
isLessThanMax('Hello,world', 140);

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.'
];

const NAMES = [
  'Артём',
  'Игорь',
  'Арина',
  'Дарья'
];

let photoIdCounter = 0;
function getphotoId() {
  return photoIdCounter++;
}

let userIdCounter = 0;
function getUserId() {
  return userIdCounter++;
}

const comment = {
  id: getUserId(),
  avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
  message: MESSAGES[getRandomIntInclusive(0, MESSAGES.length-1)],
  name: NAMES[getRandomIntInclusive(0, NAMES.length-1)]
};

// eslint-disable-next-line no-unused-vars
const photoDesc = {
  id: getphotoId(),
  url: `photos/${this.id}.jpg`,
  description: 'Летний пейзаж реки Дон',
  likes: getRandomIntInclusive(15, 200),
  comments: [comment, comment]
};

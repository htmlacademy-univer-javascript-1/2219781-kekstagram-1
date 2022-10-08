import { getRandomIntInclusive } from './util';

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
  description: 'Летний пейзаж реки Волга',
  likes: getRandomIntInclusive(15, 200),
  comments: [comment, comment]
};

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

const DESCRIPTIONS = [
  'Пейзаж реки Волга',
  'Концерт AC\\DC',
  'Пикник',
  'Очередь в магазине',
  'Проблемный ребенок'
];

let photoIdCounter = 0;
function getPhotoId() {
  return photoIdCounter++;
}

let userIdCounter = 0;
function getUserId() {
  return userIdCounter++;
}

let urlIdCounter = 0;
function getUrlId() {
  return urlIdCounter++;
}

const comment = {
  id: getUserId(),
  avatar: `img/avatar-${ getRandomIntInclusive(1, 6) }.svg`,
  message: MESSAGES[getRandomIntInclusive(0, MESSAGES.length-1)],
  name: NAMES[getRandomIntInclusive(0, NAMES.length-1)]
};

// eslint-disable-next-line no-unused-vars
const photos = [];
for (let i = 0; i < 25; i++) {
  const photoDesc = {
    id: getPhotoId(),
    url: `photos/${getUrlId}.jpg`,
    description: DESCRIPTIONS[getRandomIntInclusive(0, 5)],
    likes: getRandomIntInclusive(15, 200),
    comments: [comment, comment]
  };
  photos.push(photoDesc);
}

export {photos};

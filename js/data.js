import { getRandomIntInclusive } from './utils.js';

const AMOUNT = 25;

const NAMES = [
  'Артур',
  'Николай',
  'Егор',
  'Артем',
  'Никон',
  'Кирилл',
  'Екатерина',
  'Лиза',
  'Мария',
];

const MESSAGES = [
  'Всё круто!',
  'В целом всё неплохо. Но не всё.',
  'Как то не особо профессионально.',
  'У меня получилось бы лучше!',
  'Что вообще происходит?',
  'Как можно было поймать такой неудачный момент?!'
];

const allData = [];


function getAllData() {

  for (let index = 0; index < AMOUNT; index++) {
    allData[index] = {
      id: index + 1,
      url: `photos/${index + 1}.jpg`,
      description: `Описание ${index + 1}`,
      likes: getRandomIntInclusive(15, 200),
      comments: getComments(getRandomIntInclusive(1, 20))
    };
  }
  return allData;
}

function getComments() {
  const commentsData = [];

  for (let index = 0; index < AMOUNT; index++) {
    commentsData[index] = {
      id: index + 1,
      avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
      message: MESSAGES[getRandomIntInclusive(0, MESSAGES.length - 1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length - 1)],
    };
  }

  return commentsData;
}

getAllData();

export { allData, NAMES, MESSAGES, getAllData, getComments };

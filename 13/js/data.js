import { getRandomIntInclusive } from './util.js';

const amount = 25;

const NAMES = [
  'Артём',
  'Николай',
  'Кристина',
  'Макс',
  'Шеврон',
  'Анастасия',
  'Батырхан',
  'Егор',
  'Арина',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Хуже фото никогда не видела',
  'Мда, у меня бы получилась фотка получше',
  'Шикарно! Это просто великолепно!',
  'Почему лица такие противные?'
];

const data = [];


function getAllData() {

  for(let i = 0; i < amount; i++) {
    data[i] = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: `Описание ${i + 1}`,
      likes: getRandomIntInclusive(15, 200),
      comments: getComments(getRandomIntInclusive(1, 20))
    };
  }
  return data;
}

function getComments() {
  const commentsData = [];

  for(let i = 0; i < amount; i++) {
    commentsData[i] = {
      id: i + 1,
      avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
      message: MESSAGES[getRandomIntInclusive(0, MESSAGES.length - 1)],
      name: NAMES[getRandomIntInclusive(0, NAMES.length - 1)],
    };
  }

  return commentsData;
}

getAllData();
export { data as allData };
export { NAMES, MESSAGES, getAllData, getComments };

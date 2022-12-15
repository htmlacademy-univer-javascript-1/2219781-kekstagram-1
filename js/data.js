import { getRandomIntInclusive } from './render.js';

const amount = 25;

const NAMES = [
  'Аарон',
  'Аврора',
  'Лия',
  'Леонхард',
  'Конон',
  'Кэлин',
  'Ноа',
  'Таврион',
  'Ричард',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const allData = [];


function getAllData() {

  for(let index = 0; index < amount; index++) {
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

  for(let index = 0; index < amount; index++) {
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

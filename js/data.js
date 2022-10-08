// eslint-disable-next-line no-unused-vars
function getRandomIntInclusive(min, max) {
  if (min < 0 || max < min) {
    throw new SyntaxError('Введены некорректные значения диапазона');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getRandomIntInclusive};

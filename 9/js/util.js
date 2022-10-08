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

export {getRandomIntInclusive};
export {isLessThanMax};

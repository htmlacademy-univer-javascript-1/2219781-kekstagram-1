function getRandomIntInclusive(min, max) {
  if (min < 0 || max < min){
    return('Введены некорректные значения диапазона');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
    Взято с сайта MDN: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#parameters
*/
function isLessThanMax(string, maxLength){
  return string.length < maxLength;
}

getRandomIntInclusive(1,10);
isLessThanMax('Hello,world', 140);
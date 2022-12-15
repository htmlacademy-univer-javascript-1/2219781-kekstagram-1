const ALERT_SHOW_TIME = 5000;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'неверно введённые данные';
}

function checkMaximumStringLength(originalString, maxLength) {
  return originalString.length <= maxLength;
}

const isEscape = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.classList.add('error_message');
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();

  }, ALERT_SHOW_TIME);
};

const mixArray = (array) => {
  for (let one = array.length - 1; one > 0; one--) {
    const two = getRandomIntInclusive(0, one);
    [array[one], array[two]] = [array[two], array[one]];
  }
  return array;
};

const debounce = (callback, timeoutDelay = 500) => {

  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {

  let lastTime = 0;

  return (...rest) => {

    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};
export {
  getRandomIntInclusive,
  checkMaximumStringLength,
  isEscape,
  showAlert,
  throttle,
  debounce,
  mixArray
};


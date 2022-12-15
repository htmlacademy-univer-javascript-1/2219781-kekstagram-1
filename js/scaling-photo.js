import { imageUpload } from './formUpload.js';

const SCALING_STEP = 0.25;
const MAX_SCALING = 1;
const MIN_SCALING = 0.25;
const START_SCALING = 0.5;

let scaling = START_SCALING;

const BUTTONS = document.querySelector('.img-upload__scale');
const SCALE_VALUE = document.querySelector('.scale__control--value');


const reValue = () => {
  scaling = SCALE_VALUE.value.replace('%', '') / 100;

  if (scaling <= MAX_SCALING && scaling >= MIN_SCALING) {
    imageUpload.style.transform = `scale(${scaling.toFixed(2)})`;
  }
};

const doScaling = (evt) => {
  const targetImage = evt.target;
  imageUpload.style.transform = `scale(${scaling})`;

  let mode = 0;

  if (targetImage.classList.contains('scale__control--smaller')) {
    if (scaling !== MIN_SCALING) {
      mode = -1;
    }
  }
  if (targetImage.classList.contains('scale__control--bigger')) {
    if (scaling !== MAX_SCALING) {
      mode = 1;
    }
  }
  scaling = scaling + SCALING_STEP * mode;
  if (scaling > MAX_SCALING) {
    scaling = MAX_SCALING;
  }
  if (scaling < MIN_SCALING) {
    scaling = MIN_SCALING;
  }
  imageUpload.style.transform = `scale(${scaling.toFixed(2)})`;
  SCALE_VALUE.value = `${scaling.toFixed(2) * 100  }%`;
};

const scalingPhotos = () => {
  BUTTONS.addEventListener('click', doScaling);
  SCALE_VALUE.addEventListener('change', reValue);
  SCALE_VALUE.value = `${START_SCALING * 100  }%`;
  imageUpload.style.transform = `scale(${START_SCALING})`;
};
const restart = () => {
  BUTTONS.removeEventListener('click', doScaling);
  scaling = START_SCALING;
};
export { scalingPhotos, restart };

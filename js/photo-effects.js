import { imageUpload } from './formUpload.js';

const START_EFFECT = 'none';

const EFFECTS = document.querySelector('.effects__list');
const SLIDER = document.querySelector('.img-upload__effect-level');

let curEffect = START_EFFECT;

noUiSlider.create(SLIDER, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

SLIDER.setAttribute('disabled', true);


const reSlider = (effect) => {
  let maxValue = 1;
  let minValue = 0;
  let step = 0.1;
  let effectName = '';
  let type = '';
  if (effect === 'chrome') {
    effectName = 'grayscale';
  }
  if (effect === 'sepia') {
    effectName = 'sepia';
  }
  if (effect === 'marvin') {
    maxValue = 100;
    minValue = 0;
    step = 1;
    type = '%';
    effectName = 'invert';
  }
  if (effect === 'phobos') {
    maxValue = 3;
    minValue = 0;
    step = 0.1;
    type = 'px';
    effectName = 'blur';
  }
  if (effect === 'heat') {
    maxValue = 3;
    minValue = 1;
    step = 0.1;
    effectName = 'brightness';
  }

  SLIDER.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue
    },
    start: maxValue,
    step: step,
    format: {
      to: function (value) {
        if(Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
  SLIDER.noUiSlider.on('update', () => {
    imageUpload.style.filter = `${effectName}(${SLIDER.noUiSlider.get()}${type})`;
  });
};

const MAKE_EFFECT = (effect) => {
  imageUpload.classList.remove(`effects__preview--${curEffect}`);
  imageUpload.classList.add(`effects__preview--${effect}`);
  curEffect = effect;

  if (effect === 'none') {
    SLIDER.setAttribute('disabled', false);
    imageUpload.style.filter = '';
  } else {
    SLIDER.removeAttribute('disabled');
    reSlider(effect);
  }
};

const ADD_EFFECT = (evt) => {
  const targetEffect = evt.target;
  if (targetEffect.name === 'effect') {
    MAKE_EFFECT(targetEffect.value);
  }
};
const RESET_EFFECTS = () => {
  EFFECTS.removeEventListener('click', ADD_EFFECT);
  imageUpload.classList.remove(`effects__preview--${curEffect}`);
  SLIDER.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
  SLIDER.setAttribute('disabled', true);
};

const DO_EFFECTS = () => {
  imageUpload.style.filter = '';
  EFFECTS.addEventListener('click', ADD_EFFECT);
};
export { DO_EFFECTS as doEffects, RESET_EFFECTS as restartEffects };

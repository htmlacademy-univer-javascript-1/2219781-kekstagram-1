import { isEscape } from './render.js';
import { scalingPhotos, restart } from './scalingPhoto.js';
import { doEffects, restartEffects } from './effectsOnPhoto.js';

const file = document.querySelector('#upload-file');
const buttonCancel = document.querySelector('#upload-cancel');
const imageUpload = document.querySelector('.img-upload__preview');

file.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  scalingPhotos();
  doEffects();
});

const restartForm = () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  restart();
  restartEffects();
};

buttonCancel.addEventListener('click', restartForm);

const onDocumentEscKeyDown = (evt) => {
  if (isEscape(evt) && !evt.target.classList.contains('text__description') && !evt.target.classList.contains('text__hashtags')) {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};
document.addEventListener('keydown', onDocumentEscKeyDown);

export { imageUpload, restartForm };

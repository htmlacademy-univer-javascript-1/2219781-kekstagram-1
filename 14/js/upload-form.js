import { isEscapeBut } from './util.js';
import { scalingPhotos, restart } from './scaling-photo.js';
import { doEffects, restartEffects } from './effectsOnPhoto.js';

const FILE = document.querySelector('#upload-file');
const BUTTON_CANCEL = document.querySelector('#upload-cancel');
const IMAGE_UPLOAD = document.querySelector('.img-upload__preview');

FILE.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  scalingPhotos();
  doEffects();
});

BUTTON_CANCEL.addEventListener('click', () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  restart();
  restartEffects();
});
const onDocumentEscKeyDown = (evt) => {
  if(isEscapeBut(evt) && !evt.target.classList.contains('text__description') && !evt.target.classList.contains('text__hashtags')) {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};
document.addEventListener('keydown', onDocumentEscKeyDown);
export { IMAGE_UPLOAD as imageUpload };

import './upload-form.js';
import './data.js';
import './render.js';
import './big-picture.js';
import './hashtags.js';
import './scaling-photo.js';
import './photo-effects.js';
import './server.js';
import { renderPhotos } from './render.js';
import { sendRequest } from './server.js';
import { showAlert } from './utils.js';
import { getPhotos } from './filter-photos.js';

const onSuccess = (data) => {
  renderPhotos(data);
  getPhotos(data);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onFail = (error) =>{
  showAlert(error);
};

const method = 'GET';

sendRequest(onSuccess, onFail, method);

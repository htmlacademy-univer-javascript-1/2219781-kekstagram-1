import './formUpload.js';
import './data.js';
import './render.js';
import './bigPicture.js';
import './hashtags.js';
import './scalingPhoto.js';
import './effectsOnPhoto.js';
import './server.js';
import { renderPhotos } from './render.js';
import { sendRequest } from './server.js';
import { showAlert } from './render.js';

const onSuccess = (data) => {
  renderPhotos(data);
};

const onFail = (error) =>{
  showAlert(error);
};

const method = 'GET';

sendRequest(onSuccess, onFail, method);

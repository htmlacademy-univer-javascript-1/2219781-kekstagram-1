import {renderPhotoDataSection} from './render-photo-data-section.js';
import {showAlert} from './util.js';
import {getPublications} from './post-filtering.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      response.json()
        .then((data) => {
          getPublications(data);
          renderPhotoDataSection(data);
        });
    } else {
      showAlert('Загрузить фото не удалось &#128532; Попробуй ещё раз &#128579;');
    }
  })
  .catch(() => {
    showAlert('Неполадки с сетью &#128532 Попробуй обновить страницу &#128579;');
  });

const sendForm = (formData, onSuccess, fail) => {
  fetch('https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        fail();
      }
    })
    .catch(() => {
      fail();
    });
};

export {sendForm};

// AOS animation
AOS.init({
  once: true
});

document.addEventListener('DOMContentLoaded', () => {
  const preloadImages = (imagePaths) => {
    return Promise.all(
      imagePaths.map((path) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = path;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  };

  const images = ['img/bg-top.png', 'img/bg-bottom.png'];

  const wrapper = document.querySelector('.wrapper');
  if (wrapper) {
    wrapper.style.visibility = 'hidden';
  }

  preloadImages(images)
    .then(() => {
      if (wrapper) {
        wrapper.style.visibility = 'visible';
      }
      document.body.classList.add('animation-ready');
    })
    .catch((error) => console.error('Ошибка загрузки изображения:', error));
});

// work with form
const form = document.querySelector('.js-form');
const submitButton = document.getElementById('submitBtn');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  submitButton.disabled = true;
  submitButton.innerText = 'ОТПРАВКА...';

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbymOfw3oOD6d-7uu0zxjeOP6WOXlNgSr73G0BMB-jNro-KZ-zkvqFB8ZaK5OqCgxGUA/exec';

  const dataTime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  document.querySelector('.js-form-date').value = dataTime;

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      console.log('Success!', response);
      submitButton.disabled = false;
      submitButton.innerText = 'ОТПРАВИТЬ';
      window.location.href = 'https://t.me/+pnMjkQd1w21lODYy';
      form.reset();
    })
    .catch((error) => {
      console.error('Error!', error.message);
    });
});

const cover = document.querySelector('.js-cover');
const card = document.querySelector('.details-card');

cover.addEventListener('click', () => {
  card.classList.toggle('active');
});

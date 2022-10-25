const inputEl = document.querySelector('#font-size-control');
const changeFont = document.querySelector('#text');

inputEl.addEventListener('input', () => {
  changeFont.style.fontSize = `${inputEl.value}px`;
});
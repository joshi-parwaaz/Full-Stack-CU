const textarea = document.getElementById('text-input');
const counter = document.getElementById('char-count');

textarea.addEventListener('input', () => {
  counter.textContent = textarea.value.length;
});

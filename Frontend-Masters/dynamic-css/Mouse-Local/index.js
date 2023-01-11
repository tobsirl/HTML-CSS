document.addEventListener('pointerdown', (evt) => {
  let target = evt.target;
  let rect = target.getBoundingClientRect();
  let x = (evt.clientX - rect.left) / rect.width;
  let y = (evt.clientY - rect.top) / rect.height;

  target.style.setProperty('--mouse-local-x', x);
  target.style.setProperty('--mouse-local-y', y);
});

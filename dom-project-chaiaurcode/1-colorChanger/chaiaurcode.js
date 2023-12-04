const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const color = button.id || 'green';
    document.body.style.backgroundColor = color;
  });
});
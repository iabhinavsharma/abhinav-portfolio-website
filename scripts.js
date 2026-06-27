document.querySelector('.copy-email').addEventListener('click', () => {
  navigator.clipboard.writeText('abhinavshar06@gmail.com');
  alert('Email copied to clipboard!');
});
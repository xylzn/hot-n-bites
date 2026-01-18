const cursor = document.getElementById('cursor');
const cursor2 = document.getElementById('cursor2');

document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursor2.style.left = `${e.clientX}px`;
  cursor2.style.top = `${e.clientY}px`;
});

document.addEventListener('mouseenter', () => {
  cursor.style.display = 'block';
  cursor2.style.display = 'block';
});
document.addEventListener('mouseleave', () => {
  cursor.style.display = 'none';
  cursor2.style.display = 'none';
});

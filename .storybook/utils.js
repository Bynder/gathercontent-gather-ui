export function addCSS(src) {
  const link = document.createElement('link');

  link.href = src;
  link.rel = 'stylesheet';
  link.type = 'text/css';

  document.head.appendChild(link);
}

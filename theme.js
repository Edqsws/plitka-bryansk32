document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.innerHTML = '🌓';
  btn.style.position = 'absolute';
  btn.style.right = '20px';
  btn.style.top = '18px';
  btn.style.background = 'none';
  btn.style.border = 'none';
  btn.style.fontSize = '22px';
  btn.style.cursor = 'pointer';
  btn.style.width = '40px';
  btn.style.height = '40px';
  btn.style.borderRadius = '50%';
  document.querySelector('header').appendChild(btn);
  
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  
  btn.addEventListener('click', () => {
    const t = document.documentElement.getAttribute('data-theme');
    const next = t === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});
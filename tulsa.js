

  // Block Ctrl + mouse wheel zoom
  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // Block Ctrl + +, -, 0
  window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (
      e.key === '+' ||
      e.key === '-' ||
      e.key === '=' ||
      e.key === '0'
    )) {
      e.preventDefault();
    }
  });






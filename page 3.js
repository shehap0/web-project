document.querySelectorAll('.feature-img').forEach(img => {
  img.addEventListener('click', function() {
    const src = img.src;
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `<div class="lightbox-content">
                          <img src="${src}" alt="Image" />
                          <span class="close">&times;</span>
                         </div>`;
    document.body.appendChild(lightbox);

    const close = lightbox.querySelector('.close');
    close.addEventListener('click', () => {
      lightbox.remove();
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.remove();
      }
    });
  });
});

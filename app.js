function loadBentralWidget(widget, language) {
  widget.replaceChildren();
  const script = document.createElement('script');
  script.src = widget.dataset[`bentral${language === 'sl' ? 'Sl' : 'En'}`];
  widget.appendChild(script);
}

document.querySelectorAll('[data-bentral-widget]').forEach((widget) => {
  loadBentralWidget(widget, 'en');
  const controls = document.querySelector(`[data-bentral-controls="${widget.dataset.bentralWidget}"]`);
  controls?.querySelectorAll('[data-bentral-language]').forEach((button) => {
    button.addEventListener('click', () => {
      controls.querySelectorAll('[data-bentral-language]').forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      loadBentralWidget(widget, button.dataset.bentralLanguage);
    });
  });
});

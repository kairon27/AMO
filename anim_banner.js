(function() {
  function renderBanner() {
    // Контейнер у кастомному блоці
    var el = document.getElementById('amo-banner-sidebar');
    if (!el) return; // Якщо блока немає – нічого не робимо

    var hostname = window.location.hostname || '';
    hostname = hostname.replace(/^www\./, ''); // Прибираємо www.

    var utmSource = encodeURIComponent(hostname);

    var href = 'https://amopublisher.com/journals/' +
      '?utm_source=' + utmSource +
      '&utm_medium=Banner' +
      '&utm_campaign=Animate';

    var imgSrc = 'https://amopublisher.com/wp-content/uploads/2025/12/banner_up_06_12_2025.gif';

    el.innerHTML =
      '<a href="' + href + '" target="_blank" rel="noopener">' +
        '<img src="' + imgSrc + '" alt="Banner">' +
      '</a>';
  }

  // Чекаємо, поки HTML розмітка завантажиться
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderBanner);
  } else {
    renderBanner();
  }
})();

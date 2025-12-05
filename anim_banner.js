(function() {
  // Поточний домен, наприклад "www.site1.com"
  var hostname = window.location.hostname; 

  // Якщо хочеш без "www.", можна зробити так:
  // hostname = hostname.replace(/^www\./, '');

  // Безпечно кодуємо для URL
  var utmSource = encodeURIComponent(hostname);

  var href = 'https://amopublisher.com/journals/' +
    '?utm_source=' + utmSource +
    '&utm_medium=Banner' +
    '&utm_campaign=Animate';

  var imgSrc = 'https://amopublisher.com/wp-content/uploads/2025/12/banner_up_06_12_2025.gif';

  document.write(
    '<a href="' + href + '" target="_blank" rel="noopener">' +
      '<img src="' + imgSrc + '" alt="Banner">' +
    '</a>'
  );
})();

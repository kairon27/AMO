(function() {
  var el = document.getElementById('amo-banner-sidebar');
  if (!el) return;

  var hostname = window.location.hostname;
  // Якщо хочеш без www:
  hostname = hostname.replace(/^www\./, '');

  var utmSource = encodeURIComponent(hostname);

  var href = 'https://amopublisher.com/journals/' +
    '?utm_source=' + utmSource +
    '&utm_medium=Banner' +
    '&utm_campaign=Animate';

  var imgSrc = 'https://amopublisher.com/banners/anim_banner.gif';

  el.innerHTML =
    '<a href="' + href + '" target="_blank" rel="noopener">' +
      '<img src="' + imgSrc + '" alt="Banner">' +
    '</a>';
})();

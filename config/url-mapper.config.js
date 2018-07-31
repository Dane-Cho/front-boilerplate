const urlMap = {
  URL_LOGIN: '/login.html',
};

module.exports = (() => {
  if (process.env.NODE_ENV === 'production') {
    Object.keys(urlMap).forEach((key) => {
      urlMap[key] = urlMap[key].replace('.html', '');
    });
  }
  return urlMap;
})();

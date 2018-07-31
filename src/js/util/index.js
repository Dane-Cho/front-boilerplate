export const reload = () => {
  location.href = location.origin;
};

/**
 * make get-method-api query-string
 * @param {Object} params key,value 파라미터
 * @return {String} encoding 된 query string.
 */
export const makeQueryString = (params = {}) => {
  let query = '';
  Object.keys(params).forEach((key) => {
    query = `${query}&${key}=${params[key]}`;
  });
  return encodeURI(query.slice(1));
};

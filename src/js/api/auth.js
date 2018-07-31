import 'whatwg-fetch';

const login = (id, password) => {
  /*
  const data = new FormData();
  data.append('id', id);
  data.append('password', password);

  return new Promise((resolve, reject) => {
    fetch(`${process.env.API_HOST}/admin/login`, {
      method: 'POST',
      credentials: 'include',
      body: data,
    })
    .then(response => response.json())
    .then(response => (response.header.resultCode === 0 ?
        resolve(response) : reject(new Error(response.header.resultMessage))))
    .catch(reject);
  });
  */
};

const logout = () => {

};

export default {
  login,
  logout,
};

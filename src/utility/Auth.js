function isLogin() {
  const ls = localStorage.getItem('authToken');

  return false;
}
function getToken() {
  return 'new_token';
}
const Authorization = { isLogin, getToken };
export default Authorization;

const user = JSON.parse(window.localStorage.getItem('user'))

if (!user) {
  const ref = window.location.pathname
  window.location = `/login.html?ref=${ref}`
}

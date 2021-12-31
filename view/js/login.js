window.addEventListener('load', () => {
  
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const loginBTN = document.querySelector('#loginBTN')

  loginBTN.addEventListener('click', () => {

    if (!email.value || !password.value) {
      alert("Credential fields cannot be empty!")
    } else {

      fetch('http://127.0.0.1:9090/login-controller', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": email.value, "password": password.value
        })
      })

    }

  })

})
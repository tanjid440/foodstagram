window.addEventListener("load", () => {
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const loginBTN = document.querySelector("#loginBTN");

  loginBTN.addEventListener("click", () => {
    if (!email.value || !password.value) {
      alert("Credential fields cannot be empty!");
    } else {
      const ql = JSON.stringify({
        query: `{
          authUser(email: "${email.value}", password: "${password.value}") {
            status
            user
          }
        }`,
      });

      fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `{
            authUser(email:"${email.value}", password:"${password.value}") {
              status
              user {
                uid
                name
                email
                address
                dob
                created_on
                token
              }
            }
          }`
        }),
      })
        .then((res) => res.json())
        .then(({data}) => {

          switch(data.authUser.status) {
            case 200:
              window.localStorage.setItem('user', JSON.stringify(data.authUser.user))
              window.location = '/index.html'
              break
            case 401:
              alert('Incorrect password! Please try again with correct credential.')
              break
            case 404:
              alert("User email does not exists on the server! Please register first.")
              break
            default:
              alert("Sorry, something went wrong! Please try after some time.")
              break
          }

        });
    }
  });
});

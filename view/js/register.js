window.addEventListener("load", () => {
  const name = document.querySelector("#dispName");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const address = document.querySelector("#address");
  const dob = document.querySelector("#dob");
  const toc = document.querySelector("#termsAgreement");
  const regBTN = document.querySelector("#reg");

  regBTN.disabled = !toc.checked;

  toc.addEventListener("change", () => {
    regBTN.disabled = !toc.checked;
  });

  regBTN.addEventListener('click', () => {

    console.log(dob.value)

    fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mutation: `{
            addUser(
              name: "${name.value}",
              email: "${email.value}",
              password: "${password.value}",
              address: "${address.value}",
              dob: "${dob.value}",
              created_on: "2021-01-10"
            ) {
              status
            }
          }`
        }),
      })
        .then((res) => res.json())
        .then(({data}) => {

          alert('Registration Successful')

          // switch(data.addUser.status) {
          //   case 200:
          //     alert('Registration successful.')
          //     break
          //   case 401:
          //     alert('Email already exists!')
          //     break
          //   default:
          //     alert("Sorry, something went wrong! Please try after some time.")
          //     break
          // }

        });

  })

});

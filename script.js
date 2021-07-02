firebase.auth().onAuthStateChanged(function (user) {
    console.log("TEST")
    if (user) {
        document.getElementById('user_div').style.display = 'block'
    } else {
        document.getElementById('user_div').style.display = 'none'
    }
  })

function login() {
    console.log("hello")
    var userEmail = document.getElementById('email_field').value
    var userPass = document.getElementById('password_field').value

    firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // ...
    })
}   


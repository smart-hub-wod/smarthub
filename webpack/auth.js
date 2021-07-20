(function () {
    import firebase from "firebase/app";
    // import "firebase/firestore";
    // require("firebase/firestore");


    const firebaseConfig = {
        apiKey: "AIzaSyCoQD_u406p8aUjp2Dp5Euo5KlCOKhcFZ4",
        authDomain: "smart-hub-wod.firebaseapp.com",
        projectId: "smart-hub-wod",
        storageBucket: "smart-hub-wod.appspot.com",
        xmessagingSenderId: "543083167758",
        appId: "1:543083167758:web:6a1df71072c541cebefc5f"
    };
    firebase.initializeApp(firebaseConfig);

    const txtEmail = document.getElementById('txtEmail')
    const txtPassword = document.getElementById('txtPassword')
    const login = document.getElementById('login_button')
    const signup = document.getElementById('signup_button')
    const logout = document.getElementById('logout_button')

    signup.addEventListener('click', e=> {
        //Get email and password
        const email = txtEmail.value //CHECK FOR REAL EMAIL
        const pass = txtPassword.value
        const auth = firebase.auth();
        //Sign in            
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message))  
    })
    
    login.addEventListener('click', e => {
        //Get email and password
        const email = txtEmail.value
        const pass = txtPassword.value
        const auth = firebase.auth();
        //Sign in            
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message))  
    })

    logout.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser)
            logout.classList.remove('invisible')
        }
        else{
            console.log("not logged in")
            logout.classList.add('invisible')
        }
    })
        
}());

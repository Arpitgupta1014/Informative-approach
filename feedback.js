// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAVEKYu9Y7FNXGdxUEb0wIaeKStE1TK4i4",
    authDomain: "informative-approach-77ad6.firebaseapp.com",
    projectId: "informative-approach-77ad6",
    storageBucket: "informative-approach-77ad6.appspot.com",
    messagingSenderId: "969690680295",
    appId: "1:969690680295:web:37d3f7b1144b3a13c4cb42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Signed Up")
  }

  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Signed In" + email.nodeValue);

  }

  function signOut(){
      auth.signOut();
      alert("signed Out")

  }

  auth.onAuthStateChanged(function(user){
      if(user){
          var email = user.email;
          alert("Active User " + email);

      }else{
        alert("No Active User")
      }
  
    });
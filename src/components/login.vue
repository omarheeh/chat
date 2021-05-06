<template>
  <div class="wrapper">
    <form class="form-signin">
      <h2 class="form-signin-heading">Please login</h2>
      <button @click="login" class="btn btn-lg btn-primary btn-block" type="submit">Login with google</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
name: "login.vue"
,
  methods:{
  login(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth()
        .signInWithPopup(provider)
        .then((/*result*/) => {
          /** @type {firebase.auth.OAuthCredential} */
          //var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = credential.accessToken;
          // The signed-in user info.
          //var user = result.user;
          this.$router.push('/')
          // ...
        }).catch((/*error*/) => {
      // Handle Errors here.
      //var errorCode = error.code;
      //var errorMessage = error.message;
      // The email of the user's account used.
      //var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      //var credential = error.credential;
      // ...
    });
  }
  }
}
</script>

<style scoped>
body {
  background: #eee !important;
}

.wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 30px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type=text] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.form-signin input[type=password] {
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
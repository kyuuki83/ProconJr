class Model {
  constructor() {
    this.userName = "";
    this._userName = "";

    this.userImageUrl = "";
    this._userImageUrl = "";

    this.isLogin = false;
    this._isLogin = false;
  }
  set userName(x) {
    const name = document.getElementById("user-name");
    this._userName = x;
    if (x == "") {
      name.innerText = "Login";
    } else {
      name.innerText = this._userName;
    }
  }
  set userImageUrl(x) {
    const image = document.getElementById("user-image");
    this._userImageUrl = x;
    image.src = this._userImageUrl;
  }
  set isLogin(x) {
    const userImage = document.getElementById("user-image");
    if (x) {
      userImage.style.display = "block";
    } else {
      userImage.style.display = "none";
    }
  }
}
let model = new Model();
window.onload = function() {
  const loginUser = document.getElementById("login-user");

  loginUser.addEventListener("click", () => {
    if (model._isLogin) {
      firebase.auth().signOut();
      model.userName = "";
      model.userImageUrl = "";
      model.isLogin = false;
    } else {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          model.isLogin = true;
          model.userImageUrl = firebase.auth().currentUser.photoURL;
          model.userName = firebase.auth().currentUser.displayName;
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        });
    }
  });
};


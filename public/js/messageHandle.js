// Initialize Firebase
const config = {
    apiKey: "AIzaSyDYEDQD8LkpDGjIUvhtZLdvjwZMDSls-v0",
    authDomain: "webdemo-390eb.firebaseapp.com",
    databaseURL: "https://webdemo-390eb.firebaseio.com",
    projectId: "webdemo-390eb",
    storageBucket: "webdemo-390eb.appspot.com",
    messagingSenderId: "795749596150"
  };
  firebase.initializeApp(config);

  document.getElementById('form').addEventListener('submit', submitMessage);

  function submitMessage(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    saveMessage(name, email, message);

    document.getElementById('form').reset();
    alert('Thank you for your valuable message!');
  }

  function saveMessage(name, email, message){
      const messageRef = firebase.database().ref('/messages');

      const messageBase = messageRef.push();

      messageBase.set({
          name,
          email,
          message
      })


  }
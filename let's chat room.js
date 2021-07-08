var firebaseConfig = {
      apiKey: "AIzaSyCKbuFPyVRDzvOQlc7yni81w8-dWGVhFBI",
      authDomain: "let-s-chat-app-project.firebaseapp.com",
      projectId: "let-s-chat-app-project",
      storageBucket: "let-s-chat-app-project.appspot.com",
      messagingSenderId: "519706036797",
      appId: "1:519706036797:web:312d44c1d20097821e7854"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

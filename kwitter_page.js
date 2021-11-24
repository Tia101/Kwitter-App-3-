//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyAzfrH5vTmrZIkRYVFzA1HX5XqOsF-cumQ",
      authDomain: "kwitter-79b72.firebaseapp.com",
      databaseURL: "https://kwitter-79b72-default-rtdb.firebaseio.com",
      projectId: "kwitter-79b72",
      storageBucket: "kwitter-79b72.appspot.com",
      messagingSenderId: "627193598103",
      appId: "1:627193598103:web:e9144230309a41be11d9d2",
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()

{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message_msg,
            like:0
      });

      document.getElementById("msg").value = "";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

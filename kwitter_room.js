
var firebaseConfig = {
      apiKey: "AIzaSyDBXkdx0tPiua3WX2UaaI4V8E1PGTpqKAQ",
      authDomain: "kwitter-database-dbe3d.firebaseapp.com",
      databaseURL: "https://kwitter-database-dbe3d-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-dbe3d",
      storageBucket: "kwitter-database-dbe3d.appspot.com",
      messagingSenderId: "1029678767995",
      appId: "1:1029678767995:web:c1d01aae0627800a14e7de"
    };

    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user name");
 document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        
      console.log("Room name - " + Room_names);
      row = "<div class = 'room_name' id = '+Room_names+' onclick = 'redirectToRoomName(this.id)' ># " + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      //End 
      });});}
getData();


function addroom(){

room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html";

}


function redirectToRoomName(name) {
      
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";

}


function logout() {

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}
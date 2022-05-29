const firebaseConfig = {
      apiKey: "AIzaSyAGsCyS5JZkZ0_l7-qgPkLCQ_4-t-fGcyY",
      authDomain: "racism-6a64c.firebaseapp.com",
      databaseURL: "https://racism-6a64c-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "racism-6a64c",
      storageBucket: "racism-6a64c.appspot.com",
      messagingSenderId: "550522473765",
      appId: "1:550522473765:web:4fd279111f905cce909ecc"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function Gen3When(){
      RaionGaiden=document.getElementById("Shindai_Rengoku").value ;
      firebase.database().ref("/").child(RaionGaiden).update({
          purpose:"addinguser"
      })
  }
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

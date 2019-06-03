
$(document).ready(function() {

    var firebaseConfig = {
        apiKey: "AIzaSyDxMo9zE0YGmDVzh6O0BHDPA9ClufzCQ0E",
        authDomain: "project-1-e9716.firebaseapp.com",
        databaseURL: "https://project-1-e9716.firebaseio.com",
        projectId: "project-1-e9716",
        storageBucket: "project-1-e9716.appspot.com",
        messagingSenderId: "359911792247",
        appId: "1:359911792247:web:35b92d2cc78970ac"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    database.ref().on("child_added", function(snapshot){

    var data = snapshot.val();

    var latestUser = data.userFirstName;
    var userCity = data.userCity;
    var userState = data.userState;

    console.log(latestUser);
    
    var newRow = $("<h5>" + latestUser + " was here from " + userCity + ", " + userState + "</h5><br>");
    $("#guestData").prepend(newRow);
    
    })

})
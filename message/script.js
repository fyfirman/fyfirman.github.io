// Initialize Firebase
var config = {
    apiKey: "AIzaSyBVvqzuYTMoyiRcnUsEw7Po8ajTY3L5ras",
    authDomain: "fy-githubio.firebaseapp.com",
    databaseURL: "https://fy-githubio.firebaseio.com",
    projectId: "fy-githubio",
    storageBucket: "fy-githubio.appspot.com",
    messagingSenderId: "844412268819"
};
firebase.initializeApp(config);

function validate(message) {
    len = message.body.length;
    if (len > 0) {
        return true;
    } else return false;
}

function submit() {
    let message = {
        sender: document.getElementById("sender-input").value,
        body: document.getElementById("message-input").value
    };

    if (validate(message)) {
        storeMessage(message);
    } else {
        alert("Jangan kosong dong :(");
    }
}

function storeMessage(message) {
    firebase.database().ref('pesan/').push(message)
        .then(function (snapshot) {
            console.log('Message stored successfully');
            showSucessNotification();
        }, function (error) {
            console.log('Error : ' + error);
            showFailedNotification();
        });
}

function showSucessNotification() {
    document.getElementById("form").style.display = "none";
    document.getElementById("success").style.display = "block";
}

function showFailedNotification() {
    document.getElementById("form").style.display = "none";
    document.getElementById("failed").style.display = "block";
}

function showForm() {
    console.log("showForm clicked")
    document.getElementById("success").style.display = "none";
    document.getElementById("failed").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("sender-input").value = '';
    document.getElementById("message-input").value = '';
}
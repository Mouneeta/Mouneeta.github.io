// JavaScript source code
//Used to grab onto Firebase->Connection
  var firebaseConfig = {
    apiKey: "AIzaSyCx_eToHdGAK5lwAja9-wi7Y2Wn1LWoHek",
    authDomain: "contact-b21cc.firebaseapp.com",
    databaseURL: "https://contact-b21cc.firebaseio.com",
    projectId: "contact-b21cc",
    storageBucket: "contact-b21cc.appspot.com",
    messagingSenderId: "347254279137",
    appId: "1:347254279137:web:7ba6a775851d279521a0a0"
  };

  firebase.initializeApp(firebaseConfig);
   var messagesRef = firebase.database().ref('messages');
document.getElementById('contactform').addEventListener('submit',
submitForm);


function submitForm(e){
    e.preventDefault();
	var name = document.getElementById('name').value;
	var email =document.getElementById('email').value;
	//var subject=document.getElementById('subject').value;
	var message=document.getElementById('message').value;

	console.log(name);
	console.log(email);
	//console.log(subject);
	console.log(message);

	saveMessage(name,email,message);
}
function saveMessage(name, email, message){
	//create a new reference in "push" mode for writitng to DB
	var newMessageRef = messagesRef.push();
	//use the set function to write values to firebase DB
	newMessageRef.set({
	  //notice the brackets 
	  //and the data format "field name (in firebase): variable name"
	  name: name,
	  email:email,
	  //subject:subject,	
	  message:message
	});
  }
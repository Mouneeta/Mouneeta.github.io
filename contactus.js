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
  //Init Firebase 
  firebase.initializeApp(firebaseConfig);
  var firestore=firebase.firestore();
  //Grabing our DOM elements
  const submitBtn=document.querySelector('#submitAdd');
  let userEmail=document.querySelector('#email');
  let userName=document.querySelector('#name');
  let userMessage=document.querySelector('#message');

  const db=firestore.collection("ContactData");

  //submitBtn.addEventListener('click',function(){
  document.getElementById("submit").addEventListener("click", function(){
        let userNameInput=userName.value;
        let userEmailInput=userEmail.value;
        let userMessageInput=userMessage.value;

        db.doc().set({
            name:userNameInput,
            email:userNameInput,
            message:userMessageInput,
        })
        .then(function(){
            console.log("Data Saved");
        })
        .catch(function(error){
            console.log(error);
        });
  });
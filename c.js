 const userName=document.getElementById("name");
  const userEmail=document.getElementById("email");
  const userMessage=document.getElementById("message");

  const submitBtn=document.getElementById("submitAdd");

  const database=firebase.database();

  submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        database.ref('/users/'+userName.value).set({
        
        user_Email:userEmail.value,
        user_Message:userMessage.value,
        });
        document.getElementById("contactForm").reset();

  });
  

  
  
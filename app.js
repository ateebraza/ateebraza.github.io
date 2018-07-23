(function() {
	 // intialise firebase
	 const config={
		 apiKey:"AIzaSyD24V3KKMhGa9yZ-OXtIhs6HF5TZ9FEMkw",
		 authDomain:"railgo-7b1df.firebaseapp.com",
		 databaseURL: "https://railgo-7b1df.firebaseio.com",
		 storageBucket:"railgo-7b1df.appspot.com",
	 };
	 firebase.initializeApp(config);
	 
	 //get element
	 const txtemail=document.getElementById('txtemail');
	 const txtpassword=document.getElementById('txtpassword');
	 const btnlogin=document.getElementById('btnlogin');
	 //add login event
	 btnlogin.addEventListener('click',e=> {
		 // get email and pass
		 const email=txtemail.value;
		 const pass=txtpassword.value;
		 const auth=firebase.auth();
		 // sign in
		 const promise=auth.signInWithEmailAndPassword(email,pass);
		 promise.catch(e=> console.log(e.message));
	 });	 
      // add realtime listener
	  firebase.auth().onAuthStateChanged(firebaseUser => {
		  if(firebaseUser)  {
			  console.log(firebaseUser);
			  window.location.href='services.html';
		  }else{
			  console.log('not logged in');
		  }
	  });
		 
});
(function(){

    //initialise firebase
    const config = {
        apiKey: "AIzaSyA0hqNY5N4C6AI2_g21NDfLjZces296Xk4",
        authDomain: "rail-go-68c10.firebaseapp.com",
        databaseURL: "https://rail-go-68c10.firebaseio.com",
        projectId: "rail-go-68c10",
        storageBucket: "",
        messagingSenderId: "1044621455794"
      };
      firebase.initializeApp(config);


      const txtEmail =document.getElementById('txtEmail');
const txtPassword =document.getElementById('txtPassword');
const btnLogin =document.getElementById('btnLogin');
const btnSignUp =document.getElementById('btnSignUp');
//const btnLogout =document.getElementById('btnLogout');

btnLogin.addEventListener('click',e=>{
    const email=txtEmail.value;
    const pass=txtPassword.value;
    const auth=firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
})

}());
btnSignUp.addEventListener('click',e=>{
    const email=txtEmail.value;
    const pass=txtPassword.value;
    const auth=firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
});
//btnLogout.addEventListener('click', e =>{
  //  firebase.auth().signOut();
//} );
firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log(firebaseUser);
        window.location="http://ateebraza.github.io/services.html";
        
    }else{
        alert("Either incorrect user details or new user!");
    }
});



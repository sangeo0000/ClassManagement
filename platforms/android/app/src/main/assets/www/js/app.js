const txtemail = document.getElementById("email");
const txtpass = document.getElementById("pass");
const btnverify = document.getElementById("btnverify");
const btnlogout = document.getElementById("btnlogout");

btnverify.addEventListener('click', e =>{
    const email = txtemail.value;
    const pass = txtpass.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        document.getElementById("pageone").style.display = "none"
        document.getElementById("pagetwo").style.display = "block"
    } else {
        console.log("not logged in");
    }
});



btnlogout.addEventListener('click', e => {
    firebase.auth().signOut();
    document.getElementById("pageone").style.display = "block"
    document.getElementById("pagetwo").style.display = "none"
    console.log("signed out ==> btnlogout");
});
import React, {useState, useEffect } from "react";
import fire from "./fire";
import Login from "./Login";
import Hero from "./Hero";
// import Footer from "./Footer";
// import Note from "./Note";
// import CreateArea from "./CreateArea";

const App=()=> {
  const[user,setUser]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[emailError,setEmailError]=useState("");
  const[passwordError,setPasswordError]=useState("");
  const[hasAccount,setHasAccount]=useState(false);
  const [notes, setNotes] = useState([]);

  const clearInputs=()=>{
    setEmail("");
    setPassword("");
  };
  
  const clearErrors=()=>{
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin=()=>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
       case "auth/invalid-email":
       case "auth/user-disabled":
       case "auth/user-not-found":
        setEmailError(err.message);
       break;
       case "auth/wrong-password":
        setPasswordError(err.message);
        break;
      }
    });
  }
  
  const handleSignup =()=>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err)=>{
      switch(err.code){
       case "auth/email-already-in-use":
       case "auth/invalide-email":
       setEmailError(err.message);
       break;
       case "auth/weak-password":
        setPasswordError(err.message);
        break;
      }
    });
  };

  const handleLogout = () =>{
    fire.auth().signOut();
  };
  
  const authListener=()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  };

  useEffect(()=>{
    authListener();
  }, []);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <div className="App">
       {user ? (
         <Hero handleLogout={handleLogout}/>
       ) : (
      <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />
      )}
    </div>
    </div>
  );
}

export default App;

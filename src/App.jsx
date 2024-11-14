import { useState } from "react";
import "./App.css";
import { MdFormatAlignJustify } from "react-icons/md";

import Footer from "./components/Footer";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [display, setDisplay] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // vérification des correspondances des password
    if (password !== confirmPassword) {
      alert("Vos deux mots de passe ne sont pas identiques");
    }
  };

  return (
    <>
      <header>
        <MdFormatAlignJustify />
        <h1>Simple Form</h1>
      </header>
      <main>
        {display ? (
          <Form
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            setDisplay={setDisplay}
          />
        ) : (
          <StepTwo
            name={name}
            email={email}
            password={password}
            setDisplay={setDisplay}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;

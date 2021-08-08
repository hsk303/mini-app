import { useState } from 'react';
import Form from './Form';
import Display from './Display';
function App() {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setNumber] = useState("");
    let [theme, setTheme] = useState("Light");

    return (
        <div class="my-container">
            <Display name={name} email={email} phone={phone} theme={theme} />
            <Form theme={theme} handleName={setName} handleEmail={setEmail} handlePhone={setNumber} handleTheme={setTheme} />
        </div>
    );
}
export default App;
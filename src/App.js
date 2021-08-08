import { useState } from 'react';
import form from './form';
import display from './display';
function App() {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setNumber] = useState("");
    let [theme, setTheme] = useState("Light");

    return (
        <div>
            <display name={name} email={email} phone={phone} theme={theme} />
            <form theme={theme} handleName={setName} handleEmail={setEmail} handlePhone={setNumber} handleTheme={setTheme} />
        </div>
    );
}
export default App;
import { TextField, Stack, Button, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, FormControl, FormLabel } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isAgeInvalid, setIsAgeInvalid] = useState(false);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [isGenderInvalid, setIsGenderInvalid] = useState(false);

  const [inputType, setInputType] = useState('password');

  const userInputValidation = (inputTag) => {
    const { name, value } = inputTag;

    if (name === "name") {
      setName(value);
      setIsNameInvalid(!value.match(/^[a-zA-Z\s'-]+$/));
    } else if (name === "phone") {
      setPhone(value);
      setIsPhoneInvalid(!value.match(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/));
    } else if (name === "email") {
      setEmail(value);
      setIsEmailInvalid(!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/));
    } else if (name === "username") {
      setUsername(value);
      setIsUsernameInvalid(!value.match(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/));
    } else if (name === "password") {
      setPassword(value);
      setIsPasswordInvalid(!value.match(/^(?=.*[A-Z])(?=(.*[a-z]){3})(?=(.*\d){3})(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/));
    } else if (name === "age") {
      setAge(value);
      setIsAgeInvalid(!value.match(/^(1[89]|[2-9]\d)$/)); 
    } else if (name === "address") {
      setAddress(value);
      setIsAddressInvalid(value.trim() === "");
    } else if (name === "gender") {
      setGender(value);
      setIsGenderInvalid(value === "");
    }
  };

  const myFunction = () => {
    setInputType(prevType => (prevType === 'password' ? 'text' : 'password'));
  };

  const handleSubmit = () => {
    if (name && phone && email && username && password && age && address && gender && termsAccepted) {
      alert(`Form Submitted Successfully!👍
        Name: ${name}
        Phone: ${phone}
        Email Id: ${email}
        UserName: ${username}
        Password: ${password}
        Age: ${age}
        Address: ${address}
        Gender: ${gender}
      `);
    } else {
      alert("Please fill the form completely and accept the terms💀");
    }
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setUsername("");
    setPassword("");
    setAge("");
    setAddress("");
    setGender("");
    setTermsAccepted(false);

    setIsNameInvalid(false);
    setIsPhoneInvalid(false);
    setIsEmailInvalid(false);
    setIsUsernameInvalid(false);
    setIsPasswordInvalid(false);
    setIsAgeInvalid(false);
    setIsAddressInvalid(false);
    setIsGenderInvalid(false);
  };

  return (
    <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light rounded p-5'>
        <h3 style={{ color: 'red' }}>REGISTRATION FORM</h3>
        <form className="mb-3">
          <div className='mb-3'>
            <TextField value={name || ""} onChange={e => userInputValidation(e.target)} name='name' className='w-100' id="outlined-name" label="NAME" variant="outlined" />
          </div>
          {isNameInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Name Input</div>}

          <div className='mb-3'>
            <TextField value={phone || ""} name='phone' onChange={e => userInputValidation(e.target)} className='w-100' id="outlined-phone" label="PHONE" variant="outlined" />
          </div>
          {isPhoneInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Phone Number Input</div>}

          <div className='mb-3'>
            <TextField value={email || ""} name='email' onChange={e => userInputValidation(e.target)} className='w-100' id="outlined-email" label="EMAIL" variant="outlined" />
          </div>
          {isEmailInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Email Input</div>}

          <div className='mb-3'>
            <TextField value={username || ""} name='username' onChange={e => userInputValidation(e.target)} className='w-100' id="outlined-username" label="USERNAME" variant="outlined" />
          </div>
          {isUsernameInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Input</div>}

          <div className='mb-3'>
            <TextField value={password || ""} name='password' className='w-100' onChange={e => userInputValidation(e.target)} type={inputType} id="outlined-password" label="PASSWORD" variant="outlined" />
          </div>
          {isPasswordInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Password Input</div>}
          
          <div className='mb-3'>
            <TextField value={age || ""} name='age' onChange={e => userInputValidation(e.target)} className='w-100' id="outlined-age" label="AGE " variant="outlined" />
          </div>
          {isAgeInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Age Input</div>}

          <FormControl component="fieldset" className='mb-3'>
            <FormLabel component="legend">GENDER</FormLabel>
            <RadioGroup row name="gender" value={gender} onChange={e => { setGender(e.target.value); setIsGenderInvalid(false); }}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            {isGenderInvalid && <div className='text-danger mb-3 fw-bolder'>*Please select a gender</div>}
          </FormControl>

          <div className='mb-3'>
            <TextField value={address || ""} name='address' onChange={e => userInputValidation(e.target)} className='w-100' id="outlined-address" label="ADDRESS" variant="outlined" />
          </div>
          {isAddressInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Address Input</div>}

          <FormGroup>
            <FormControlLabel control={<Checkbox checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} />} label="I accept the Terms and Conditions" />
          </FormGroup>

          <Stack direction="row" spacing={2}>
            <Button onClick={handleSubmit} disabled={isNameInvalid || isPhoneInvalid || isEmailInvalid || isUsernameInvalid || isPasswordInvalid || isAgeInvalid || isAddressInvalid || isGenderInvalid} style={{ width: '50%', height: '60px' }} variant="contained">SUBMIT</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '60px' }} variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;



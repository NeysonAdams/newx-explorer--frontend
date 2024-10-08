import React, { useState, useEffect } from 'react';

import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './RegisterModal.css'


const RegisterModal = ({isOpen, onSighUp, onCloseModal, onSwitchToLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const extraButton = {name: "Sign in", action: onSwitchToLogin};

    useEffect(()=>{
      if(isOpen){
          setEmail('')
          setName('');
          setPassword('');
      }
  }, [isOpen]);

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const newUser = {
          email:email,
          name: name,
          password: password
      };
      onSighUp(newUser);
  };

    return (
      isOpen && ( 
        <ModalWithForm
        title="Sign up"
        name="sugnup"
        buttonText="Sign up"
        onClose={onCloseModal}
        onSubmit={handleSubmit}
        extraButton={extraButton}
      >
        <fieldset className='modal__fieldset'>
          <label htmlFor='emailReg' className="modal__form-label">Email</label>
          <input 
                onChange={handleEmailChange}
                value={email}
                id='emailReg' 
                type='email' 
                name='emailInput' 
                className='modal__form-input' 
                placeholder='Email' required />
        </fieldset>
        <fieldset className='modal__fieldset'>
          <label htmlFor='passwordReg' className="modal__form-label" >Password</label>
          <input 
                onChange={handlePasswordChange}
                value={password}
                id='passwordReg' 
                type='password' 
                name='passwordInput' 
                className='modal__form-input' 
                placeholder='Password' 
                required/>
        </fieldset>
        <fieldset className='modal__fieldset'>
          <label htmlFor='nameInput' className="modal__form-label">Name</label>
          <input 
                onChange={handleNameChange}
                value={name}
                id='nameInput' 
                type='text' 
                name='nameInput' 
                className='modal__form-input' 
                placeholder='Name' 
                minLength={3} required />
        </fieldset>
      </ModalWithForm>
    ));
  };

  export default RegisterModal;
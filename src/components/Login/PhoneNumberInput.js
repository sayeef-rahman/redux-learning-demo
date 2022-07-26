import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import './PhoneNumberInput.css';
import 'react-phone-number-input/style.css'

const PhoneNumberInput = () => {
  const [value, setValue] = useState()
  return (
    <div className='phone-number-container w-50 mx-auto mb-3'>
      <PhoneInput
      style={{marginBottom:'20px'}}
        placeholder='Phone Number'
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default PhoneNumberInput;

import React, { useState } from 'react';
import FirstSignInDialog from './FirstSignInDialog';
import Location from './steps/Location';

const FirstSignIn = () => {
	const [step, setStep] = useState(1);
	const province = useState("");
	const city = useState("");
  return (
    <FirstSignInDialog step={step} setStep={setStep}>
      <Location setStep={setStep} province={province} city={city}/>
    </FirstSignInDialog>
  );
}

export default FirstSignIn
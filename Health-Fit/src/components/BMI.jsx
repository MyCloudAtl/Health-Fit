import React, { useState } from 'react';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [abmi,setABMI] = useState(null);
  const [bmiweight, setBMIWeight] = useState('');
  const [bmiheight, setBMIHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const weightKg = (weight) * 0.453592


  const calculateAmericanBMI = () => {
    //the formula below was sourced from https://www.geeksforgeeks.org/how-do-you-convert-5-feet-10-inches-into-meters/
      const heightInAmerica = (feet * 0.3048) + (inches * 0.0254)
      const calculatedAmericanBMI = (weightKg / (heightInAmerica * heightInAmerica))
      setABMI(calculatedAmericanBMI)
  }
  const calculateBMI = () => {
    const heightInMeters = bmiheight / 100;
    const calculatedBMI = (bmiweight / (heightInMeters * heightInMeters)).toFixed(2)
    setBMI(calculatedBMI)
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <header>
      <label>
        <h2>Metric System:</h2>
        Weight (kg):&nbsp;
        <input type="number" value={bmiweight} onChange={(e) => setBMIWeight(e.target.value)} />
        &nbsp; 
        Height (cm):&nbsp;
        <input type="number" value={bmiheight} onChange={(e) => setBMIHeight(e.target.value)} />
        &nbsp; &nbsp;
      <button onClick={calculateBMI}>Calculate</button>
      <div className="bmi-answer">{bmi && <h4>Your BMI is: {bmi}</h4>}</div>
      </label>
      <br />
      <label>
        <h2>Imperial System:</h2>
        Weight (lbs):&nbsp;
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        &nbsp; 
        Height (ft):&nbsp;
        &nbsp;
        <input type="number" value={feet} onChange={(e) => setFeet(e.target.value)} />
        &nbsp;
        Height (in):&nbsp;
        &nbsp; 
        <input type="number" value={inches} onChange={(e) => setInches(e.target.value)} />
        &nbsp; &nbsp;
        <button onClick={calculateAmericanBMI}>Calculate</button>
      <div className="bmi-answer">{abmi && <h4>Your BMI is: {abmi}</h4>}</div>
      </label>
      <br />
      </header>
      <main>
        //sourced from https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/english_bmi_calculator/bmi_calculator.html
      <u><h2>Adults</h2></u>
      <p>Anorexia : Less than 17.5</p>	
      <p>Underweight : 17.5 - 18.5</p>
      <p>Ideal range : 18.5 - 24.9</p>
      <p>Overweight range : 25 - 29.9</p>
      <p>Obese range : More than 30.00</p>
      </main>
    </div>
  );
};

export default BMI;
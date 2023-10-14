import React, { useState } from 'react';

const AgeCalculator = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const currentDate = new Date();
    const enteredDate = new Date(`${year}-${month}-${day}`);
    const ageInMilliseconds = currentDate - enteredDate;
    const ageInYears = new Date(ageInMilliseconds).getFullYear() - 1970;
    setAge(ageInYears);
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <input
        type="number"
        placeholder="Enter day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <p>Your age is {age} years.</p>}
    </div>
  );
};

export default AgeCalculator;

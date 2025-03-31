"use client";
import React, { useState } from 'react';
import Checkbox55 from '../_components/Checkbox_55';

const Example_55 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="mb-4">Checkbox 55 Example</h1>
      <Checkbox55 value={isChecked} onChange={handleCheckboxChange} />
      <p className="mt-4">Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
};

export default Example_55; 
"use client"
"use client"; import React, { useState } from 'react';import Checkbox1 from '../_components/Checkbox_1';

const Example_1 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="mb-4">Checkbox 1 Example</h1>
      <Checkbox1 value={isChecked} onChange={handleCheckboxChange} />
      <p className="mt-4">Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  );
};

export default Example_1; 
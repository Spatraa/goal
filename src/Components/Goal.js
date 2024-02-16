import React, { useState } from 'react';

const Goal = () => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonBlur, setButtonBlur] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Update button blur state based on input length
    setButtonBlur(value.length === 0);
  };

  const handleAddGoalClick = () => {
    // Handle the logic when the "Add Goal" button is clicked
    if (inputValue.length > 0) {
      // Add your logic here for adding the goal
      console.log('Goal added:', inputValue);
    }
  };

  return (
    <div>
      <h5>Course Goal</h5>
      <input
        type="text"
        placeholder="enter course goal"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        style={{ backgroundColor: isButtonBlur ? 'lightcoral' : 'red' }}
        onClick={handleAddGoalClick}
        onBlur={() => setButtonBlur(true)}
      >
        Add Goal
      </button>
    </div>
  );
};

export default Goal;

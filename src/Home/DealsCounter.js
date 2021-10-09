import React, { useState } from "react";

const DealsCounter = () => {
  const [counterVal, setCounterVal] = useState(0);
  const [inputVal, setInputVal] = useState(1);
  return (
    <div>
      <h2 data-testid="deal-counter">{counterVal}</h2>
      <button data-testid="minus-btn">-</button>
      <input
        className="text-center"
        type="number"
        data-testid="input"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button data-testid="add-btn">+</button>
    </div>
  );
};

export default DealsCounter;

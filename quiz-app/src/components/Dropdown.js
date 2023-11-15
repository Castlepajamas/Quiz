import { useState } from 'react';
function Dropdown({ options, onChange }) {
    const [selectedOption, setSelectedOption] = useState(options[0]);
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
      if (onChange) {
        onChange(event.target.value);
      }
    };
  
    return (
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
  
  export default Dropdown;

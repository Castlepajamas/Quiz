import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Dropdown from './components/Dropdown';
import React, { useState } from 'react';
import TextField from './components/TextField';
import Textarea from './components/TextArea';
import NumberInput from './components/NumberInput';
import ToggleSwitch from './components/ToggleSwitch';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';


function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleDropdownChange = (selectedOption) => {
    console.log(`Selected: ${selectedOption}`);
  };
  const [textareaValue, setTextareaValue] = useState('');

  const [inputValue, setInputValue] = useState('');

  const [numberValue, setNumberValue] = useState(0);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.id]: event.target.checked,
    });
  };
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div>
        <Button text="Click Me" onClick={handleClick} />
      </div>
      <div>
        <Dropdown options={options} onChange={handleDropdownChange} />
      </div>
      
      <div>
        <TextField 
          type="text" 
          placeholder="Enter text" 
          value={inputValue} 
          onChange={setInputValue} 
        />
      </div>
      
      <div>
        <Textarea 
          placeholder="Enter your message" 
          value={textareaValue} 
          onChange={setTextareaValue} 
        />
      </div>
      <div>
        <NumberInput 
          value={numberValue} 
          onChange={value => setNumberValue(Number(value))}
          min={0}
          max={100}
          step={1}
        />
      </div>
      <div>
        <ToggleSwitch id="toggleSwitch" checked={isToggled} onChange={handleToggle} />
        <label htmlFor="toggleSwitch">{isToggled ? 'Toggle On' : 'Toggle Off'}</label>
      </div>
      <div>
        <Checkbox
          id="check1"
          label="Check this box"
          checked={!!checkedItems['check1']}
          onChange={handleChange}
        />
        
      </div>
      <div>
      <h3>Select an option:</h3>
        <form>
          <RadioButton
            name="radioGroup"
            label="Option 1"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleRadioChange}
          />
          <RadioButton
            name="radioGroup"
            label="Option 2"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleRadioChange}
          />
        </form>
      </div>
      
    </div>
  )
  
}

export default App;

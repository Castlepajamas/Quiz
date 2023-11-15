function NumberInput({ value, onChange, min, max, step = 1 }) {
    return (
      <input 
        type="number" 
        value={value} 
        onChange={e => onChange(e.target.value)}
        min={min}
        max={max}
        step={step}
      />
    );
  }
  
  export default NumberInput;
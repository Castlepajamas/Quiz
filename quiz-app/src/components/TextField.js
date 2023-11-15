function TextField({ type = 'text', placeholder, value, onChange }) {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default TextField;
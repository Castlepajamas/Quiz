function Textarea({ placeholder, value, onChange }) {
    return (
      <textarea 
        placeholder={placeholder} 
        value={value} 
        onChange={e => onChange(e.target.value)}
      />
    );
  }
  
  export default Textarea;
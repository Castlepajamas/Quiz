function RadioButton({ name, value, checked, onChange, label }) {
    return (
      <div>
        <input
          type="radio"
          id={value}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={value}>{label}</label>
      </div>
    );
}
export default RadioButton;  
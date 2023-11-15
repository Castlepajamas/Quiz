function ToggleSwitch({ id, checked, onChange }) {
    return (
      <>
        <input
          className="toggle-switch-checkbox"
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <label className="toggle-switch-label" htmlFor={id}>
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </>
    );
  }
  
  export default ToggleSwitch;
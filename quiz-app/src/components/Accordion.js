import {useState} from 'react';


const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion-wrapper">
        <div
          className={`accordion-title ${isOpen ? 'open' : ''}`}
          onClick={toggle}
        >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };
  
  export default Accordion;
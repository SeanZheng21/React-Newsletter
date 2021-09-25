import React from 'react';
import './FormTextInput.css';

function FormTextInput(props) {    
    const labelText = props.labelText;
    const textContent = props.textContent;
    const placeholder = props.placeholder;
    const type = props.type;
    const errorMsg = props.errorMsg;
    return (
      <div className="form-group">
        <div className="form-label">
          <label htmlFor={labelText}>{labelText}</label>
        </div>

        <input value={textContent}
                type={type}
                placeholder={placeholder}
               onChange={(e) => {
                  props.onTextInputChange(e.target.value);
                }} />
        <br />
        { errorMsg !== "" &&
            <div className="error-message">
              <p>* {errorMsg}</p>
            </div>
        }
      </div>
    );
}

export default FormTextInput;
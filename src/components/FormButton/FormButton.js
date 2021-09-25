import React from 'react'

import './FormButton.css'

function FormButton(props) {
    if (props.isSubmit) {
        // Submit button for the form without a callable action
        return <input type="submit" 
                    disabled={props.disabled}
                    value={props.text}/>
    } else {
        // A normal button in the form with onClick handler
        return <input type="button" 
                disabled={props.disabled}
                onClick={props.onClick}
                value={props.text}/>
    }
}

export default FormButton;
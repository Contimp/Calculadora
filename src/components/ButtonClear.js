import React from "react";
import '../stylesheet/ButtonClear.css';

const ButtonClear = (props) => (
    <div className="button-clear" onClick={props.handleClear}>
        {props.children}
    </div>
);

export default ButtonClear;

import React from 'react'
import './style.css';
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={'my-input'}/>

    );
});
export default MyInput;

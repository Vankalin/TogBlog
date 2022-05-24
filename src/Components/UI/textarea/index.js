import React from 'react'
import './style.css';
const ModalTextarea = React.forwardRef((props, ref) => {
    return (
        <textarea ref={ref} {...props} className={'modal-textarea'}/>

    );
});
export default ModalTextarea;

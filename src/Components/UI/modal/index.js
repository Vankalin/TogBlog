import React from 'react'
import './style.css'
const MyModal = ({children, visible, setVisible}) => {

const rootClasses =['my-modal']
if (visible) {
    rootClasses.push('active');
    
}
return (
    <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
        <div className={'my-modal__content'} onClick={(e)=> e.stopPropagation()}>
        {children}

        </div>
    </div>
  )
}

export default MyModal
import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
           <hr style={{margin:'20px 0'}}/>
           <MyInput
              placeholder={'Search...'}
              value={filter.query}
              onChange={event=> setFilter({...filter, query:event.target.value})} 
           
           />
           <MySelect 
              value={filter.sort}
              onChange={selectedSort=>setFilter({...filter, sort:selectedSort})}
              defValue='Sort by'
              options={[
                {value:'title', name:'Title'},
                {value:'body', name:'Description'}

              ]}
           />
        </div>
        
  )
}

export default PostFilter
import React from 'react'
import '../css/listitem.css'
import {DeleteOutlined , EditOutlined ,UserDeleteOutlined} from'@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Listitem = (props) => {
   const dispatch = useDispatch()

   const handleClick = (id) => {
      console.log(id);
      dispatch({
         type: 'REMOVE_DOCTOR',
         payload: id
      })


   }

   return (
      <>
         <div className='card-item'>
            <span  className='title-doc'>{props.person.name}</span>
            <div className='btn-wrap'>       
            <Link  className='edit-icon' to={`doctor/edit/${props.person.id}`}><span><EditOutlined/></span></Link>
            <span className='delete-icon'><UserDeleteOutlined onClick={()=>handleClick(props.person.id)} /></span>
            </div>   
         </div>
      </>
   )
}
export default Listitem
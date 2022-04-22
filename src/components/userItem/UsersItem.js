import React from 'react'
import { FaRegTrashAlt, FaFire } from "react-icons/fa";
import s from './UsersItem.module.css'


export const UsersItem = ({name, deleteUser, id}) => {
  return (
    <li className={s.item}>
      <h4>
        <FaFire color='rgb(178, 108, 116)' size='10px' /> 
        <span className={s.name}>{name}</span>
      </h4> 
      <button
        className={s.button}
        type="button"
        aria-label="Delete contact"    
        onClick={() => deleteUser(id)}
        >
        <FaRegTrashAlt color='rgb(160, 8, 26)' size='20px' />
      </button>
    </li>
  )
}

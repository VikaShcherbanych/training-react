import {useState} from 'react'
import shortid from 'shortid';
import { FaCheckCircle } from "react-icons/fa";
import s from './UserForm.module.css'

export const UserForm = ({ onSubmit }) => {

  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.currentTarget.value);
  }

  const makeUser = (event) => {
    event.preventDefault();
    if (name === '') {
      return
    }
    const id = shortid.generate();
    const user = { id, name };
    onSubmit(user)
    reset();
  }

  const reset = () => {
    setName('')
  }

  return (
  <form 
    onSubmit = {makeUser}
  >
  <label  className={s.label}>
    Name
  <input
    type="text"
    name="name"
    value={name}
    className={s.input}
    onChange = {handleInputChange}
  />
  </label>     
        
  <button
    className={s.button}
    type="submit"
  >
  <FaCheckCircle color="rgb(178, 108, 116)" size="25px"/>
  </button>
  </form>
  )
}

import React from 'react'
import { UsersItem } from './userItem/UsersItem'

export const UsersList = ({array, deleteUser}) => {
  return (
    <ul>
        {array.length > 0
        ?
        array.map((item) => 
        <UsersItem 
        deleteUser={deleteUser}
        name={item.name}
        id={item.id}
        key={item.id}
        />
        )
        :
        <h2>Please, enter a name</h2>
        }
    </ul>
  )
}

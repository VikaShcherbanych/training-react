import React from 'react';
import { UserForm } from './userForm/UserForm';
import { UsersList } from './UsersList';

const Main = ({addUser, deleteUser, users}) => {

    return (
        <main>
            <section>
                <UserForm 
                onSubmit={addUser}
                />
                <UsersList 
                array={users}
                deleteUser={deleteUser}
                />
            </section>
            <section style={{padding : '20px'}}>
                <p>
                    More text
                </p>
            </section>
        </main>
    );
};

export default Main;
